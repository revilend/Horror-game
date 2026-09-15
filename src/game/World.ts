import * as THREE from 'three';

const CELL = 4; // cell size in world units
const WALL_H = 3.5;
const WALL_THICK = 0.2;

/**
 * Map cell types:
 * 0 = wall/solid
 * 1 = floor (corridor)
 * 2 = key location
 * 3 = exit door
 * 4 = monster spawn
 */

const MAP_LAYOUT = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 2, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 3, 0],
  [0, 1, 1, 1, 0, 0, 4, 0, 0, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export interface MapInfo {
  grid: number[][];
  walls: THREE.Mesh[];
  floor: THREE.Mesh;
  keyPositions: THREE.Vector3[];
  exitPosition: THREE.Vector3;
  monsterSpawn: THREE.Vector3;
  playerSpawn: THREE.Vector3;
  exitDoor: THREE.Mesh;
  decorations: THREE.Group;
}

export function buildWorld(scene: THREE.Scene): MapInfo {
  const grid = MAP_LAYOUT;
  const walls: THREE.Mesh[] = [];
  const keyPositions: THREE.Vector3[] = [];
  let exitPosition = new THREE.Vector3();
  let monsterSpawn = new THREE.Vector3();
  let playerSpawn = new THREE.Vector3();
  let exitDoor: THREE.Mesh | null = null;

  // Materials
  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a2a,
    roughness: 0.9,
    metalness: 0.1,
  });

  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 1.0,
    metalness: 0.0,
  });

  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    roughness: 1.0,
  });

  const keyMat = new THREE.MeshStandardMaterial({
    color: 0xffaa00,
    emissive: 0xffaa00,
    emissiveIntensity: 0.8,
    roughness: 0.3,
    metalness: 0.8,
  });

  const doorMat = new THREE.MeshStandardMaterial({
    color: 0x4a2800,
    roughness: 0.8,
    metalness: 0.2,
  });

  const doorLockMat = new THREE.MeshStandardMaterial({
    color: 0x888888,
    emissive: 0xff0000,
    emissiveIntensity: 0.5,
    metalness: 0.9,
    roughness: 0.2,
  });

  const decorations = new THREE.Group();

  // Build floor and ceiling
  const floorGeo = new THREE.PlaneGeometry(grid[0].length * CELL, grid.length * CELL);
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(
    (grid[0].length * CELL) / 2 - CELL / 2,
    0,
    (grid.length * CELL) / 2 - CELL / 2
  );
  floor.receiveShadow = true;
  scene.add(floor);

  const ceiling = new THREE.Mesh(floorGeo, ceilingMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(floor.position.x, WALL_H, floor.position.z);
  scene.add(ceiling);

  // Build walls
  const wallGeo = new THREE.BoxGeometry(CELL, WALL_H, WALL_THICK);
  const wallGeoSide = new THREE.BoxGeometry(WALL_THICK, WALL_H, CELL);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const cx = col * CELL;
      const cz = row * CELL;
      const cell = grid[row][col];

      // Wall cells or edges of floor cells
      if (cell === 0) continue; // Solid walls are implicit

      // Add walls around floor cells where adjacent to solid
      const neighbors = [
        { dr: -1, dc: 0, geo: wallGeo, pos: [cx, WALL_H / 2, cz - CELL / 2 + WALL_THICK / 2] as [number, number, number] },
        { dr: 1, dc: 0, geo: wallGeo, pos: [cx, WALL_H / 2, cz + CELL / 2 - WALL_THICK / 2] as [number, number, number] },
        { dr: 0, dc: -1, geo: wallGeoSide, pos: [cx - CELL / 2 + WALL_THICK / 2, WALL_H / 2, cz] as [number, number, number] },
        { dr: 0, dc: 1, geo: wallGeoSide, pos: [cx + CELL / 2 - WALL_THICK / 2, WALL_H / 2, cz] as [number, number, number] },
      ];

      for (const n of neighbors) {
        const nr = row + n.dr;
        const nc = col + n.dc;
        if (nr < 0 || nr >= grid.length || nc < 0 || nc >= grid[0].length || grid[nr][nc] === 0) {
          const wall = new THREE.Mesh(n.geo, wallMat);
          wall.position.set(...n.pos);
          wall.castShadow = true;
          wall.receiveShadow = true;
          scene.add(wall);
          walls.push(wall);
        }
      }

      // Place key
      if (cell === 2) {
        const keyGeo = new THREE.OctahedronGeometry(0.3, 0);
        const key = new THREE.Mesh(keyGeo, keyMat);
        key.position.set(cx, 1.0, cz);
        key.userData.isKey = true;
        key.userData.keyIndex = keyPositions.length;
        scene.add(key);
        keyPositions.push(new THREE.Vector3(cx, 1.0, cz));
      }

      // Place exit door
      if (cell === 3) {
        exitPosition.set(cx, WALL_H / 2, cz);
        const door = new THREE.Mesh(
          new THREE.BoxGeometry(CELL * 0.8, WALL_H * 0.9, 0.3),
          doorMat
        );
        door.position.set(cx, WALL_H * 0.45, cz);
        door.castShadow = true;
        scene.add(door);
        exitDoor = door;

        // Lock indicator
        const lock = new THREE.Mesh(
          new THREE.SphereGeometry(0.15),
          doorLockMat
        );
        lock.position.set(cx + 0.8, WALL_H * 0.45, cz);
        scene.add(lock);
      }

      // Monster spawn
      if (cell === 4) {
        monsterSpawn.set(cx, 1.5, cz);
      }

      // Player spawn (first floor cell)
      if (cell === 1 && row === 1 && col === 1) {
        playerSpawn.set(cx, 1.7, cz);
      }

      // Decorations on some floor cells
      if (cell === 1 && Math.random() < 0.15) {
        addDecoration(decorations, cx, cz);
      }

      // Ceiling lights
      if (cell === 1 && Math.random() < 0.2) {
        addCeilingLight(decorations, cx, cz);
      }
    }
  }

  scene.add(decorations);

  return {
    grid,
    walls,
    floor,
    keyPositions,
    exitPosition,
    monsterSpawn,
    playerSpawn,
    exitDoor: exitDoor!,
    decorations,
  };
}

function addDecoration(group: THREE.Group, x: number, z: number): void {
  const type = Math.floor(Math.random() * 3);
  let mesh: THREE.Mesh;

  if (type === 0) {
    // Crate
    const geo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const mat = new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 1 });
    mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x + (Math.random() - 0.5) * 2, 0.3, z + (Math.random() - 0.5) * 2);
  } else if (type === 1) {
    // Barrel
    const geo = new THREE.CylinderGeometry(0.3, 0.35, 0.8, 8);
    const mat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.7, metalness: 0.3 });
    mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x + (Math.random() - 0.5) * 2, 0.4, z + (Math.random() - 0.5) * 2);
  } else {
    // Broken chair frame
    const geo = new THREE.BoxGeometry(0.1, 0.5, 0.1);
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a3a2a, roughness: 1 });
    mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x + (Math.random() - 0.5) * 2, 0.25, z + (Math.random() - 0.5) * 2);
    mesh.rotation.y = Math.random() * Math.PI;
    mesh.rotation.z = (Math.random() - 0.5) * 0.5;
  }

  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
}

function addCeilingLight(group: THREE.Group, x: number, z: number): void {
  const lightGeo = new THREE.BoxGeometry(0.3, 0.05, 0.3);
  const lightMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffaa66,
    emissiveIntensity: 0.3,
  });
  const lightMesh = new THREE.Mesh(lightGeo, lightMat);
  lightMesh.position.set(x, WALL_H - 0.05, z);
  lightMesh.userData.isCeilingLight = true;
  group.add(lightMesh);
}

/** Check if a world position is walkable (not inside a wall) */
export function isWalkable(grid: number[][], wx: number, wz: number): boolean {
  const col = Math.round(wx / CELL);
  const row = Math.round(wz / CELL);
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return false;
  return grid[row][col] !== 0;
}

/** Get grid coordinates from world position */
export function worldToGrid(wx: number, wz: number): { row: number; col: number } {
  return {
    row: Math.round(wz / CELL),
    col: Math.round(wx / CELL),
  };
}

export { CELL, WALL_H };

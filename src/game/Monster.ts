import * as THREE from 'three';
import { CELL, WALL_H } from './World';

/**
 * Monster that patrols the map and chases the player when in line of sight.
 */
export class Monster {
  mesh: THREE.Group;
  private grid: number[][];
  private position: THREE.Vector3;
  private targetPosition: THREE.Vector3 = new THREE.Vector3();
  private patrolPoints: THREE.Vector3[] = [];
  private currentPatrolIndex = 0;
  private speed = 2.5;
  private chaseSpeed = 4.5;
  private isChasing = false;
  private detectedPlayer = false;
  private detectionRange = 12;
  private loseRange = 18;
  private eyeLight: THREE.PointLight;
  private animPhase = 0;
  private bodyMeshes: THREE.Mesh[] = [];

  constructor(grid: number[][], spawn: THREE.Vector3) {
    this.grid = grid;
    this.position = spawn.clone();
    this.mesh = new THREE.Group();

    // Monster body
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x1a0a0a,
      roughness: 0.8,
      metalness: 0.2,
    });

    // Torso
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.4, 0.5),
      bodyMat
    );
    torso.position.y = 1.2;
    torso.castShadow = true;
    this.mesh.add(torso);
    this.bodyMeshes.push(torso);

    // Head
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 8, 8),
      bodyMat
    );
    head.position.y = 2.2;
    head.castShadow = true;
    this.mesh.add(head);
    this.bodyMeshes.push(head);

    // Glowing eyes
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 2,
    });
    
    const leftEye = new THREE.Mesh(
      new THREE.SphereGeometry(0.06),
      eyeMat
    );
    leftEye.position.set(-0.1, 2.25, -0.25);
    this.mesh.add(leftEye);

    const rightEye = new THREE.Mesh(
      new THREE.SphereGeometry(0.06),
      eyeMat
    );
    rightEye.position.set(0.1, 2.25, -0.25);
    this.mesh.add(rightEye);

    // Arms
    const leftArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 1.0, 0.2),
      bodyMat
    );
    leftArm.position.set(-0.6, 1.0, 0);
    this.mesh.add(leftArm);
    this.bodyMeshes.push(leftArm);

    const rightArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 1.0, 0.2),
      bodyMat
    );
    rightArm.position.set(0.6, 1.0, 0);
    this.mesh.add(rightArm);
    this.bodyMeshes.push(rightArm);

    // Legs
    const leftLeg = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.8, 0.25),
      bodyMat
    );
    leftLeg.position.set(-0.2, 0.4, 0);
    this.mesh.add(leftLeg);
    this.bodyMeshes.push(leftLeg);

    const rightLeg = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.8, 0.25),
      bodyMat
    );
    rightLeg.position.set(0.2, 0.4, 0);
    this.mesh.add(rightLeg);
    this.bodyMeshes.push(rightLeg);

    // Eerie light
    this.eyeLight = new THREE.PointLight(0xff0000, 1, 6);
    this.eyeLight.position.set(0, 2.3, 0);
    this.mesh.add(this.eyeLight);

    this.mesh.position.copy(this.position);

    // Set patrol points
    this.setPatrolPoints();
  }

  private setPatrolPoints(): void {
    // Find some walkable cells for patrol
    for (let r = 1; r < this.grid.length - 1; r++) {
      for (let c = 1; c < this.grid[0].length - 1; c++) {
        if (this.grid[r][c] === 1 && Math.random() < 0.08) {
          this.patrolPoints.push(new THREE.Vector3(c * CELL, 1.5, r * CELL));
        }
      }
    }
    if (this.patrolPoints.length === 0) {
      this.patrolPoints.push(new THREE.Vector3(8 * CELL, 1.5, 8 * CELL));
    }
  }

  addToScene(scene: THREE.Scene): void {
    scene.add(this.mesh);
  }

  /** Check line of sight to player */
  private hasLineOfSight(playerPos: THREE.Vector3): boolean {
    const dir = playerPos.clone().sub(this.position);
    const distance = dir.length();
    if (distance > this.detectionRange) return false;

    // Simple raycast along grid
    const steps = Math.ceil(distance / (CELL * 0.5));
    const step = dir.divideScalar(steps);
    const checkPoint = this.position.clone();

    for (let i = 0; i < steps; i++) {
      checkPoint.add(step);
      const col = Math.round(checkPoint.x / CELL);
      const row = Math.round(checkPoint.z / CELL);
      if (row >= 0 && row < this.grid.length && col >= 0 && col < this.grid[0].length) {
        if (this.grid[row][col] === 0) return false;
      }
    }
    return true;
  }

  update(dt: number, playerPos: THREE.Vector3): { reachedPlayer: boolean } {
    const distToPlayer = this.position.distanceTo(playerPos);

    // Detection logic
    if (!this.isChasing && this.hasLineOfSight(playerPos) && distToPlayer < this.detectionRange) {
      this.isChasing = true;
      this.detectedPlayer = true;
    } else if (this.isChasing && distToPlayer > this.loseRange) {
      this.isChasing = false;
      this.detectedPlayer = false;
    }

    let target: THREE.Vector3;
    let currentSpeed: number;

    if (this.isChasing) {
      target = playerPos.clone();
      target.y = this.position.y;
      currentSpeed = this.chaseSpeed;
    } else {
      target = this.patrolPoints[this.currentPatrolIndex];
      currentSpeed = this.speed;
      
      if (this.position.distanceTo(target) < 1) {
        this.currentPatrolIndex = (this.currentPatrolIndex + 1) % this.patrolPoints.length;
      }
    }

    // Move toward target
    const dir = target.clone().sub(this.position);
    dir.y = 0;
    if (dir.length() > 0.1) {
      dir.normalize();
      const move = dir.clone().multiplyScalar(currentSpeed * dt);
      const newPos = this.position.clone().add(move);
      
      // Check walkability
      const col = Math.round(newPos.x / CELL);
      const row = Math.round(newPos.z / CELL);
      if (row >= 0 && row < this.grid.length && col >= 0 && col < this.grid[0].length) {
        if (this.grid[row][col] !== 0) {
          this.position.x = newPos.x;
          this.position.z = newPos.z;
        }
      }

      // Face movement direction
      this.mesh.rotation.y = Math.atan2(dir.x, dir.z);
    }

    // Animation
    this.animPhase += dt * (this.isChasing ? 8 : 3);
    const bobAmount = this.isChasing ? 0.15 : 0.05;
    
    // Body bob
    this.bodyMeshes[0].position.y = 1.2 + Math.sin(this.animPhase) * bobAmount;
    this.bodyMeshes[1].position.y = 2.2 + Math.sin(this.animPhase) * bobAmount;

    // Arms swing
    if (this.bodyMeshes[2]) {
      this.bodyMeshes[2].rotation.x = Math.sin(this.animPhase) * 0.5;
    }
    if (this.bodyMeshes[3]) {
      this.bodyMeshes[3].rotation.x = -Math.sin(this.animPhase) * 0.5;
    }

    // Legs walk
    if (this.bodyMeshes[4]) {
      this.bodyMeshes[4].rotation.x = Math.sin(this.animPhase) * 0.4;
    }
    if (this.bodyMeshes[5]) {
      this.bodyMeshes[5].rotation.x = -Math.sin(this.animPhase) * 0.4;
    }

    // Eye light flicker
    this.eyeLight.intensity = this.isChasing ? 
      1.5 + Math.sin(this.animPhase * 3) * 0.5 :
      0.5 + Math.sin(this.animPhase) * 0.2;

    this.mesh.position.copy(this.position);

    return { reachedPlayer: distToPlayer < 1.5 };
  }

  reset(spawn: THREE.Vector3): void {
    this.position.copy(spawn);
    this.mesh.position.copy(this.position);
    this.isChasing = false;
    this.detectedPlayer = false;
    this.currentPatrolIndex = 0;
  }
}

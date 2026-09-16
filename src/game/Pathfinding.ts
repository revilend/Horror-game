/**
 * Grid pathfinding used by the monster AI.
 *
 * The original monster only walked straight at the player and stopped dead
 * whenever a wall got in the way. A breadth-first search over the 16x16 map
 * is cheap enough to re-run a few times per second and fixes that completely.
 */

export interface GridPoint {
  row: number;
  col: number;
}

export function isWalkableCell(grid: number[][], row: number, col: number): boolean {
  if (row < 0 || row >= grid.length) return false;
  if (col < 0 || col >= grid[0].length) return false;
  return grid[row][col] !== 0;
}

/** Drop waypoints that sit on a straight run - the follower only needs corners. */
function removeCollinear(path: GridPoint[]): GridPoint[] {
  if (path.length <= 2) return path;

  const out: GridPoint[] = [path[0]];
  for (let i = 1; i < path.length - 1; i++) {
    const prev = out[out.length - 1];
    const cur = path[i];
    const next = path[i + 1];
    const straightRow = prev.row === cur.row && cur.row === next.row;
    const straightCol = prev.col === cur.col && cur.col === next.col;
    if (!straightRow && !straightCol) out.push(cur);
  }
  out.push(path[path.length - 1]);
  return out;
}

const NEIGHBOURS: ReadonlyArray<readonly [number, number]> = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

/**
 * Shortest 4-connected path from `start` to `goal`.
 * Returns an empty array when there is no route (or both points are the same).
 * The returned path excludes `start` and ends on `goal`.
 */
export function findPath(grid: number[][], start: GridPoint, goal: GridPoint): GridPoint[] {
  const rows = grid.length;
  const cols = grid[0].length;

  if (!isWalkableCell(grid, start.row, start.col)) return [];
  if (!isWalkableCell(grid, goal.row, goal.col)) return [];

  const startIndex = start.row * cols + start.col;
  const goalIndex = goal.row * cols + goal.col;
  if (startIndex === goalIndex) return [];

  const previous = new Int32Array(rows * cols).fill(-1);
  const visited = new Uint8Array(rows * cols);
  const queue: number[] = [startIndex];
  visited[startIndex] = 1;

  let head = 0;
  let found = false;

  while (head < queue.length) {
    const current = queue[head++];
    if (current === goalIndex) {
      found = true;
      break;
    }

    const row = Math.floor(current / cols);
    const col = current % cols;

    for (const [dr, dc] of NEIGHBOURS) {
      const nr = row + dr;
      const nc = col + dc;
      if (!isWalkableCell(grid, nr, nc)) continue;

      const next = nr * cols + nc;
      if (visited[next]) continue;

      visited[next] = 1;
      previous[next] = current;
      queue.push(next);
    }
  }

  if (!found) return [];

  const path: GridPoint[] = [];
  let node = goalIndex;
  while (node !== startIndex) {
    path.push({ row: Math.floor(node / cols), col: node % cols });
    node = previous[node];
    if (node < 0) return [];
  }

  path.reverse();
  return removeCollinear(path);
}

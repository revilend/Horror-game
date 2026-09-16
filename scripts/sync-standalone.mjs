/*
 * Mirrors dist/ into standalone/.
 *
 * Why this exists: GitHub Pages can be left on "Deploy from a branch", in
 * which case it publishes the repository root verbatim - including the raw,
 * unbundled index.html. index.html detects that and forwards the visitor to
 * ./standalone/, which is a committed copy of the real build. The game then
 * runs without anyone having to touch the repository settings.
 *
 * Run automatically by `bun run build`.
 */
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';

const SOURCE = 'dist';
const TARGET = 'standalone';

if (!existsSync(`${SOURCE}/index.html`)) {
  console.error(`No build found in ${SOURCE}/ - run \`vite build\` first.`);
  process.exit(1);
}

rmSync(TARGET, { recursive: true, force: true });
mkdirSync(TARGET, { recursive: true });
cpSync(SOURCE, TARGET, { recursive: true });

console.log(`Mirrored ${SOURCE}/ -> ${TARGET}/ (fallback for raw branch deploys)`);

// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The post on X is the entry; this program only hands its address to the
// grader. It reads POST.json from the repository root, checks it names one
// X post address, and writes that same JSON to the output directory, where
// the gate reads it as /output/POST.json. If POST.json still holds the
// placeholder, it copies it through with a warning on stderr — the gate
// itself refuses a placeholder, so the program never has to.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

// An X post address looks like https://x.com/<handle>/status/<digits>
// (twitter.com works too). Anything else is the placeholder or a typo.
function isPostAddress(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  return /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(value);
}

function fail(message: string): never {
  console.error(`gta6-meme-x-01: ${message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

let raw: string;
try {
  raw = readFileSync(join(BOT_DIR, POST_FILE), 'utf8');
} catch (err) {
  fail(`could not read ${POST_FILE} from ${BOT_DIR}: ${(err as Error).message}`);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  fail(`${POST_FILE} is not valid JSON: ${(err as Error).message}`);
}

if (typeof post !== 'object' || post === null || !('url' in post)) {
  fail(`${POST_FILE} must be a JSON object with a "url" field`);
}

const url = (post as { url: unknown }).url;
if (!isPostAddress(url)) {
  console.error(
    `gta6-meme-x-01: warning: ${POST_FILE} does not name an X post address yet — ` +
      `replace the placeholder with the post's address before submitting`,
  );
}

try {
  writeFileSync(join(OUTPUT_DIR, POST_FILE), `${JSON.stringify(post)}\n`);
} catch (err) {
  fail(`could not write ${POST_FILE} to ${OUTPUT_DIR}: ${(err as Error).message}`);
}

import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

await import("./build-standalone.mjs");

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = resolve(root, "docs");

await mkdir(docsDir, { recursive: true });
await copyFile(
  resolve(root, "standalone/fsa-college-concept.html"),
  resolve(docsDir, "index.html")
);
await writeFile(resolve(docsDir, ".nojekyll"), "GitHub Pages should serve this directory as static files.\n");

console.log("Wrote docs/index.html for GitHub Pages");

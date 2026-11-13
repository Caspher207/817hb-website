// Copies the client before/after photographs into public/images for LOCAL
// PREVIEW ONLY, or removes them so production builds exclude them.
//
//   node scripts/gallery.mjs on   -> copy client-gallery/* to public/images
//   node scripts/gallery.mjs off  -> remove results-facial-* from public/images
//
// The photographs show identifiable individuals and must not ship in the
// public production build until publication consent is confirmed.

import { cpSync, rmSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SRC = fileURLToPath(new URL('../client-gallery/', import.meta.url))
const DEST = fileURLToPath(new URL('../public/images/', import.meta.url))
const mode = process.argv[2]

if (mode === 'on') {
  if (!existsSync(SRC)) {
    console.log('gallery: client-gallery/ not present — skipping (preview runs without the photos)')
    process.exit(0)
  }
  for (const f of readdirSync(SRC)) cpSync(join(SRC, f), join(DEST, f))
  console.log('gallery: preview images copied to public/images')
} else if (mode === 'off') {
  for (const f of readdirSync(DEST)) {
    if (f.startsWith('results-facial-')) rmSync(join(DEST, f))
  }
  console.log('gallery: results photos removed from public/images')
}

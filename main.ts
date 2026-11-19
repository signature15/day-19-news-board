/**
 * entry.png - a cream newsprint broadsheet covering one single day:
 * Thursday 19 November 2026, laid out as one 1024x1024 page.
 *
 * The sheet opens with a masthead carrying the page's title, stamped
 * with a red date tab so the day cannot be mistaken for any other.
 * Directly beneath it runs a day-in-numbers strip: the ICJ's 9-6
 * genocide vote, Anthropic's $81bn IPO, the M5.7 quake in Kumamoto,
 * and UK inflation at 3.6%. The news itself then descends in tiers -
 * three hero cards first (the Shenzhen three-way summit, the ICJ's
 * Myanmar ruling, Anthropic's Nasdaq debut), then five secondary
 * cards, then seven tertiary cards. Below them, twenty-four
 * region-tagged evening briefs sweep the rest of the world, and a
 * date-check footer at the bottom of the sheet marks where Thursday
 * truly ends.
 *
 * This program publishes the finished sheet: it copies entry.png,
 * byte for byte, into the output directory. Nothing is drawn here -
 * the broadsheet is complete before this script ever runs.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);

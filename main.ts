/**
 * entry.png - "One Day in World News", Thursday 19 November 2026.
 *
 * The one artifact this program publishes is a 1024x1024 poster drawn as
 * a cream newsprint broadsheet: a single page carrying the whole world's
 * news for Thursday 19 November 2026. At the top, the masthead names the
 * page and a red date tab stamps it with the day. Just below, a
 * day-in-numbers strip boils the news down to its figures - the ICJ's
 * 9-6 genocide vote, Anthropic's $81bn IPO, the M5.7 quake that struck
 * Kumamoto, and UK inflation at 3.6%. The stories then run in three
 * tiers: three hero cards lead (the Shenzhen three-way summit, the ICJ's
 * Myanmar ruling, and Anthropic's Nasdaq debut), five secondary cards
 * follow, and seven tertiary cards round out the middle of the page.
 * Twenty-four region-tagged evening briefs fill the lower sheet, and a
 * date-check footer closes the page, separating Wednesday's carryover
 * from what actually happened on the day.
 *
 * Running main.ts ships the finished poster: it copies entry.png byte
 * for byte into the output directory. Nothing is rendered at run time.
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

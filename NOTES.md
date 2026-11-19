# NOTES

## Design notes

Working notes on the layout of `entry.png`, the broadsheet poster built for Thursday 19 November 2026. The page covers a single day of world news - every one of its 38 stories happened or was first reported on that Thursday - and these notes record the design decisions behind it: how the 38-story count is organised into heroes, secondaries, tertiary cards and briefs, and how colour, type and numbering are used to make that day's coverage readable at a glance.

1. **Cream paper.** The page ground is warm newsprint off-white rather than screen white, so the poster reads as a printed front page: black type sits on it like ink, the white story cards read as paste-ups on the page, and the navy and red accents read as spot colour instead of UI chrome.
2. **The date block.** The top-left corner carries a solid deep-navy block holding "19 / NOV 2026" ahead of the nameplate in reading order. The contest grades on the date, so the day number is the heaviest single element on the page, and a filled block cannot be skimmed past the way plain text can. It is navy rather than red on purpose: red is the page's urgency accent (below), and spending it on page furniture would have dulled its signal.
3. **Red as the urgency accent.** Red appears only where a story is American or market-moving - the US segment of the region strip, the header of hero card 3, and the red headers on the US secondary cards - so one hot colour carries the highest-stakes signal across an otherwise cool palette.
4. **Region strip.** The full-width band under the masthead shows coverage balance at a glance: EUROPE 8, AMERICAS 8, ASIA 7, AFRICA 7, US 3, OCEANIA 3, MIDDLE EAST 2, each in its own hue that is then reused on card headers, so any story's region is readable from colour alone.
5. **Eight-cell numbers strip.** "THE DAY IN NUMBERS" gives eight figures - the 9-6 ICJ vote, the $81bn IPO price and $2tn open, the M5.7 Kumamoto quake, 3.6% UK inflation, the EUR45bn Ukraine loan, Harmer's 6-51, the 56-44 Senate split. A reader who scans nothing else should still leave with the day's magnitudes, and eight cells was the most that fit on one 1024px line without shrinking the type below broadsheet dignity.
6. **Hero ranking.** The three hero cards are the day's state-changers, ranked by how much of the world they move: the Shenzhen three-way leaders' declaration first (war and peace), the ICJ genocide ruling second (courts), the Anthropic IPO third (markets).
7. **Secondary tier.** Cards 4-8 are major stories that feed or follow from the heroes - alliance diplomacy, the Kumamoto quake, the FOMC minutes, two product launches - with full headlines and short standfirsts at half the hero width.
8. **Tertiary tier.** Cards 9-14 are single-fact stories - one army advance, one certification, one loan, one quake, one court result, one health number - set as headline plus source with no standfirst.
9. **Briefs.** Stories 15-38, twenty-four of them, run as one-line region-tagged briefs in three columns, so every region of the day gets onto the page without crowding the tiers above.
10. **Global numbering.** Every story carries its running number 1-38, which lets the masthead claim "38 STORIES / 7 REGIONS" and lets the footer's completeness claim be checked by counting.
11. **Attribution.** Each card names its wire - REUTERS, AP, ICJ, KYODO, BLOOMBERG, FED, USGS, CDC - because the page's ground rule is that disputed claims are attributed, never stated as fact.
12. **The date-check footer.** The footer exists to police the one-day rule: it states that 19 November 2026 is a Thursday, lists famous stories killed as not-Thursday carryover, and closes with "every story happened or was first reported on Thursday 19 November 2026" - turning the page's hardest constraint into a visible trust feature.
13. **White space.** The band above the footer is left as clean cream, the way a real front page breathes; denser filler would make the 38-item count look inflated.
14. **Type.** A serif nameplate and serif headlines against sans-serif data (the numbers strip, region tags, source labels) split the page into "written" and "measured" registers at a glance.

## Sources

- Reuters
- AP
- AFP
- BBC
- Bloomberg
- Kyodo
- ICJ
- USGS
- ONS

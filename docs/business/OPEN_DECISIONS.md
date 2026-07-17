# Open Decisions

## Purpose

This document lists only decisions that are still open.

Do not repeat decisions already made in `.ai/` or `docs/business/`.

## Decisions

### Required Before First Public Release

| Decision | What Must Be Resolved |
| --- | --- |
| Production domain | Final public URL for canonical metadata, sitemap, robots, and Cloudflare Pages |
| Contact method | Whether first public contact uses email, scheduling link, lightweight form, or another safe path |
| Privacy policy | Final public policy before collecting contact data or adding analytics |
| Service priority | Which service pages ship first |
| Logo asset | Vector reconstruction, small-size review, lockups, favicon, app icon and social assets for the approved geometric `YW` direction; generated raster material must not ship directly and the public wordmark remains `YSWORKS` |

### Open But Not Blocking A Minimal First Release

| Decision | What Must Be Resolved |
| --- | --- |
| Contact form backend | Whether to use Cloudflare Workers, another public API layer, or no form initially |
| Analytics provider | Whether to use privacy-aware analytics and which provider |
| Newsletter | Whether a newsletter exists and what content cadence justifies it |
| Public portfolio | Which real work can be published, if any |
| Labs first entries | Which public experiments are safe and useful to publish |
| Journal cadence | Whether Journal starts with a few durable articles or waits |
| Product visibility | When Canarias Tourism Platform or other products become public-safe |

## Rule

If implementation depends on an unresolved decision, pause and resolve the
decision before building. Do not treat newsletter, advanced analytics, Journal,
multiple case studies, Labs entries, or public products as blockers for a minimal
first release.

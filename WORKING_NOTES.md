# Working Notes — Spencer Portfolio Website

## Core Insights
- **Spencer wants breadth over depth in skills**: He wants all skills listed so employers can see everything he offers. Organized by category rows, not hidden behind tabs.
- **External image CDNs are unreliable**: Simple Icons CDN, Wikimedia Commons, and Clearbit logos all broke during this build. Use local images or Iconify API (most reliable CDN found). Google favicon service works for logos but quality varies.
- **Spencer prefers subtle/soft effects**: "Noticeable but soft" wins. But "too subtle to notice" is also rejected — minimum visibility threshold applies to all animations, hovers, and accent colors.
- **Bento grids work for visual hierarchy**: Asymmetric card layouts (featured large + compact others) communicate importance better than equal grids. Used successfully in Projects section.
- **Full-page takeover > modals for rich content**: Case studies need room for screenshots, narrative, metrics, tech stack. Modals and expand-in-place are too constrained.
- **Scrollytelling > hard section breaks**: Sticky containers with crossfade for section transitions (hero→about). Content transforms in viewport rather than hard cuts.
- **Spencer gives fast visual rejections — ship and iterate**: Present 2-3 options with recommendation, let him choose, build quickly. Don't over-explain or over-ask.

## Domain Notes

### [portfolio] 2026-03-30 — Hero blob visibility on light backgrounds
Radial gradients with low alpha (0.15-0.18) + 80px blur + 0.4 parent opacity = invisible on near-white (#f8fafc). Need solid rgba backgrounds at 0.28-0.35 opacity with 120px blur for soft-but-visible result.

### [portfolio] 2026-03-30 — Research synthesis: top 5 employer-impact changes
1. Real project screenshots (not gradient placeholders)
2. Case study deep-dives (Problem → Approach → Impact)
3. Professional headshot in About — DONE (moved to hero)
4. Resume download button in Contact
5. Animated text reveals + smooth scroll for polish — DONE (split-reveal + parallax)

### [portfolio] 2026-03-30 — About section design learnings
Multiple card-based approaches failed for About: bento grid, dark cards, interactive keywords, typographic statement. Root cause: light theme + white cards = no contrast. Split layout with asymmetric content was the winning pattern. The scrollytelling transition (hero morphs into About in same viewport) was the breakthrough for section-to-section flow.

### [portfolio] 2026-03-30 — Spencer's design feedback patterns
Spencer gives fast, clear rejections ("this looks off", "I can't see any changes", "this looks like instruction"). He trusts Claude's judgment on implementation but has strong instincts about what feels right visually. Best approach: present options, let him choose direction, then build. Don't over-explain — ship and iterate.

### [portfolio] 2026-03-30 — Icon CDN reliability ranking
1. Iconify API (`api.iconify.design`) — best coverage, most reliable, aggregates multiple icon sets
2. Google Favicons (`google.com/s2/favicons?domain=X&sz=128`) — always available, quality varies
3. Devicon (`cdn.jsdelivr.net/gh/devicons/devicon`) — good for dev tools, missing enterprise apps
4. Simple Icons CDN (`cdn.simpleicons.org`) — broken for many slugs, avoid
5. Clearbit Logos (`logo.clearbit.com`) — completely down as of 2026-03-30

### [portfolio] 2026-03-30 — Oddsix is an analytics platform, not a betting tool
Spencer is a basketball enthusiast who built a comprehensive NBA analytics dashboard. Predictions are one feature among player tracking, league standings, historical data, and interactive visualizations. Frame it as data exploration, not gambling. Lead with "built by a basketball fan."

### [portfolio] 2026-03-30 — Portfolio.html bundle requires UTF-8 encoding on Windows
The Python bundle script must use `encoding='utf-8'` for both reading dist files and writing portfolio.html. Windows default (cp1252) fails on Unicode characters in the JS bundle.

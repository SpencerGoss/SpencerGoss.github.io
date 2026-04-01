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

### [portfolio] 2026-03-31 — Standalone portfolio.html vs Netlify deploy: different image strategies
Local images at `public/images/experience/` work for Vite dev and Netlify deploy but break in the standalone `portfolio.html` bundle (no local file access). Solution: bg images use gradient fallback (opacity stays 0 if image doesn't load), logos use Google favicon URLs (work anywhere). Don't base64-encode images — would bloat the 333KB bundle massively.

### [portfolio] 2026-03-31 — Accessibility is non-visual and safe to add without design approval
Skip-to-content links, aria-labels, keyboard nav, and prefers-reduced-motion support are invisible to sighted users. These can be added autonomously without Spencer's design review. Keyboard-accessible BentoCards need `role="button"`, `tabIndex={0}`, and `onKeyDown` handler for Enter/Space.

### [portfolio] 2026-03-31 — AI System section: Spencer wants general showcase, not project-specific
First attempt named specific projects and agents — Spencer rejected it. Wants it to show the SYSTEM ARCHITECTURE generically (skills, agents, living system) so employers see depth of AI usage. Spencer must be the start/hub of the loop — he's the architect, not a bystander. Descriptions must be plain English, no jargon.

### [portfolio] 2026-03-31 — Skills section has a min-h-screen problem
The `min-h-screen` class on Skills forces a full viewport minimum even though content doesn't fill it. Combined with scroll-reveal stagger on categories, this creates massive blank gaps. Remove min-h-screen and let content determine height.

### [portfolio] 2026-03-31 — Dark-to-light section transitions need gradient bridging
The AI System section (dark #0f172a) sits between Projects (light #FAFBFF) and Skills (light #F1F5F9). Hard edges between light→dark→light look broken. Need gradient transitions at both edges of the dark section.

### [portfolio] 2026-03-31 — Design audit priority pattern
Spencer reviews in the browser and gives fast feedback. Present changes, let him scroll through, collect feedback in batches. Don't over-explain — ship and iterate. He cares about how it LOOKS, not the code behind it.

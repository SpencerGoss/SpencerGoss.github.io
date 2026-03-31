# Working Notes — Spencer Portfolio Website

## Core Insights
- **Hero must be static and scannable**: Spencer rejected rotating words in the subtitle — the hero's job is 6-second identity recognition, not animation. Save dynamic elements for lower sections.
- **Spencer rejects card-based layouts for About**: Multiple attempts (bento grid, dark cards, equal cards, interactive keywords) all felt "bland" or "template-y." The winning pattern is split layout with asymmetric content (statement left, details right).
- **Numbers without context are meaningless**: Stat cards (4+ Projects, 2 Degrees, 3 Industries) were removed because they don't say anything without supporting narrative. Metrics belong in the Projects section where they have context.
- **Scrollytelling > hard section breaks**: Content that transforms within the same viewport (hero→about) feels more impressive than a gradient fade or hard cut. Sticky containers with crossfade are the mechanism.
- **Spencer prefers subtle/soft effects**: Confirmed multiple times — "noticeable but soft" wins over bold. Applies to colors, animations, transitions. But "too subtle to notice" is also rejected — there's a minimum visibility threshold.
- **Blob opacity stacking**: The `.blob` parent class sets `opacity: 0.4` globally — any child blob inherits this multiplicatively. Use standalone classes (`.hero-blob`) for direct control.
- **prefers-reduced-motion blocks all animations**: Spencer's Windows has animation effects toggled ON now, but this is worth remembering if animations stop working.

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

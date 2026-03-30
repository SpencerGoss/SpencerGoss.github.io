# Working Notes — Spencer Portfolio Website

## Core Insights
- **Blob opacity stacking**: The `.blob` parent class sets `opacity: 0.4` globally — any child blob inherits this multiplicatively. Use standalone classes (`.hero-blob`) when you need direct control over opacity on light backgrounds.
- **prefers-reduced-motion blocks all animations**: Spencer's Windows has animation effects OFF, which disables `split-reveal`, blob drift, gradient-shift, and bounce-arrow via the existing media query. Must be toggled ON to preview any motion work.
- **Unused code assets exist**: `TYPEWRITER_WORDS` array and `.typewriter-cursor` CSS are defined but not rendered anywhere — available for hero subtitle rotation without new code.
- **Hiring manager 6-second rule**: Research shows employers spend 6-8 seconds on initial hero scan. Metrics and specificity in the hero outperform generic taglines. "72.6% accuracy" beats "I solve problems."
- **Portfolio IS the work sample**: For a BA/DA candidate, the fact the portfolio is hand-coded React (not Squarespace) is itself a differentiator — make this visible.

## Domain Notes

### [portfolio] 2026-03-30 — Hero blob visibility on light backgrounds
Radial gradients with low alpha (0.15-0.18) + 80px blur + 0.4 parent opacity = invisible on near-white (#f8fafc). Need solid rgba backgrounds at 0.28-0.35 opacity with 120px blur for soft-but-visible result.

### [portfolio] 2026-03-30 — Research synthesis: top 5 employer-impact changes
1. Real project screenshots (not gradient placeholders)
2. Case study deep-dives (Problem → Approach → Impact)
3. Professional headshot in About
4. Resume download button in Contact
5. Animated text reveals + smooth scroll for polish

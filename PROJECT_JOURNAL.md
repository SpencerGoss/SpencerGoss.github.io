# Project Journal — Spencer Portfolio Website

## 2026-03-30 — Hero Redesign Research + First Implementations

### What Was Done
- **Comprehensive design research**: Researched 60+ sources across 21st.dev, Awwwards, Dribbble, hiring manager studies, and modern web animation trends. Compiled 54 specific ideas across 4 priority tiers for a full section-by-section redesign.
- **Hero ambient background blobs**: Added two large, blurred, slowly drifting blobs (cyan + blue) to the hero background. Replaces flat `#f8fafc` with a soft living wash. Uses standalone `.hero-blob` classes (not the existing `.blob` parent) to avoid stacked opacity issues.
- **Hero staggered entrance animation**: Applied existing `split-reveal` classes to hero elements in sequence — badge (0ms) → name (100ms) → subtitle (250ms) → tagline (400ms) → buttons (550ms) → media card (700ms). Creates a cinematic load experience.

### Discoveries
- The existing `.blob` parent class has `opacity: 0.4` which stacks multiplicatively with child opacity — caused initial blobs to be invisible. Solution: standalone `.hero-blob` class without inheriting `.blob`.
- Spencer has `prefers-reduced-motion: reduce` enabled in Windows (Accessibility → Visual Effects → Animation effects OFF). This disables all `split-reveal` and blob animations via the existing `@media (prefers-reduced-motion)` rule. He needs to toggle this to preview animations.
- The `TYPEWRITER_WORDS` array and `.typewriter-cursor` CSS exist in the codebase but are unused — leftover from a previous iteration. Could be wired up for rotating subtitle text.

### Decisions
- Working section-by-section through the hero first, then nav, about, projects, skills, experience, contact, global polish
- Spencer prefers "noticeable but soft" blob intensity (option A) over bold/vibrant (option B)
- 54 ideas saved to memory at `memory/project_redesign_plan.md` for cross-session continuity

### What's Next
- Spencer needs to enable Windows animation effects to preview the staggered hero entrance
- Continue hero section: rotating/flip words for subtitle, sharpen tagline copy, colored browser dots, richer card stats
- Then move to navigation, about, projects, etc.

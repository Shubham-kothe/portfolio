# Experience Card Redesign – Implementation Notes

Date: 2025-08-22

## What changed in this iteration

Following your steps:

1. Removed borders

- Dropped default Card borders. No `border-*` utilities remain.
- Rely on glass background and a hairline gradient mask for subtle separation.

2. Correct padding

- CardContent padding set to `p-6 md:p-7` for comfortable spacing.

3. Themed background gradient

- Card surface uses `bg-white/60 dark:bg-slate-800/70 backdrop-blur-xl` with a sheen overlay to mirror the “View My Work” button feel.
- Added a sheen overlay layer (like `.cta-btn:before`): `bg-[linear-gradient(140deg,rgba(255,255,255,0.45),rgba(255,255,255,0))]` and dark variant.

4. Gradient company name

- Company name uses gradient text via `bg-clip-text text-transparent` with slate→indigo→pink gradient (and dark variant).

5. Invisible logo border

- Logo avatar has a hairline, invisible border using `ring-[1.5px] ring-transparent` + highlight shimmer overlay.

6. Correct border radius

- Consistent rounded radius `rounded-[1.25rem]` on card and gradient frame.

7. Hairline gradient card border

- Added ultra-thin gradient border using a masked layer: `[background:linear-gradient(...)] p-[0.75px] [mask:...]` to appear as a fine gradient edge.

8. Matched CTA secondary aesthetics

- Shadows tuned to `0 6px 20px -8px rgba(15,23,42,0.18)` (dark mode variant as well), consistent with the secondary CTA styling.

9. Animations and interactions retained

- Click to expand; active card gets `ring-2` indigo highlight and slight scale up. Description reveals with height/opacity animation.

## Goals

- Use shadcn and Tailwind to create a modern card with proper transparency and gradients.
- Show company name, logo, role, duration; reveal description on click with smooth animation.
- Center, round the logo, and present information cleanly.
- Render four dummy experiences with 16px gaps between cards.

## UX & Visual Decisions

- Glassmorphism base with themed translucency and soft sheen matches the CTA button feel.
- Subtle gradient border created using a masked layer; soft ring on active state for focus.
- Centered circular logo with gradient background and highlight shimmer for a consistent avatar look.
- Compact information hierarchy: Title > Meta row (role + duration) > expandable description.
- Motion: layout animation for card growth, fade/height transition for description.

## Component API

- ExperienceCard props:
  - companyName: string
  - companyLogo?: string
  - role: string
  - duration?: string
  - description?: string
  - className?: string
  - isActive?: boolean
  - onClick?: () => void

## Key Files

- `src/components/common/ExperienceCard.tsx`

  - Clickable animated card using shadcn `Card` and framer-motion (`motion.div`, `AnimatePresence`).
  - Min size satisfies 70x50 requirement; responsive beyond that.
  - Description is hidden by default; revealed when `isActive` is true.

- `src/components/sections/Experience.tsx`
  - Renders 4 dummy experiences with a React logo.
  - Manages `activeId` state to toggle cards and highlight the active one.
  - Grid layout with 16px gap (`gap-4`).

## How to Adjust

- Tune overlay opacity or gradient angle on the sheen layer for stronger/weaker glass effect.
- Swap `companyLogo` for other images via props or data.
- Tweak animation timings in `transition` objects.
- Change grid columns or gaps in the section file.

## Next Ideas

- Keyboard accessibility: handle Enter/Space to toggle, `aria-expanded`.
- Add tech badges and CTA links.
- Support multiline descriptions and collapse icon affordances.

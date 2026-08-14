# Design System & Engineering Rules: Taste-Skill & Impeccable

This project adheres to the **Leonxlnx/taste-skill** (High-Agency Frontend) and **Paul Bakaus's Impeccable Design System** standards to ensure high craftsmanship, aesthetic restraint, and intentional UI/UX engineering.

## Core Directives

### 1. Anti-Slop & Craftsmanship Standards
- **No Generic UI Clichés**: Reject generic purple/cyan neon gradients, arbitrary glassmorphic borders with uncalibrated drop shadows, and oversized hero blocks.
- **Anti-Emoji Policy in UI Elements**: Avoid raw emoji icons (e.g. 🏊, 🏃, 🎨, 💻) as primary UI decorators; use crisp, semantic vector icons from `lucide-react` with deliberate stroke widths and matching color accents.
- **Micro-tactility**: Every button, card, and interactive control must feature responsive hover, focus-visible (`focus-visible:ring-2`), and active press states (`active:scale-[0.98]`).
- **No Text Break Defects**: Text inside badges, pills, tabs, and action buttons must never wrap or awkwardly truncate. Use `whitespace-nowrap` and calculate 2:1 horizontal-to-vertical padding ratios.

### 2. Typographic Hierarchy & Metric Rhythm
- **Font Pairing**: Display typography (`font-display`, Fredoka / Plus Jakarta Sans) paired with readable, well-kerned body typography with optical line-height (1.5 to 1.7) and constrained line widths (`max-w-prose` / 65–75ch).
- **Scale Contrast**: Distinct stepping across headings (H1 > H2 > H3 > H4) with clear mathematical hierarchy.
- **Nested Border Radius Rule**: `Inner Radius = Outer Radius - Distance Between The Two (Padding)` to prevent optical dissonance.

### 3. Palette Discipline & Accessibility
- **Brand System (Keithvin Junior School)**:
  - Keithvin Royal Blue: `#0864B8`
  - Deep Navy Blue: `#00549F`
  - Sky Tint: `#DCEAFF`
  - Sunrise Gold / Amber: `#FFA500`
  - Vibrant Emerald: `#25D366` / `#10B981` (Admissions / WhatsApp actions)
  - Ocean Teal: `#078A9A`
  - Crisp Light Canvas: `#F8FBFF` / `#FFFFFF`
- **Contrast**: Strict WCAG AA compliance (4.5:1 minimum for body text, 3:1 for large display elements). Never place low-contrast gray text on tinted backgrounds.

### 4. Layout & Viewport Stability
- **Mobile-First & Fluidity**: Use `min-h-[100dvh]` on full-height landing sections to prevent dynamic mobile address bar jumps.
- **Touch-First Hit Targets**: Minimum 44px touch targets across mobile navigation and action triggers.
- **Structured Grid Alignment**: Prefer CSS Grid and explicit subgrid/flex alignments over percentage hacks.

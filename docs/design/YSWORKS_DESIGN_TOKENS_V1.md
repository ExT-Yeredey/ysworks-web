# YSWORKS Design Tokens v1.0

- Status: Founder-approved
- Scope: All YSWORKS products and communication surfaces
- Brand color: Primary 500, `#6D5EF7`

## 1. Purpose

This contract is the permanent color-token foundation for the Public Website,
Client Workspace, YS AI OS, internal dashboards, mobile applications, future
SaaS products, documentation, PDFs, and presentations. Products consume these
primitives through semantic aliases appropriate to their medium; they do not
create competing brand palettes.

Its constitutional basis is the [Brand Bible](../BRAND_BIBLE.md), especially
the neutral field, guidance role, and permanent single-accent rule
(*II.V.1–3*). This contract supplies operational values without duplicating
that reasoning.

## 2. Primary Scale

| Token | Value |
| --- | --- |
| Primary 50 | `#F4F2FF` |
| Primary 100 | `#E8E4FF` |
| Primary 200 | `#D2CAFF` |
| Primary 300 | `#B7A8FF` |
| Primary 400 | `#947EFF` |
| Primary 500 | `#6D5EF7` |
| Primary 600 | `#5A4DE6` |
| Primary 700 | `#493DD0` |
| Primary 800 | `#382FA8` |
| Primary 900 | `#261F73` |

Primary 500 is the official YSWORKS brand color. The scale supports hierarchy
and accessible foreground/background combinations; it is not a collection of
alternative brand colors.

## 3. Interaction Tokens

| Token | Value | Purpose |
| --- | --- | --- |
| Hover | `#7A6CFF` | Pointer hover on primary interactive surfaces |
| Active | `#5A4DE6` | Pressed or active primary state |
| Focus | `#8A7DFF` | Visible keyboard focus indicator |
| Glow | `rgba(109, 94, 247, 0.24)` | Restrained identity glow |
| Soft | `rgba(109, 94, 247, 0.12)` | Subtle selected or supporting surface |
| Border | `rgba(109, 94, 247, 0.18)` | Accent-related boundary |

Focus is never communicated through color alone and must remain visible against
the adjacent surface. Glow is optional decoration; it cannot carry meaning or
reduce contrast.

## 4. Dark Surface Tokens

| Token | Value |
| --- | --- |
| Background | `#09090B` |
| Surface | `#111114` |
| Surface Alt | `#17171C` |
| Border | `#24242A` |
| Text | `#F5F5F7` |
| Muted | `#A1A1AA` |

These values form the official dark-first neutral foundation. Additional
semantic status colors may exist when a product needs success, warning, error,
or information states, but they must not compete with Primary 500 as brand
identity and must pass the applicable accessibility checks.

## 5. Semantic Use

Implementations map primitives to semantic roles such as background, surface,
text, primary action, link, focus ring, selected state, accent border, and glow.
Components consume semantic roles rather than raw values. This preserves a
single identity while allowing an accessible light theme and medium-specific
rendering.

Primary actions use Primary 500, Hover, and Active. Text links and compact
accent text use a scale value that meets contrast against the current surface.
Cards, diagrams, navigation, footers, FAQs, technology content, copy
confirmation, and animation effects use the same semantic aliases; none defines
a local accent.

## 6. Cross-product Rules

- Use the complete Primary scale and interaction tokens without substitution.
- Use Primary 500 for the official brand swatch in digital and print assets.
- Preserve legibility when a document medium cannot reproduce transparency;
  use the nearest opaque scale value instead of inventing a new hue.
- Keep light-theme neutral surfaces product-specific until separately governed,
  while retaining this primary scale and interaction behavior.
- Do not infer client-facing status, severity, or approval from brand purple.
- Validate contrast in the actual foreground/background pairing; token approval
  does not make every pairing accessible.
- Do not restore the retired electric-blue or earlier purple palettes.

## 7. Governance

Changing Primary 500, any primary scale value, or an interaction token requires
an explicit Founder decision and a versioned update to this contract. Adding a
semantic alias does not change the brand palette. Product-specific tokens may
extend this contract only where their domain requires it and may not contradict
its primitives.

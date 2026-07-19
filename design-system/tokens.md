# Design Tokens

- Status: production contract
- Scope: YSWORKS Public Website
- Source of truth: `src/styles/tokens.css` and `src/styles/theme.css`
- Constitutional basis: [Brand Bible](../docs/BRAND_BIBLE.md)
  (*II.IV–VI*)

## Purpose

Tokens separate approved design decisions from component implementation. Every
repeated visual value must enter components through a primitive or semantic
token. Component-local custom properties are permitted only for calculated
geometry or runtime state.

The Founder-approved color contract remains
[YSWORKS Design Tokens v1.0](../docs/design/YSWORKS_DESIGN_TOKENS_V1.md). This
document does not add or reinterpret colors.

## Token Layers

1. Brand primitives use the `--ys-*` namespace.
2. Scales define type, spacing, radius, shadow, motion, and container values.
3. Theme aliases use `--color-*` and map approved primitives to accessible dark
   and light roles.
4. Semantic roles describe component intent, including `--text-*`,
   `--control-*`, `--surface-*`, `--layout-*`, `--section-*`, `--content-*`,
   and `--grid-*`.

Components consume the highest applicable semantic layer. They must not copy a
raw value that already has a governed role.

## Core Contracts

| Concern | Governed roles |
| --- | --- |
| Brand | `--ys-primary-*`, approved interaction and dark-surface primitives |
| Theme | background, surface, border, text, accent, status, grid, focus |
| Typography | font families, size scale, line heights, weights, text roles |
| Spacing | four-pixel scale, content gaps, grid gaps, surface padding |
| Shape | control, compact, surface, and feature radii |
| Depth | subtle, overlay, inset, surface, and raised shadows |
| Controls | small, medium, and large control heights |
| Layout | gutters, header height, footer space, section space, containers |
| Motion | duration, easing, stagger, travel, lift, and inline-shift roles |

## Usage Rules

- Use theme aliases for all foregrounds, backgrounds, and borders.
- Use brand primitives directly only when documenting or rendering the approved
  identity itself.
- Use semantic sizes for shared components; use scale values for exceptional
  composition only when no semantic role applies.
- Prefer `color-mix()` with existing theme aliases when a state needs a derived
  emphasis. Do not introduce a new color token for local decoration.
- Do not encode state with color alone.
- Do not redefine tokens inside a component to obtain a one-off visual result.
- Do not create a second token source in TypeScript, Tailwind, or component
  frontmatter.

## Change Control

Changing a brand primitive requires a Founder decision and a versioned update
to the approved token contract. Adding or changing a semantic role requires a
repository-wide usage audit. Removing a role requires proving that no component,
page, documentation example, or script consumes it.

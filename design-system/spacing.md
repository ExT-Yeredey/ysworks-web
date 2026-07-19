# Spacing

- Status: production contract
- Base unit: `0.25rem`
- Constitutional basis: [Brand Bible](../docs/BRAND_BIBLE.md)
  (*II.IV.1–3*)

## Scale

The approved scale is `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`,
`24`, and `32`, expressed by the corresponding `--space-*` tokens. New
intermediate values are not permitted for ordinary composition.

## Semantic Rhythm

| Role | Small | Medium | Large |
| --- | --- | --- | --- |
| Content gap | `--content-gap-sm` | `--content-gap-md` | `--content-gap-lg` |
| Grid gap | `--grid-gap-sm` | `--grid-gap-md` | `--grid-gap-lg` |
| Surface padding | `--surface-padding-sm` | `--surface-padding-md` | `--surface-padding-lg` |
| Section space | `--section-space-sm` | `--section-space-md` | `--section-space-lg` |

`Stack` owns vertical spacing between related content. `Cluster` owns wrapping
spacing between related controls or compact items. `Grid` owns two-dimensional
layout gaps. Consumers must not recreate these rules with local flex or grid
styles.

## Layout Spacing

- `--layout-gutter` provides the shared page edge inset.
- `--layout-header-height` reserves stable navigation space.
- `--layout-footer-space` controls footer breathing room.
- `Container` owns width and horizontal gutter.
- `Section` owns vertical section rhythm and may compose `Container`.

Responsive changes occur at the governed breakpoints already present in the
implementation. They alter semantic roles, not individual pages.

## Surface Spacing

Cards and panels use semantic surface padding. Components with the same
structural role use the same padding even when their content length differs.
Compact controls use control heights and inline padding; they do not inherit
card padding.

## Rules

- Margin does not create component internals; use gap or padding.
- Pages do not set their own global gutters.
- Adjacent sections do not compensate for each other with negative margins.
- Empty elements do not create space.
- A spacing exception must represent real geometry, such as an SVG coordinate,
  and remain local and documented.

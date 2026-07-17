# Layout

- Status: production contract
- Strategy: responsive first, content-led, static-first

## Page Frame

The page frame consists of a stable navigation region, one `main` landmark, and
one footer. `Container` supplies a shared responsive gutter and one of the
approved widths:

| Size | Maximum width |
| --- | --- |
| Small | `--container-sm` |
| Medium | `--container-md` |
| Large | `--container-lg` |
| Extra large | `--container-xl` |

Full-bleed sections may own tone or borders, but their content still aligns to
the same container system.

## Grid

Use `Grid` for repeated peers. Columns collapse according to available space
without changing reading order. Grid children use stretch only when equal
surface heights are meaningful; the content inside remains naturally sized.

Use `Stack` for linear vertical flow and `Cluster` for compact wrapping rows.
Do not use a grid to align ordinary prose and do not use absolute positioning
for primary document structure.

## Section Rhythm

Sections use small, medium, or large semantic spacing. Page introductions,
editorial sections, and focal homepage sections select a role rather than
setting local top and bottom padding. Heading-to-body and body-to-action rhythm
comes from `Stack` or the shared section-heading contract.

## Navigation and Footer

Navigation consumes the governed header height, control heights, and compact
spacing. It must remain operable with content expansion, keyboard input, and
the mobile breakpoint.

The footer uses the page gutter, footer spacing role, and the same content-gap
system. It must not create a separate page width or arbitrary terminal margin.

## Responsive Rules

- Design begins with the narrow layout.
- Content order remains stable across breakpoints.
- Controls wrap before labels truncate.
- Touch targets remain at least `44px` where the control is used primarily by
  touch.
- Avoid fixed content heights.
- Test at `375`, `768`, `1024`, and `1440` CSS pixels.
- Zoom and text enlargement must not require two-dimensional page scrolling.

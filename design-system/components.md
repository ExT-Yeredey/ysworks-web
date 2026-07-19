# Components

- Status: production contract
- Implementation: `src/components`
- Constitutional basis: [Brand Bible](../docs/BRAND_BIBLE.md)
  (*II.I.1–2; II.X–XI*)

## Composition Layers

1. Layout primitives: `Container`, `Section`, `Grid`, `Stack`, and `Cluster`.
2. UI primitives: `Button`, `Card`, `Badge`, `StatusPill`, and `Divider`.
3. Typography and icons: governed type components and `Icon`.
4. Accessible interactions: `Accordion`, `Tabs`, `Modal`, `CopyButton`, and
   `ThemeToggle`.
5. Content patterns: service, process, technology, CTA, FAQ, timeline, and
   diagram compositions.
6. Page components: route-level compositions with localized public content.

Pages compose these layers. They do not fork a primitive to create a local
visual variant.

## Shared Contracts

- `Button` owns primary, secondary, ghost, and text hierarchy.
- `Card` owns surface padding, radius, border, depth, fill behavior, and
  optional interactive response.
- `Icon` owns approved size and accessibility behavior.
- `Stack` owns vertical content rhythm.
- `Cluster` owns wrapped groups and action alignment.
- `Container` owns width and page gutter.
- `Section` owns section rhythm and tone.
- `Grid` owns column behavior and gap.

Card-based grids use `fill` so equal tracks produce equal visible card heights.
Content is never stretched or truncated to imitate equality.

## States

Every real control provides default, hover, focus-visible, pressed, and disabled
behavior where applicable. Selected and expanded states have both visual and
programmatic representation. Noninteractive cards and content do not receive a
tab stop, pointer cursor, or simulated hover-only affordance.

## Reuse Rules

- Add a primitive only after two real consumers need the same structural rule.
- Prefer composition and typed props over selector coupling.
- Keep business data, backend access, private-system state, and production
  claims outside presentation components.
- Local CSS may describe unique composition but may not redefine shared control,
  card, typography, focus, or motion behavior.
- Component variants must express semantic hierarchy, not page-specific color.

## Review Checklist

Confirm semantics, localized labels, keyboard behavior, focus, touch target,
dark/light themes, reduced motion, content expansion, responsive wrapping,
equal grid behavior, and JavaScript-disabled output before approving a shared
component.

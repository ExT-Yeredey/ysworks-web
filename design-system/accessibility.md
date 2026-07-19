# Accessibility

- Status: production contract
- Target: WCAG 2.2 AA
- Constitutional basis: [Brand Bible](../docs/BRAND_BIBLE.md)
  (*II.I.1–2; II.III; II.XI*)

## Baseline

Accessibility is a release condition, not a later enhancement. Static HTML
contains the complete content and core navigation. JavaScript enhances
interaction without becoming a prerequisite for reading or reaching public
information.

## Semantics

- Use landmarks for header, navigation, main content, and footer.
- Use one descriptive `h1` and a logical heading hierarchy.
- Use native buttons for actions and links for navigation.
- Use lists for grouped navigation, steps, and comparable items.
- Do not add `tabindex="0"` to noninteractive content.
- Decorative icons are hidden; meaningful icon-only controls have localized
  accessible names.

## Keyboard and Focus

All controls operate without a pointer. Focus follows visual and document order.
The shared focus-visible treatment is never suppressed. Escape closes the
topmost dismissible layer and focus returns to its invoker. Composite widgets
implement their documented arrow-key behavior without trapping focus.

## Contrast and Meaning

Text and essential graphics meet AA contrast in both themes. Focus remains
visible against the adjacent surface. Color does not carry status, selection,
validation, or progress alone. Muted text is not used for essential low-size
content when it would weaken contrast.

## Responsive and Input

Layouts support reflow, browser zoom, text enlargement, keyboard, touch, and
pointer input. Interactive targets are large enough to operate and are not
placed so closely that adjacent activation is likely. Hover-only information is
forbidden.

## Motion and Media

Reduced motion removes nonessential movement without removing content or state.
Animation never flashes, blocks input, or delays access to a destination
heading. Images and diagrams require meaningful alternatives when they convey
information.

## Verification

Each release includes automated semantic and contrast checks plus manual
keyboard, focus, zoom, reduced-motion, dark/light, and JavaScript-disabled
review. Automated success does not replace manual verification.

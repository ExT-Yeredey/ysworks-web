# Typography

- Status: production contract
- Primary family: Inter
- Technical family: Geist Mono

## Roles

| Role | Token | Use |
| --- | --- | --- |
| Eyebrow | `--text-eyebrow` | Short technical labels and indices |
| UI | `--text-ui` | Buttons, navigation, controls, metadata |
| Body | `--text-body` | Default prose |
| Lead | `--text-lead` | Introductory supporting copy |
| Small title | `--text-title-sm` | Card and compact section titles |
| Compact title | `--text-title-compact` | Page subsections |
| Medium title | `--text-title-md` | Section headings |
| Large title | `--text-title-lg` | Page and hero display headings |

Body, lead, and heading measures use `--measure-body`, `--measure-lead`, and
`--measure-heading`. Long text must not expand merely to fill available width.

## Hierarchy

HTML heading levels describe document structure. Visual size is selected
independently through the typography components. Each page has one meaningful
`h1`; subsequent headings follow an ordered hierarchy without skipped levels
caused by visual preference.

`HeroTitle`, `SectionTitle`, `Paragraph`, `MonoEyebrow`, and `Quote` are the
approved presentation interfaces. A page may use native text elements when a
component would obscure semantics, but it must consume the same roles.

## Writing and Layout

- Use sentence case.
- Keep headings direct and readable.
- Use monospace for technical metadata, not general prose.
- Preserve natural wrapping; do not insert presentational line breaks into
  translated content.
- Do not use letter-by-letter animation, artificial truncation, or text that
  appears only on interaction.
- Maintain readable line height and measure at every breakpoint.

## Font Loading

The system font fallback remains usable before web fonts load. Font loading must
not hide content, block rendering, or cause material layout shift. New weights
require evidence that the hierarchy cannot be expressed with the existing
regular, medium, semibold, and bold roles.

# Motion

- Status: production contract
- JavaScript animation dependency: Anime.js v4 only

## Responsibility

| Mechanism | Responsibility |
| --- | --- |
| CSS | Hover, focus, press, simple state transitions, layout presentation |
| Web Animations API | Simple imperative transitions without choreography |
| IntersectionObserver | Visibility and one-time entrance triggers |
| `requestAnimationFrame` | Throttled visual updates and approved scroll seeking |
| Anime.js | Coordinated timelines and approved drawn-line choreography |

No second JavaScript animation engine is permitted. Motion is progressive
enhancement: content is visible, readable, and operable before initialization
and if JavaScript fails.

## Tokens

Durations are fast `150ms`, base `300ms`, slow `600ms`, and overture `1000ms`
within the approved `900–1200ms` range. Governed easing, stagger, travel, lift,
and inline-shift values live in `src/styles/tokens.css` and `src/lib/motion.ts`.
Do not use an inline magic number when a token exists.

## Interaction Rules

- Interactive feedback begins within `100ms`.
- Hover, focus, and press remain local to the control.
- Surface lift is at most `2px`; control lift is at most `1px`.
- Explanatory entrances run once and never hide content before JavaScript.
- At most six elements participate in one staggered batch.
- Ambient motion is restrained, nonessential, and never competes with content.
- Scroll handlers use scheduled animation frames and never hijack scrolling.
- Animations must be interruptible and must not build queues during rapid input.

## Reduced Motion

`prefers-reduced-motion: reduce` disables nonessential travel, drawing, scrub,
pulse, and entrance choreography. State changes remain immediate and correct.
The preference is observed dynamically where an initialized interaction could
otherwise continue running.

## Performance

Prefer opacity and transform. Avoid layout animation except when interaction
semantics require measured height, such as the FAQ accordion. Do not animate
large shadows, filters, or unrelated surfaces together. Motion must introduce
no cumulative layout shift and no continuous mobile work without user value.

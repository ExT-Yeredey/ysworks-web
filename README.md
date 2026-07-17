# YSWORKS Web

Public website for YSWORKS.

YSWORKS is a technology engineering company focused on useful, secure,
maintainable digital systems. AI is one applied capability among software,
automation, systems, hardware, and security; it is not the company's public
identity. This repository contains the Public Website and a non-indexed,
inactive visual foundation for the future Client Workspace. “Client Portal” is
reserved for that product's technical architecture and security boundary. This
repository does not contain authentication, client data, backend access,
private systems, prompts, infrastructure, or proprietary implementation
details.

## Project Overview

This project is a small Astro site intended for static-first deployment on Cloudflare Pages.

The repository exists to maintain a clear, fast, accessible public presence for YSWORKS while keeping private engineering work outside the public surface area.

## Philosophy

- Keep the site minimal and technically precise.
- Prefer static output whenever possible.
- Optimize for readability before abstraction.
- Treat performance, accessibility, and security as baseline requirements.
- Avoid claims, examples, or content that cannot be maintained directly in this repository.

## Engineering Principles

- Use semantic HTML and accessible defaults.
- Keep components small and focused.
- Prefer typed data and explicit interfaces where structure matters.
- Avoid unnecessary dependencies.
- Keep public content separate from private systems.
- Make changes easy to review, test, and revert.

## Tech Stack

- Framework: Astro
- Language: TypeScript
- Package manager: pnpm
- Formatter and linter: Biome
- Styling: Tailwind CSS
- Hosting: Cloudflare Pages
- Source control: GitHub

## Folder Structure

```text
src/
  assets/       Local source assets
  components/   Reusable UI, layout, icon, and shared components
  content/      Public content collections
  data/         Public structured data
  layouts/      Page and document layouts
  lib/          Shared library code
  pages/        Astro routes
  sections/     Page sections
  styles/       Global styles
  types/        Shared TypeScript types
  utils/        Small utility functions
public/         Static public files
branding/       Governed structure for future approved brand assets
docs/           Company, architecture, business, design, and product authority
design-system/ Production UI standards and implementation contracts
```

## Documentation

Start with the [documentation index](docs/README.md).

The [Company Bible](docs/COMPANY_BIBLE.md) is the company-wide narrative and
behavioural constitution. The
[company documentation](docs/company/README.md) applies it to profile,
capability, brand, onboarding, proposals, quotations, maintenance, support,
delivery, communication, lifecycle, and quality.

Supporting business and website strategy lives in
[docs/business](docs/business/README.md).

Public-safe platform architecture contracts live in
[docs/architecture](docs/architecture/README.md). They define future exposure,
edge-security, webhook, and production-readiness boundaries without documenting
private infrastructure or deployment configuration.

The production UI contracts live in [design-system](design-system/README.md).
They govern how approved brand, layout, typography, motion, component, and
accessibility decisions are applied consistently in this repository.

Future approved identity assets belong in [branding](branding/README.md).

The `.ai/` directory remains the public engineering knowledge base for this
repository.

## Development

Install dependencies:

```sh
pnpm install
```

Start the local development server:

```sh
pnpm dev
```

Run Astro validation:

```sh
pnpm astro check
```

Run Biome checks:

```sh
pnpm biome check .
```

Build the site:

```sh
pnpm build
```


Preview the production build:

```sh
pnpm preview
```

## Public Routes

- `/` — launch homepage.
- `/services` — public service areas and boundaries.
- `/process` — complete engineering process and decision criteria.
- `/about` — company approach and principles.
- `/contact` — first-contact experience; no form or data submission.
- `/privacy` — current static-site privacy posture.
- `/404` — useful not-found experience.

English equivalents use the `/en/` prefix.

`/client` and its prepared subroutes are non-indexed interface-foundation
previews only. They do not authenticate, load data, or provide portal access and
remain absent from public navigation. The production Client Portal remains a
future authenticated product at `portal.ysworks.dev`; its activation requires
the approved portal security architecture.

Future status, public documentation, labs, and journal surfaces remain outside
this release.

## Deployment

The site is intended to deploy from GitHub to Cloudflare Pages.

Expected build settings:

- Build command: `pnpm build`
- Output directory: `dist`
- Node version: see `.nvmrc`

Environment variables must be configured in the hosting provider and must not be committed to the repository.

## Public Roadmap

- Maintain a minimal public website.
- Improve accessibility, performance, and content quality as the site evolves.
- Keep private systems and proprietary engineering details out of the public repository.

## License

MIT. See [LICENSE](LICENSE).

## Author

YSWORKS  
Yeredey Suárez

# YSWORKS Web

Public website for YSWORKS.

YSWORKS is an AI-native engineering studio focused on secure, scalable, and high-performance digital systems. This repository contains only the public website. It does not include private systems, internal documentation, automation, prompts, infrastructure, or proprietary implementation details.

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
docs/business/ Business, brand, website, and commercial foundation
```

## Documentation

Business and website strategy documentation lives in
[docs/business](docs/business/README.md).

Use it as the canonical source for company positioning, public services, website
information architecture, content strategy, SEO strategy, lead generation,
portfolio rules, product integration, trust principles, roadmap, acceptance
criteria, and open commercial decisions.

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

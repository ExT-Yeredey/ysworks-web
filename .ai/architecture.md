# Architecture

## Scope

This document describes the public architecture of the YSWORKS website repository only.

It does not describe private systems, internal infrastructure, automation, agents, prompts, workflows, or proprietary platform architecture.

## Overview

YSWORKS Web is an Astro-based public website.

The preferred architecture is static-first:

- Astro renders pages at build time where possible.
- Static assets are served from `public/`.
- Source assets and reusable code live under `src/`.
- Cloudflare Pages hosts the deployed site.
- GitHub is the source of truth for repository changes and deployment integration.

## Runtime Model

The public website should require minimal runtime behavior.

Use client-side JavaScript only when it supports a clear public interaction. Static content should remain static.

Default to:

- Static pages.
- Astro components.
- CSS-driven UI behavior.
- Progressive enhancement.
- Small client islands only when necessary.

## Repository Structure

Expected structure:

```text
src/
  assets/
  components/
    ui/
    layout/
    icons/
    shared/
  content/
  data/
  layouts/
  lib/
  pages/
  sections/
  styles/
  types/
  utils/
public/
.ai/
```

Folders may stay empty until needed. Do not add abstractions just to fill the structure.

## Deployment Model

The intended deployment flow is:

1. Changes are reviewed in GitHub.
2. CI validates type, lint, and build health.
3. Cloudflare Pages builds the site with `pnpm build`.
4. The generated `dist/` output is deployed as the public site.

Environment values are managed through the hosting provider and must not be committed.

## Future Public APIs

Future Workers may be introduced only for public-facing website needs, such as a contact form or lightweight public API layer.

Workers must not expose private systems, internal workflows, business logic, or implementation details.

## Boundaries

This repository may include:

- Public Astro pages.
- Public components.
- Public styles.
- Public static assets.
- Public documentation for this website.
- Public deployment configuration.
- Public ADRs for website decisions.

This repository must not include private platform internals or confidential operational material.

## Decision Records

Architecture Decision Records live in `.ai/decisions/`.

Use ADRs when a decision affects long-term maintainability, hosting, framework direction, public security posture, or design philosophy.

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

## Deployment Model

The intended deployment flow is:

1. Changes are reviewed in GitHub.
2. Cloudflare Pages builds the site with `pnpm build`.
3. The generated `dist/` output is deployed as the public site.

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

This repository must not include private platform internals or confidential operational material.

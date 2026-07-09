# Security

## Scope

This document covers public website security principles only.

It must not describe private systems, internal security architecture, operational procedures, credentials, infrastructure, automations, or proprietary implementation details.

## Source Control

- Do not commit secrets.
- Do not commit private environment files.
- Do not commit credentials, tokens, API keys, certificates, or production configuration.
- Keep `.env.example` limited to safe public examples.
- Treat all committed files as public.

## Environment Variables

Use environment variables only for values that are safe to reference from the public website or required by the hosting platform.

Client-exposed variables must be intentionally public. In Astro, `PUBLIC_` variables are available to client-side code.

## Headers

Public deployment should use conservative security headers where appropriate, including:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

Header configuration should be reviewed before deployment and kept compatible with the actual site behavior.

## Forms

No form should be added without abuse protection and data-handling review.

Future public contact forms may use:

- Cloudflare Turnstile.
- Honeypot fields.
- Server-side validation.
- Rate limiting.
- Minimal data collection.

Do not collect sensitive information through public website forms.

## Dependencies

- Avoid unnecessary packages.
- Keep dependency usage clear and auditable.
- Review new dependencies for maintenance status, bundle impact, and security posture.

## Public Content

Public pages must not expose:

- Internal system names.
- Private architecture.
- Internal workflows.
- Private automation details.
- Secrets or configuration.
- Proprietary business logic.

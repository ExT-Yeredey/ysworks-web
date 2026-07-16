# YSWORKS Documentation

## Purpose

This directory contains the public-safe specifications and supporting documents
that govern YSWORKS company behavior, ecosystem architecture, public platform,
client portal, and business foundation.

It does not contain credentials, production configuration, private topology,
client information, internal workflows, or restricted operational material.

## Authority Map

1. [Founder Handbook](FOUNDER_HANDBOOK.md) defines company behavior, judgment,
   delivery discipline, and human–AI collaboration.
2. [YSWORKS Master Specification](YSWORKS_MASTER_SPEC.md) defines company,
   product, ecosystem, vocabulary, and cross-system architecture.
3. [Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
   governs public exposure and public-platform security.
4. [Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) governs
   client-facing portal architecture and tenant isolation.
5. [Public Platform Architecture Index](architecture/README.md) defines the
   publication boundary for architecture contracts.
6. [Business Foundation](business/README.md) supports public positioning,
   services, content, and commercial policy.
7. [Approved Design Authorities](design/README.md), including YSWORKS Design
   Tokens v1.0, govern brand, experience, and interface decisions.
8. The repository [engineering knowledge base](../.ai/README.md) governs the
   public website implementation within its scope.

The handbook is the highest-level human operating handbook. It does not override
domain architecture. The Master Specification is the highest-level architecture
specification. Accepted ADRs govern their stated decisions, detailed domain
contracts may add stricter requirements, and explicit Founder decisions resolve
otherwise unresolved documentation conflicts.

## Reading Order

For company or cross-system work:

1. read the Founder Handbook;
2. read the Master Specification;
3. read the detailed contract for the affected domain;
4. inspect applicable ADRs and Open Decisions; and
5. use the more conservative behavior when an unresolved conflict remains.

For work limited to the public website repository, also follow the public
engineering knowledge base before implementation.

## Maintenance Rules

- Keep every document safe for a public repository.
- Cross-reference authoritative material instead of duplicating it.
- Record genuine conflicts as Open Decisions.
- Do not present future intent as current capability.
- Keep behavior, architecture, and implementation authority distinct.
- Update indexes when an authoritative document is added, renamed, or retired.
- Never use documentation approval as production-change authorization.

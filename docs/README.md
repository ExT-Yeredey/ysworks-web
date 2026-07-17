# YSWORKS Documentation

## Purpose

This directory contains the public-safe specifications and supporting documents
that govern YSWORKS company behavior, ecosystem architecture, public platform,
client workspace, company operations, and business foundation.

It does not contain credentials, production configuration, private topology,
client information, internal workflows, or restricted operational material.

## Authority Map

1. [Company Bible](COMPANY_BIBLE.md) defines company identity, purpose,
   philosophy, principles, and long-term narrative.
2. [YSWORKS Master Specification](YSWORKS_MASTER_SPEC.md) defines product,
   ecosystem, vocabulary, accepted decisions, and cross-system architecture.
3. [Founder Handbook](FOUNDER_HANDBOOK.md) defines company behavior, judgment,
   delivery discipline, and human–AI collaboration.
4. [Company Documentation](company/README.md) applies those authorities to
   company, commercial, delivery, support, and quality standards.
5. [Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
   governs public exposure and public-platform security.
6. [Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) governs
   client-facing portal architecture and tenant isolation.
7. [Public Platform Architecture Index](architecture/README.md) defines the
   publication boundary for architecture contracts.
8. [Business Foundation](business/README.md) supports public positioning,
   services, content, and commercial policy.
9. [Approved Design Authorities](design/README.md), including YSWORKS Design
   Tokens v1.0, govern brand, experience, and interface decisions.
10. The repository [production design-system contracts](../design-system/README.md)
   govern consistent implementation of those approved design decisions.
11. The repository [engineering knowledge base](../.ai/README.md) governs the
   public website implementation within its scope.

Explicit Founder decisions remain highest. Accepted ADRs govern their stated
decisions. The Company Bible is the constitutional narrative, the Master
Specification is the highest architecture specification, and the Founder
Handbook is the highest human operating handbook. Detailed domain contracts may
add stricter requirements.

## Reading Order

For company or cross-system work:

1. read the Company Bible;
2. read the Master Specification and Founder Handbook;
3. read the detailed contract for the affected domain;
4. inspect applicable ADRs and Open Decisions; and
5. use the more conservative behaviour when an unresolved conflict remains.

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

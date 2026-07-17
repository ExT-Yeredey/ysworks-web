# YSWORKS Approved Design Authorities

- Status: Founder-approved authority registry
- Scope: Public Website brand, user experience, and interface design
- Applies to: Human and AI design, content, and frontend work

## Purpose

This registry maps the approved authority names and versions to their canonical
repository sources. It does not reproduce or reinterpret those sources.

## Authority Map

| Approved authority | Version | Canonical repository source | Supporting source |
| --- | --- | --- | --- |
| YSWORKS Brand Book | 1.0 | [Company Brand Book](../company/brand-book.md) | [Brand Kit V1](../../.ai/brand-kit-v1.md), the authoritative identity-direction source, plus [Brand Positioning](../business/BRAND_POSITIONING.md) |
| User Experience Foundation | 1.1 | [Site Architecture V1](../../.ai/site-architecture-v1.md) | UX, accessibility, responsive, and performance rules in [Design System V1](../../.ai/design-system-v1.md) and the applicable product specification |
| YSWORKS Design System | 1.1 | [Design System V1](../../.ai/design-system-v1.md) | [Design System principles](../../.ai/design-system.md) |
| YSWORKS Design Tokens | 1.0 | [Design Tokens v1.0](YSWORKS_DESIGN_TOKENS_V1.md) | Brand and interface color contract for every YSWORKS surface |

The version identifiers in this registry identify the Founder-approved governed
source sets. A historical filename or heading that ends in `v1` does not reduce
the approved version recorded here.

## Precedence

The [Company Bible](../COMPANY_BIBLE.md) governs company personality, voice,
design, motion, and experience philosophy (*I.VIII; I.XIV–XV*). The
Founder-provided Brand Kit remains authoritative for identity
direction; the Company Brand Book is its governed company-documentation entry
point. Branding and Brand Positioning provide supporting context but may not
weaken it.
The approved geometric YW monogram direction is recorded there. Final vector
geometry remains a bounded brand-asset task; generated raster material is never
a production asset.

The User Experience Foundation governs public journeys, information hierarchy,
responsive behavior, accessibility, interaction cost, and progressive
enhancement. Launch scope and route decisions remain governed by the Master
Specification and the approved business foundation when older architecture
material describes future pages.

The Design System governs visual roles, typography, spacing, component behavior,
motion principles, accessibility, responsive behavior, and performance. The
Founder-approved Design Tokens v1.0 govern the final brand and dark-surface color
values across the ecosystem.

When these sources conflict, the authority hierarchy in the
[YSWORKS Master Specification](../YSWORKS_MASTER_SPEC.md) applies. In particular,
accepted ADR-M004 governs the Public Website animation-library decision.

## Product separation

The Public Website, Client Workspace, and YS AI OS are separate systems sharing
a governed visual family:

- the Public Website is anonymous, editorial, and conversion-oriented;
- the Client Workspace is the future authenticated, tenant-isolated
  client-facing product; its technical architecture and security boundary is
  named Client Portal; and
- YS AI OS is a private operating system and never a public interface.

Shared tokens and brand principles do not permit shared authentication,
authorization, data access, navigation, or runtime boundaries.

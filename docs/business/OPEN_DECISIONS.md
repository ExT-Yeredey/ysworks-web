# Business Open Decisions

- Status: supporting register
- Higher authority: [Master Specification Open Decisions](../YSWORKS_MASTER_SPEC.md#12-open-decisions)

## Purpose

This register lists unresolved public-business and brand decisions. It does not
repeat decisions settled by the Founder or accepted ADRs.

## Required Before The Relevant Capability

| Decision | Required resolution |
| --- | --- |
| Production privacy notice | Final controller, jurisdiction, lawful basis, rights, retention, processor, and contact text before collecting personal data |
| Legal and contracting basis | Final legal entity, governing jurisdictions, contract forms, and professional legal review |
| Commercial terms | Deposit, staged payment, refund, cancellation, urgent-work, and recurring-service rules |
| Service levels | Whether any response, resolution, availability, recovery, or support commitment is offered and under which agreement |
| Logo asset set | Founder-approved vector construction, optical testing, lock-ups, clear space, favicon, application icon, social assets, exports, and source-master governance |
| Contact form | Runtime, privacy, Turnstile, server validation, abuse controls, retention, and safe routing before any real form exists |

## Open But Not Blocking The Current Public Website

| Decision | Required resolution |
| --- | --- |
| Analytics | Whether a privacy-aware provider creates enough decision value to justify collection |
| Newsletter | Whether a durable editorial purpose and cadence exist |
| Public portfolio | Which real work may be published with permission and evidence |
| Labs and Journal | Whether approved content and sustainable ownership justify either surface |
| Product visibility | When an actual YSWORKS product has an approved audience, evidence, support, privacy, and security boundary |
| Tailwind scope | Whether Tailwind remains the long-term Public Website standard or only the current repository choice |

## Settled Decisions

The following are no longer open:

- `www.ysworks.dev` is the canonical Public Website hostname, subject to separate
  production connection authority.
- `contact@ysworks.dev` is the public contact method.
- Spanish is canonical at `/`; English uses `/en/`.
- The launch service portfolio is governed by ADR-M018.
- Public prices and ranges are prohibited.
- Client case placeholders are prohibited.
- Anime.js is the only permitted JavaScript animation library for the Public
  Website.
- YS AI OS remains private and has no independent public commercial identity.
- “Client Workspace” is the client-facing product name. “Client Portal” is the
  technical architecture and security term.

## Rule

If implementation or publication depends on an unresolved decision, stop and
obtain the appropriate decision. Use the state with less collection, exposure,
commitment, or implied capability until then.

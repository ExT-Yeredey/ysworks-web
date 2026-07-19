# Quality Policy

- Status: company policy
- Owner: Founder and named delivery owner
- Scope: all YSWORKS decisions, deliverables, systems, and services

## Purpose

Quality is demonstrated fitness for the approved purpose and operating
conditions. It is not visual polish, automated-check success, or the absence of
reported defects.
The constitutional basis is the
[Company Bible](../COMPANY_BIBLE.md) (*I.III.1; I.IX.1–3; I.XIV.3–4*).

The [Operating Manual quality gates](../OPERATING_MANUAL.md#10-quality-gates)
govern the common delivery gate procedure; this policy retains its narrower
quality-planning and non-conformance detail.

## Quality Principles

- Define quality before implementation.
- Validate the risks that matter, not only the paths that are easy to test.
- Treat security, privacy, accessibility, performance, maintainability,
  observability, recovery, documentation, and supportability as applicable
  quality dimensions.
- Prefer simple, reviewable systems with justified dependencies.
- Record limitations and residual risk honestly.
- Correct the governing system when a defect reveals a repeatable weakness.
- Do not trade away required quality silently for speed.

## Quality Plan

Each engagement identifies:

| Dimension | Required decision |
| --- | --- |
| Outcome | Intended user and business result |
| Acceptance | Verifiable completion criteria |
| Correctness | Important behaviour and failure cases |
| Security and privacy | Trust, data, identity, access, and exposure boundaries |
| Accessibility | Applicable standard and manual checks |
| Performance | User-relevant budgets or operating expectations |
| Maintainability | Ownership, dependencies, structure, and change path |
| Reliability | Failure, retry, degradation, and continuity |
| Recovery | Backup, restore, rollback, and recovery evidence |
| Documentation | Audience, required records, and handover |
| Support | Responsibility, channel, exclusions, and escalation |

Not every dimension requires the same weight. An omitted dimension requires a
reason when its risk could exist.

## Review

Material work is reviewed by someone with appropriate independence or by the
Founder when no independent reviewer is available. Review covers intent,
authority, boundaries, evidence, change safety, and maintainability, not only
format or syntax.

AI may assist review but cannot provide final acceptance or hide the absence of
human judgement.

## Definition Of Done

Work is complete only when:

- scope and intended outcome are satisfied;
- acceptance evidence is recorded;
- required reviews and approvals are complete;
- relevant validations pass;
- security, privacy, accessibility, and data boundaries are checked;
- documentation matches the delivered state;
- limitations, deferred work, and residual risks are visible;
- operation, support, recovery, rollback, and ownership are defined where
  applicable; and
- no critical unresolved issue is concealed by a status or percentage.

The [Founder Handbook definition of done](../FOUNDER_HANDBOOK.md#6-definition-of-done)
remains authoritative for company behaviour.

## Non-Conformance

When work fails the agreed standard:

1. contain harm and protect people and information;
2. communicate impact and uncertainty;
3. record the evidence;
4. identify the root condition;
5. decide correction, acceptance, rollback, or closure with authority;
6. validate the result; and
7. update the relevant standard, process, test, or documentation.

## Measurement

Use measures only when their source, meaning, owner, and decision value are
defined. Do not use invented percentages, vanity metrics, or activity volume as
proxies for quality.

## Continuous Improvement

Review quality evidence after material delivery, incident, recurring defect,
support pattern, or change in constraints. Improvement is complete only when it
changes a decision, standard, system, or maintained practice.

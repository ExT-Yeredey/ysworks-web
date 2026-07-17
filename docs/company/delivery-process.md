# Delivery Process

- Status: governed delivery procedure
- Owner: named engagement owner
- Scope: approved client and internal delivery

## Purpose

This process turns an agreed outcome into verified, documented, and
maintainable delivery. It applies the
[Company Bible](../COMPANY_BIBLE.md) (*I.IV.1–6; I.IX.2; I.XIII.3*) and
the [Founder Handbook engineering lifecycle](../FOUNDER_HANDBOOK.md#9-engineering-lifecycle).

## 1. Confirm Understanding

Validate the problem, users, current state, constraints, risks, ownership,
dependencies, and intended outcome. Identify assumptions and missing evidence.
Do not begin by defending a preselected technology.

**Exit evidence:** an approved problem and outcome statement with named owners.

## 2. Establish The Delivery Contract

Confirm scope, exclusions, deliverables, acceptance criteria, responsibilities,
information boundaries, commercial terms, communication, change control, and
support intent.

**Exit evidence:** an accepted proposal, agreement, and satisfied commencement
conditions.

## 3. Design The System

Define architecture, interfaces, data and trust boundaries, failure behaviour,
security, privacy, accessibility, validation, operation, maintenance, handover,
and rollback where applicable.

**Exit evidence:** reviewable decisions and a delivery plan appropriate to risk.

## 4. Implement In Reviewable Increments

Produce the smallest coherent increments that can be reviewed and validated.
Protect unrelated work, keep private systems private, and update decisions when
evidence changes the design.

**Exit evidence:** versioned outputs linked to scope and acceptance criteria.

## 5. Validate

Check functional behaviour, security and privacy boundaries, accessibility,
performance, failure, recovery, documentation, and client acceptance evidence
as applicable.

Automated checks are evidence, not the entire quality decision.

**Exit evidence:** recorded validation, limitations, residual risk, and resolved
or explicitly accepted findings.

## 6. Obtain Approval

Bind approval to the exact object, version, digest where available, authorised
identity, decision, comment, and timestamp.

Approval does not itself merge code, deploy, change infrastructure, publish, or
execute another privileged action. Those actions follow separate authorisation.

**Exit evidence:** attributable and version-specific approval.

## 7. Release Or Transfer

Use the approved release or handover path. Confirm destination, authorisation,
rollback, observability, access, and communication. No change reaches production
without the applicable authority.

**Exit evidence:** delivery record, release evidence where applicable, and
confirmed ownership.

## 8. Document And Handover

Provide the agreed system description, decisions, operation, access ownership,
limitations, dependencies, recovery, maintenance, and next actions in language
appropriate to the client.

Documentation is complete only when it matches the delivered state.

**Exit evidence:** accepted handover and known responsibility boundary.

## 9. Evolve Or Close

Choose one explicit outcome:

- enter an approved maintenance level;
- begin a newly scoped engagement;
- monitor for an agreed period;
- transfer responsibility; or
- close and revoke access.

**Exit evidence:** final status, access and information disposition, remaining
risks, and review or closure record.

## Change Control

A material change to outcome, scope, assumption, dependency, risk,
responsibility, timing, deliverable, or support requires:

1. impact assessment;
2. updated evidence and alternatives;
3. commercial and schedule effect where applicable;
4. authorised decision;
5. updated records; and
6. a new baseline.

## Delivery Standard

Delivery is not complete because work was shown, deployed, or labelled done.
The [Quality Policy](quality-policy.md) and engagement-specific definition of
done determine completion.

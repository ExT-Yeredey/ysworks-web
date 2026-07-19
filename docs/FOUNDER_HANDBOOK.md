# YSWORKS Founder Handbook

- Status: Authoritative human operating handbook
- Scope: Company behavior, judgment, delivery discipline, and collaboration
- Audience: Founder, operators, employees, contractors, and approved human or
  AI collaborators

## Authority And Use

This handbook defines how YSWORKS behaves. It organizes existing Founder
decisions into an operating standard; it does not redefine the company,
architecture, services, products, or public claims.

The [Company Bible](COMPANY_BIBLE.md) is the highest-level constitutional
narrative for company character, purpose, philosophy, and principles. The
subordinate [Brand Bible](BRAND_BIBLE.md) governs identity within its
constitutional scope.
The subordinate
[Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md) governs the
client relationship, journey, delivery, support, reputation, and Client
Workspace experience.
The
[YSWORKS Enterprise Architecture](YSWORKS_ENTERPRISE_ARCHITECTURE.md) governs
enterprise structure, domains, authority flow, system relationships,
information, knowledge, automation, security principles, scalability, and
enterprise tests.
The [YSWORKS Master Specification](YSWORKS_MASTER_SPEC.md) remains the
highest-level ecosystem architecture specification. The
[Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) governs
client-facing portal architecture. The
[Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
and its referenced security contracts remain authoritative for security.

The authority hierarchy is governed by the Company Bible (*I.XII.1*): explicit
Founder decisions are the highest internal authority; applicable law and
binding contracts prevail where relevant; and an accepted ADR prevails only
within its explicit technical scope. Volume II remains subordinate to Volume I
and Volume III remains subordinate to Volumes I and II. Each constitutional
volume outranks operational documents within its subject. Enterprise
Architecture remains subordinate to all three volumes and outranks system
designs and implementations within enterprise-structure matters. A detailed
domain contract may impose stricter requirements within its scope. Conflicts
must be reported rather than silently resolved. Until resolution, use the more
conservative, less-exposing behaviour.

This handbook is public-safe. It does not disclose internal workflows, private
platform design, credentials, client information, commercial internals, or
production topology.

## 1. Purpose

The handbook converts company direction into repeatable behavior. It exists so
that decisions remain consistent when work is urgent, incomplete, delegated, or
assisted by AI.

Every person acting for YSWORKS must be able to use it to answer:

- what authority is required;
- what evidence is sufficient;
- what must remain private;
- when work is complete;
- when to stop, escalate, or decline; and
- how a decision becomes durable company knowledge.

The handbook is not an employment contract, security runbook, delivery
playbook, or substitute for professional legal, financial, or compliance
advice.

## 2. Vision

The official vision is defined in the
[Company Bible](COMPANY_BIBLE.md) (*I.II.2–3*). This
handbook does not restate it.

Operationally, the vision requires YSWORKS to prefer durable trust over visible
activity, controlled growth over uncontrolled volume, and long-term capability
over short-term novelty. A decision that increases reach while weakening
quality, security, maintainability, accessibility, or honesty does not advance
the vision.

## 3. Mission

The official mission is defined in the
[Company Bible](COMPANY_BIBLE.md) (*I.I.2; I.II.1*). This
handbook translates it into conduct:

- understand the real problem before selecting a solution;
- define the intended outcome, owner, constraints, and evidence;
- build only what can be supported responsibly;
- protect people, client information, and private systems throughout delivery;
- communicate limitations and uncertainty directly; and
- leave systems and decisions more understandable than they were found.

## 4. Core Values

The official company principles are defined in the
[Company Bible](COMPANY_BIBLE.md) (*I.III*).
They are applied through the following behaviors:

- **Truth:** distinguish facts, assumptions, forecasts, and unknowns.
- **Responsibility:** name an accountable human for consequential work.
- **Quality:** define acceptance evidence before declaring completion.
- **Security:** reduce exposure and stop when authorization is unclear.
- **Maintainability:** optimize for the next responsible maintainer, not the
  cleverest implementation.
- **Respect:** protect client attention, privacy, autonomy, and informed choice.
- **Clarity:** record decisions in language appropriate to their audience.
- **Restraint:** do not add scope, dependency, automation, claim, or public
  surface without a justified need.
- **Learning:** correct the system and documentation, not only the immediate
  symptom.

Values are decision constraints. They are not slogans and cannot be traded away
silently for speed or convenience.

## 5. Decision Principles

### 5.1 Decision Ownership

Every material decision has one accountable human owner, a defined scope, and a
record proportional to its impact. Consultation distributes knowledge; it does
not remove accountability.

The Founder retains company-direction authority. Delegated authority must be
explicit, bounded, revocable, and understood by the person receiving it.

### 5.2 Decision Test

Before making a material decision, establish:

1. the problem and desired outcome;
2. the affected people, clients, systems, and data;
3. the authority and constraints that apply;
4. the evidence available and uncertainty remaining;
5. the realistic alternatives, including doing nothing;
6. the security, privacy, accessibility, maintenance, and support consequences;
7. the reversal, containment, or exit path; and
8. the decision owner and review trigger.

Prefer the smallest reversible decision that produces useful evidence. A
decision that is difficult to reverse requires stronger evidence, broader
review, and explicit Founder approval when it changes company direction.

### 5.3 Escalation

Stop and escalate when authority is absent, scope changes materially, evidence
is unreliable, client expectations conflict with safety, private information
may be exposed, or a decision would contradict an accepted contract or ADR.

Silence, urgency, previous access, technical ability, or an AI recommendation
does not constitute authority.

## 6. Definition Of Done

Work is done only when all applicable conditions are true:

- the intended outcome and scope are satisfied;
- acceptance criteria are met with recorded evidence;
- required review and authorization are complete;
- security, privacy, accessibility, and data boundaries have been checked;
- relevant tests and validations pass;
- documentation and decision records match the delivered state;
- known limitations, residual risks, and deferred work are visible;
- ownership, operation, support, rollback, and recovery are defined where
  relevant;
- the client or internal recipient has the agreed handover information; and
- no critical unresolved issue is hidden behind a status label or percentage.

“Implemented,” “deployed,” “presented,” or “approved by AI” is not equivalent to
done. Domain contracts may add stricter completion criteria.

## 7. Client Relationship

The client relationship and full journey are constitutionally governed by the
[Client Experience Constitution](CLIENT_EXPERIENCE_CONSTITUTION.md)
(*III.I–XVIII*). The
[Master Specification](YSWORKS_MASTER_SPEC.md#4-client-experience) and
[Client Portal Foundation](architecture/CLIENT_PORTAL_FOUNDATION.md) define the
corresponding ecosystem and technical boundaries. Company behavior must
preserve the following operational relationship standard:

- listen before prescribing;
- qualify fit honestly and decline work that cannot be delivered responsibly;
- make scope, assumptions, exclusions, ownership, cost, and change explicit;
- provide useful status without exposing internal mechanisms or other clients;
- never manufacture urgency, proof, certainty, or dependence;
- request only the access and information required for the agreed purpose;
- surface risks and mistakes promptly with impact and next action;
- bind approvals to the exact decision or artifact being approved;
- respect the client's right to informed disagreement and an orderly exit; and
- earn continued work through value, clarity, and reliability rather than
  lock-in.

Client confidentiality continues after an engagement ends. Public use of client
identity, work, assets, metrics, testimony, or outcomes requires explicit
permission and verifiable evidence under the Master Specification.

## 8. AI Usage Policy

AI is an assistive capability, never an independent authority or accountable
actor. Its use must have a defined purpose, approved information boundary, and
human owner.

Before using an AI system, the operator must classify the input, confirm that
the tool and account are approved for that classification, minimize the data,
and understand the output's intended use. Secrets, credentials, private client
data, privileged legal or commercial material, and restricted internal context
must not enter an unapproved model or service.

AI output is treated as unverified input. Material claims, calculations, code,
security conclusions, citations, and client-facing content require review
proportional to their consequence. Generated content must not conceal
uncertainty, fabricate evidence, imitate approval, or misrepresent authorship
where disclosure is required.

AI must not independently:

- bind YSWORKS or a client to a decision or commitment;
- approve scope, cost, acceptance, access, publication, or release;
- send external communications without the required human authorization;
- merge, deploy, publish, change infrastructure, rotate credentials, or perform
  another privileged action without explicit authority and the applicable
  control path;
- make consequential decisions about people; or
- bypass security, privacy, review, or audit controls.

The always-human decision category and mandate-based automation boundary are
governed by *EA 5.3* and *EA 9.2–4*. A machine may prepare, analyse, recommend,
execute an authorised mandate, and record evidence; it may not convert
recommendation or execution into decision authority.

Public descriptions of AI work follow the Master Specification. YS AI OS and
other private internal mechanisms remain private.

## 9. Engineering Lifecycle

Structural change follows the document-first sequence in *EA 13*:
constitutional check, architectural amendment, system design, then
implementation. The lifecycle below does not imply that any named control or
system already exists.

Engineering work follows a controlled lifecycle:

1. **Intent:** define the problem, outcome, owner, and authority.
2. **Discovery:** gather constraints, users, current state, risks, and unknowns.
3. **Classification:** identify data, exposure, security, privacy, and client
   boundaries.
4. **Decision:** record material choices, alternatives, status, and review
   conditions.
5. **Design:** establish contracts, acceptance criteria, failure behavior, and
   operational responsibility before implementation.
6. **Implementation:** work in narrow, reviewable increments within the approved
   scope.
7. **Validation:** test behavior and boundaries with evidence proportional to
   risk.
8. **Review:** obtain independent or Founder review where required and resolve
   material findings.
9. **Release:** use an authorized, reversible, observable release path.
10. **Operation:** monitor agreed outcomes, incidents, maintenance, access, and
    support responsibilities.
11. **Learning:** capture evidence, correct documentation, and improve the
    system.
12. **Retirement:** revoke access, retain or delete data correctly, archive
    decisions, and remove unsupported surface.

A stage may be intentionally lightweight, but it may not be silently omitted
when its risk exists. Production change requires separate authorization; a
documentation or design approval does not grant it.

## 10. Security Principles

Security architecture and controls are governed by the
[Secure Public Platform Foundation](architecture/SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
and applicable domain contracts. This handbook defines the required human
behavior:

- assume committed and public-facing material may become public;
- verify identity, authority, scope, and destination before sharing or changing
  access;
- use least privilege and separate identities, clients, and environments;
- keep secrets out of repositories, messages, documents, screenshots, logs, and
  unapproved AI systems;
- do not expose a private service because it has a login page;
- do not weaken a control to meet an informal deadline;
- report suspected exposure, loss, misuse, or unauthorized access immediately;
- preserve evidence and follow the approved incident authority; and
- revoke access and rotate affected credentials when responsibility ends or
  compromise is suspected.

No handbook summary weakens the detailed security documents. When uncertain,
stop the action, contain exposure, and request security review.

## 11. Software Quality

Software quality is the demonstrated fitness of a system for its approved
purpose and operating conditions. It includes correctness, security,
accessibility, performance, privacy, maintainability, observability,
recoverability, and supportability where applicable.

Quality behavior requires:

- explicit contracts and acceptance criteria;
- simple designs with justified dependencies;
- validation at trust and data boundaries;
- tests that cover important behavior and failure modes;
- reviewable changes and traceable decisions;
- clear errors without private-data leakage;
- documentation that reflects the current state;
- proportionate monitoring, rollback, backup, and recovery evidence; and
- honest disclosure of known limitations and residual risk.

Passing an automated check is evidence, not proof of complete quality. A manual
claim without repeatable evidence is not a substitute for validation.

## 12. Internal Culture

YSWORKS operates with calm urgency: important work moves deliberately without
manufactured pressure.

People are expected to:

- communicate directly, respectfully, and early;
- challenge ideas with evidence without attacking people;
- ask for context rather than hide uncertainty;
- make ownership and handoffs explicit;
- protect focused work and sustainable pace;
- prefer small, complete commitments over excessive work in progress;
- document decisions that others will need;
- acknowledge errors without concealment or blame shifting;
- protect client and company confidentiality; and
- leave room for dissent before a decision and commit to the recorded decision
  afterward, unless new risk or evidence requires escalation.

Heroics are not an operating model. Repeated emergencies indicate a system,
scope, capacity, or decision problem that must be addressed.

## 13. Human–AI Collaboration

Humans own intent, ethics, authority, risk, relationship, and final judgment. AI
may accelerate exploration, drafting, analysis, implementation, testing, and
review within an approved boundary.

Effective collaboration requires the human operator to provide sufficient
context, constraints, source authority, expected output, and validation criteria.
The operator must inspect material outputs, distinguish inference from evidence,
and retain control over state-changing actions.

AI collaborators must:

- use the minimum context necessary;
- respect information classification and system boundaries;
- cite or identify the source of important factual claims when appropriate;
- expose assumptions, uncertainty, failed validation, and unresolved conflict;
- preserve unrelated human work;
- avoid expanding scope or authority by implication; and
- produce artifacts that a responsible human can understand and maintain.

The objective is accountable leverage, not autonomous appearance. Faster output
does not reduce the required standard of judgment or evidence.

## 14. Continuous Improvement

Improvement begins with observed evidence: client feedback, defects, incidents,
review findings, delivery friction, operational data, or a clear change in
constraints. Activity, novelty, and tool adoption are not improvement by
themselves.

For a material improvement:

1. describe the current problem and impact;
2. identify the root condition rather than only the visible symptom;
3. choose the smallest useful change and expected evidence;
4. assign an owner and review point;
5. validate the effect and unintended consequences;
6. update the relevant handbook, specification, ADR, contract, or runbook; and
7. retire superseded guidance and unnecessary complexity.

Post-incident and post-delivery reviews are blameless about discovery and
rigorous about accountability. Lessons are complete only when they change a
decision, control, system, or documented practice.

## 15. Company Promise

The company promise is an internal standard of conduct, not public marketing
copy or a guarantee of outcome.

YSWORKS commits to:

- understand before proposing;
- explain what is known, unknown, included, and excluded;
- build and operate only within approved capability and authority;
- protect client trust, information, and independence;
- provide evidence for material completion and claims;
- communicate risk, delay, failure, and change without concealment;
- maintain what it agrees to maintain; and
- decline or stop work that cannot be performed responsibly.

When YSWORKS falls short, it acknowledges the gap, contains harm, communicates
appropriately, corrects the work, and improves the governing system.

## 16. Principle Of Evolution

YSWORKS evolves through evidence, explicit decisions, and controlled change.
The company may change tools, processes, services, and structures without
abandoning its obligations to truth, responsibility, security, quality, and
client trust.

Evolution follows these rules:

- preserve stable principles; review mutable practices;
- distinguish experiments from standards and future intent from current state;
- prefer reversible experiments with clear stop conditions;
- promote a practice only after evidence, ownership, maintenance, and risk are
  understood;
- record decisions at the level where they govern;
- version or retire superseded guidance instead of leaving contradictory rules;
- review this handbook after material company, legal, security, service, or
  operating-model change; and
- require explicit Founder approval for changes to company behavior or
  authority.

The handbook must remain concise enough to guide action and precise enough to
resolve behavior. If it becomes inaccurate, the correct response is a reviewed
update, not an undocumented exception.

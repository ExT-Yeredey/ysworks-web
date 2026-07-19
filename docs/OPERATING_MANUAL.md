# YSWORKS Operating Manual

**Document ID: YSW-OPS-MAN · Version 1.0 · July 2026**
**Class: Operational (EA 8.1). Subordinate to Volumes I–III and the Enterprise Architecture; where this manual and those documents disagree, this manual is wrong and must be amended.**
**Owner: Operations (Governance approves amendments). Audience: everyone who performs work under the company's name — people and machine agents alike.**
**Purpose: the constitution says why and the architecture says how the company is structured. This manual says what to actually do, day to day.**

---

## 0. Using this manual

This is a working document, not a reference to admire. It is organised by situation: find the situation, follow the procedure, use the checklist. Every section cites the constitutional or architectural source it derives from, so that when a situation exceeds the manual, you can climb to the principle and reason from there — then propose the amendment that would have answered you (EA 13, document-first change).

Three standing rules govern everything in this manual:

1. **If it isn't written down, it didn't happen.** Decisions, agreements, understandings and lessons exist when recorded (I.III.4). The record is part of the work, not overhead on it.
2. **When unsure, stop and escalate.** Executing is not deciding (EA 5.1). Encountering an undecided question mid-execution means pausing, not improvising.
3. **The honesty constraints apply to everything**, including internal notes, estimates and commit messages (I.VIII.3). We do not write down things that are not true, anywhere, at any level of formality.

---

## 1. How work begins

*Derives from III.II (the journey), III.III–V (first contact, understanding, proposals), EA 7 (information flow).*

### 1.1 Intake

Work enters through defined channels: the public website's contact route, direct email, and referral. Whatever the channel:

- Record the intake the day it arrives: who, from where, what they asked, verbatim where possible.
- Acknowledge receipt promptly and honestly. No commitment is made at acknowledgement beyond the acknowledgement itself.
- Never quote, promise or estimate at intake. Intake is a signal, not an engagement (EA 7.1).

### 1.2 Qualification

Before investing understanding effort, answer four questions in writing (III.II.3):

1. Is the problem real and is it ours? (Engineering problems for businesses — I.VI.1.)
2. Can we do this well with current capacity? (I.XI.1 — capacity precedes commitment.)
3. Is the counterpart able to hold the relationship? (Decisions, access, truth — I.VI.3.)
4. Is there any constitutional reason to refuse? (I.VI.4 checklist: unsound request, isolation risk, blame-shopping, capability we lack.)

A *no* at qualification is delivered with reasons and, where possible, a better direction (III.II.3). Record the decision either way — declined prospects are part of the company's memory.

### 1.3 Understanding

Understanding is billable-quality work performed before proposals (I.III.2):

- Ask about the business first: how money and effort flow, where it hurts, what has been tried, what *better* would mean, measured how (I.IV.1).
- Draw the system boundary around the problem, not the software (I.IV.1). List the human steps, policies and non-software elements inside it.
- Produce the **written understanding**: the client's situation in the client's language, returned to them for correction (III.IV.2). Their correction is senior (III.IV.3).
- Understanding is complete when the next decision can be defended in writing — not when every question is answered (I.III.2).

### 1.4 Proposal

The proposal is the design argument made client-facing (III.V.1). Every proposal contains, explicitly:

| Section | Content | Rule |
|---|---|---|
| Understanding | Summary of the corrected written understanding | Client has already seen and amended it |
| Proposed system | What will exist, what it will do, what it will refuse to do | Includes the *not build* list |
| Scope | Concrete inclusions | No abstractions that could mean anything |
| Exclusions | Concrete exclusions | Stated with the same care as scope (III.V.2) |
| Assumptions | What we take to be true | Listed so they can be falsified early |
| Uncertainty | What we do not yet know | Labelled and sized; estimates carry confidence (I.IV.6) |
| Definition of done | The evidence that will close the engagement | Agreed before work begins (I.IX.2) |
| Financial shape | What is paid, when, against what | Plain language; traceable (III.XII.2) |
| Document ID | `YSW-P-<year>-<seq> · v<n>` | Versioned like everything |

Rules: no commitment without the operational means to keep it (III.V.3); walk the client through it rather than merely sending it (III.V.4); confirm the load-bearing points even when approval comes fast.

### 1.5 Agreement and onboarding

- Approval is recorded, with the proposal version it applies to. Silence is not approval.
- Onboarding is deliberate (III.II.1): agree the people, the channels, the communication rhythm, the decision-makers on each side, and the access needed — granted at least privilege (EA 10.1), recorded, and scheduled for revocation at the end.
- Open the project record the same day. From here, Section 2 governs.

## 2. Project lifecycle

*Derives from I.IV (doctrine), III.II (stations), III.VIII (delivery).*

Every project moves through four phases — **Understand, Design, Build, Operate** — with explicit entry and exit criteria. Phases may be short; they may not be skipped. Skipping is a disclosed, recorded gamble (I.XVII.6), never a silent omission.

### 2.1 Understand (project-level)

Even after Section 1.3, each project refreshes understanding at its own scale. **Exit criteria:** the written understanding is current; success measures are agreed; constraints and risks are listed.

### 2.2 Design

- Produce the design argument before construction: structure, boundaries, dependencies, failure behaviour, observation, maintenance approach (I.IV.2).
- State how the system fails: closed where safety demands, degraded where continuity does (I.IV.3).
- Significant choices get an ADR: context, alternatives, decision, reasons (EA 8.1). The *why not otherwise* cannot be reconstructed later (I.IV.4).
- Design review happens on paper, where disagreement is cheap (Section 8.1).

**Exit criteria:** the design is written; a competent stranger could challenge it; the ADRs exist; the client has heard the argument in their language (III.V.1 applies to design changes too).

### 2.3 Build

- Documentation is written as decisions are made, not after (I.IV.4).
- Nothing ships that cannot be explained; no dependency without a replacement path; no production touch without a way back (I.IV.3).
- Client data is handled at the minimum the problem requires (I.IV.3), within its tenant boundary (EA 10.5).
- Progress is visible: the client's five knowings stay answerable throughout (III.VII.1). Real states only — no invented percentages (III.VII.3).
- Conscious shortcuts are recorded as debt with reason and intended repayment (I.IX.3).

**Exit criteria:** the quality gates of Section 10 pass.

### 2.4 Operate

Delivery is a beginning (I.IV.5). The handover follows Section 16.1; then the agreed maintenance posture takes over without a gap (III.VIII.3). The first fortnight after delivery receives deliberate attention — reality files its amendments early, and the client's lasting memory forms here.

## 3. Communication standards

*Derives from III.VI, II (voice), I.VIII (honesty).*

### 3.1 The four properties

All communication — internal and external — is **clear, calm, early and proportionate** (III.VI.1). Practical rules:

- Write to be understood at first reading by the actual recipient. Technical terms only where they clarify.
- Bad news travels at the speed we learn it (I.VI.2). The age of bad news is part of the news.
- Match the channel to the content: a sentence where a sentence serves; a document where the decision deserves a record; a meeting only where interaction is the point (III.VI.4).
- Spanish and English are both first-class. Write natively in the relationship's working language; never machine-translate tone (II.VI.2).

### 3.2 No disappearance

Silence is never a status (III.VI.2). Every open matter has a next communication date, even when the content will be "no change". Internally the same rule applies between collaborators: work in progress is visible work (EA 3.1, Observability).

### 3.3 Certainty discipline

State what is known as fact; label belief as belief with its confidence; admit the unknown with what is being done to know it (III.VI.3). Banned phrases in any communication: "should be fine", "almost done" without a definition, any percentage of completion not derived from countable things.

### 3.4 Written confirmation

Spoken agreements are confirmed in writing by us, unprompted, within the working day (III.VI.5). The habit protects everyone equally — which is why it is a habit, not a suspicion.

## 4. Documentation standards

*Derives from I.III.4, EA 8, III.IX.*

### 4.1 What gets documented

| Trigger | Artefact | Class (EA 8.1) |
|---|---|---|
| A significant decision | ADR / Decision record | Architectural / Records |
| A repeatable process | Playbook | Operational |
| A delivered system | Client documentation set (Section 4.4) | Records (client-owned) |
| A lesson worth keeping | Knowledge record | Operational |
| An incident | Incident account (Section 13.5) | Records |
| A shortcut taken | Debt record (I.IX.3) | Records |

### 4.2 Standards for every document

- One owner. One ID (`YSW-<class>-<identifier>`). One version. A stated audience.
- The reader test governs quality: good when the reader can act without asking the author (I.III.4). Length is whatever that takes and no more — sediment is not documentation.
- Documents live in the versioned home (EA 6.1, GitHub) unless they are client records living in the client's context.
- Stale documentation is worse than absent documentation (III.IX.3). Touching a system includes touching its documents; a change that leaves the documentation false is an incomplete change.

### 4.3 The clarity duty

Each year, every living document set must become easier to understand — pruned, merged, rewritten (I.XVI.2, EA 8.2). Schedule it; do not wait for enthusiasm.

### 4.4 Client documentation set (minimum)

Delivered with every system, priced within the work, never an extra (III.IX.1): what it is for; how it is put together; how to operate it; how it fails; how to change it safely (I.IV.4) — layered operator-first, engineer-deep (III.IX.2), in the relationship's language, honest about limits and recorded debts.

## 5. Engineering standards

*Derives from I.IV, I.III.3, I.III.5, EA 10.*

- **Business first.** No technology enters the conversation before the problem is stated without it (I.IV.1).
- **Design before build.** Section 2.2 is not optional at any project size; only its depth scales.
- **Boring by preference.** The sound choice beats the fashionable one (I.III.3); cleverness is a cost centre (I.III.5). Optimise for the stranger maintaining the system in five years, on their worst day.
- **Dependencies are debts.** Each one is chosen, pinned, replaceable, and recorded. A dependency we could not migrate off is a decision requiring explicit approval (EA 5.3 spirit: irreversibility escalates).
- **Security is a boundary property, designed early** (I.IV.3): least privilege by default, deny by default, client isolation structural and boring (EA 10). Attackers do not respect project budgets.
- **Evidence over confidence.** Performance claims carry measurements; correctness claims carry tests appropriate to risk; usefulness claims carry the client's numbers (I.IV.6).
- **Failure is designed.** Every system states its failure direction (closed/degraded) and its observation path before it ships (I.IV.3, EA 3.1).

## 6. AI usage rules

*Derives from I.V, II.XIV, EA 5.3, EA 9.*

### 6.1 What AI is for

Use AI wherever it makes engineering better — exploration, drafting, review, analysis, repetitive execution (I.V.1). Declining useful AI is itself poor engineering. No embarrassment, no theatre.

### 6.2 The human seat, operationally

- Every consequential output — anything shipped, sent, published or committed — has a named person who reviewed it, approved it and can explain it (I.V.2). "The model wrote it" is never an explanation.
- AI may prepare any decision; it may occupy none of the seats on the always-human list (EA 5.3): client commitments, money, engagement acceptance, relationship changes, security exceptions, irreversible client-data actions, public statements, constitutional matters.
- Machine-produced work is distinguishable from human decision in our records (I.V.4). Do not blur the line, even in drafts.

### 6.3 Working rules

- **Review in proportion to consequence.** A brainstorm needs a glance; a client-facing document needs full review; code needs the same review as human code — the author of record is the reviewer.
- **Client data enters AI tools only within the engagement's confidentiality posture** and the minimum-data rule (I.IV.3). When in doubt: abstract the question, or don't ask it.
- **Generated media follows II.XIV**: never fabricated evidence, never simulated reality in factual contexts; disclosure wherever a reasonable observer could mistake generated for captured.
- **Proportion (I.V.3):** a deterministic solution that suffices beats a probabilistic one that impresses. AI earns its place in a delivered system by concrete improvement with stated limits and human review where it matters.

## 7. Meetings

*Derives from III.VI.4.*

- Every meeting has a stated purpose, only the people it needs, and a written outcome. Decisions that live only in the room did not happen.
- Default lengths are short; the calendar serves the work. What can be a document is a document; what can be a message is a message.
- Meetings are reserved for what they alone can do: genuine dialogue, difficult subjects (Section 12.4), and keeping the relationship human.
- Notes: what was decided, by whom, what happens next, by when. Circulated the same day. The note-writer is named before the meeting starts.

## 8. Reviews

*Derives from I.IV.2, I.IX.2, EA 8.3.*

### 8.1 Design review

Held on paper before construction. The reviewer's job is to challenge: what fails, what's missing, what a stranger would misread, what the simpler shape would be. Arguments moved from production to design are bought at a hundred-to-one discount (I.IV.2). Output: approved design + recorded objections (dissent is recorded — I.X.2).

### 8.2 Work review

All substantive work — code, configuration, documents — is reviewed before it lands (Section 9.3). The review standard: could I maintain this; could a stranger; is it explained; is it boring enough (I.III.5); does it leave the system easier to understand (I.XVI.2)?

### 8.3 Pre-delivery review

The quality gates of Section 10, walked deliberately, with the checklist, before any handover is scheduled.

### 8.4 Post-delivery review

Within a month of delivery: what did reality amend; what did we learn; what graduates to knowledge (Section 15); what debt was recorded and when is it repaid. Causes, not culprits (I.VIII.3).

## 9. Git workflow

*Derives from EA 6.1 (GitHub's responsibility: history, review, authored change), I.XII (document-first).*

- **Everything versioned lives in the versioned home**: source, configuration, operational documents, this manual. A change without history is a change the company cannot explain (I.IV.6).
- **Main is always releasable.** Work happens on branches named for their purpose; branches are short-lived; long-lived divergence is a form of hidden debt.
- **Commits are small and honestly described.** The message states what and why — commit messages are records and the honesty constraints apply (Section 0.3).
- **Every change lands through review** (Section 8.2), including the Founder's, including machine-authored changes — which are reviewed by their human seat (Section 6.2) and marked as machine-assisted in keeping with I.V.4.
- **Documents lead code.** Where a change alters structure or behaviour described in a document, the document changes in the same change-set or before it — never silently after (EA 13).
- **Releases are deliberate**: versioned, noted, reversible (a way back is a build requirement — I.IV.3).

## 10. Quality gates

*Derives from I.IX.2 (done), III.VIII.1 (delivery state).*

Nothing is *done*, and nothing is delivered, until all five gates pass:

| Gate | Question | Evidence |
|---|---|---|
| G1 Works | Does it do what the design argues, in conditions like reality? | Demonstration against the definition of done |
| G2 Evidenced | Is its working shown, in proportion to its risk? | Tests, measurements, review records |
| G3 Documented | Are the decisions and operation written for their readers? | Section 4.4 set, current; ADRs present |
| G4 Maintainable | Is the maintenance posture agreed and written? Who watches, what is watched, what healthy looks like (I.IV.5) | Maintenance record |
| G5 Usable | Can the client actually use what they receive? | Handover walkthrough completed (Section 16.1) |

A gate that fails stops the schedule, not the standard (I.XI.1). Conscious exceptions are debt records with reasons and repayment dates (I.IX.3) — visible, never quiet.

## 11. Decision making

*Derives from I.X, EA 5.*

### 11.1 Classify first

Before arguing a decision, classify it (I.X.2): **reversible** — decide close to the work, quickly, correct without ceremony; **irreversible or expensive** — decide slowly, in writing, alternatives stated, evidence attached. Most decisions are reversible; treating them all as grave is false rigour.

### 11.2 Who decides

Authority is explicit (EA 5.2): whoever holds the domain (EA 4) decides within it; the always-human list (EA 5.3) is never delegated to automation; conflicts between domains escalate to Governance rather than being settled by adjacency (EA 4.3). If you cannot say in one step who is entitled to make a decision, the decision is not ready to be made.

### 11.3 Record and commit

Decisions are recorded with their reasons — the reasons are the unreconstructible part (I.IV.4). Argue before; commit after; record dissent without theatre (I.X.2). A recorded wrong decision teaches; an unrecorded right one merely happened.

## 12. Client communication

*Derives from Volume III, Books VI, VII, XIII.*

### 12.1 Rhythm

Every active relationship has an agreed communication rhythm, set at onboarding. The rhythm is kept even when the update is "no change; next update on the agreed date" (III.VI.2).

### 12.2 The five knowings

At any moment the client can know: is everything all right; what is happening; what requires their attention; what YSWORKS is doing; what happens next (III.VII.1). Push what deserves interruption — would they, fully informed, have asked to be told now? (II.XIII.4) — and keep the rest available, current and true.

### 12.3 Everyday rules

- First response to any client message acknowledges receipt honestly, even when the full answer needs time — with a date for the answer.
- Never re-ask the client for context the company already holds (III.X.1). Read the record first.
- Confirm spoken agreements in writing the same day (III.VI.5).
- Money communications follow III.XII: no surprise as policy; extras agreed before incurred; anything unclear on an invoice is our defect, not the client's confusion.

### 12.4 Difficult conversations

The discipline (III.XIII.1): early, direct, grounded in the record, calm, concluded in writing. Specific plays:

- **Delay**: announce when *likely*, not when undeniable — cause, honest size, consequences (III.XIII.2).
- **Scope pressure**: "we can do less, or differently, or later — we cannot do worse" (I.XVII.14). Reopen the proposal's explicitness; absorb nothing silently.
- **Disagreement**: evidence first; the client decides within their business; commit fully; record dissent; the written warning is owed once, clearly, where we believe harm will follow (III.XIII.3).
- **Their mistake**: fix first, explain second, humiliate never. If the design invited the mistake, say so unprompted (III.XIII.5).
- **Our mistake**: they hear it from us first, in first person, with what it affects, what we are doing, and what part of the cost we absorb (III.XIII.6).

## 13. Incident handling

*Derives from III.X.2, III.XIV, EA 12.6.*

### 13.1 Classify

Four kinds (III.X.2): **query** (question — answer it, then check whether documentation should have), **request** (change — schedule honestly through Section 11), **incident** (system misbehaving against its documentation — prioritise by client impact), **critical incident** (business materially stopped, or data/security in question — pre-empts ordinary work immediately). Judge by impact on the client, not convenience of the company.

### 13.2 First actions (incident and critical)

1. Contain before you diagnose, where containment is safe. The conservative action first, explanation second (III.XIV.3).
2. Preserve evidence before it is convenient: logs, states, timeline (III.XIV.3).
3. Open the incident record: what is known, when, by whom.

### 13.3 The first message

Sent early — before full understanding (III.XIV.2). Contents, exactly: what is affected, in the client's terms; what is contained or still moving; what we are doing now; when the next update comes. No speculation, no causes before evidence, no reassurance the facts don't support.

### 13.4 During

Updates at the promised cadence even when the content is "no change" (III.XIV.3). One person owns the incident until closure; ownership is named, not assumed (III.X.1).

### 13.5 After

Every significant incident ends in a written account, delivered to the client rather than filed near them (III.XIV.4): what happened; why — causes, not culprits; what was done; their exposure; what changes now. Internally: what graduates to knowledge (Section 15) and what enters the debt or improvement backlog.

## 14. Maintenance

*Derives from I.IV.5, I.XVI.2, III.X.3.*

- Every delivered system has a written maintenance posture before handover (G4): who watches, what is watched, what healthy looks like, when it is revisited.
- Maintenance is prevention, not accumulated repair (III.X.3): scheduled reviews of dependencies, security posture, backup verification, and documentation truth.
- The yearly clarity duty applies to systems as to documents: each year easier to understand — fewer surprises, plainer structure, truer records (I.XVI.2). A system harder to understand than last year has evolved in the wrong direction, whatever it gained.
- Maintenance work is reported to the client periodically in plain terms — invisible work billed invisibly breeds ambiguity (III.X.3, III.XII.1).

## 15. Knowledge capture

*Derives from I.III.4, EA 8.*

- **Capture at the moment of learning**, not at project end: the decision that surprised, the estimate that missed, the tool that disappointed, the client question that recurred. A repeated question is a documentation defect wearing a costume (III.X.2).
- Lessons graduate: working note → knowledge record → playbook amendment, at the moment they prove stable (EA 8.1 — memory is a cache, never the library).
- Client particulars are abstracted before entering the general library (EA 7.3): the lesson travels; the client's data does not.
- Each quarter, Knowledge reviews what was captured, merges duplicates and prunes the dead (EA 8.2). The library must stay smaller than the temptation to keep everything.

## 16. Project closure

*Derives from III.VIII, III.IX, III.XVII, EA 7.1.*

### 16.1 Handover (the event)

The handover ends when the client says they hold the system — not when we finish presenting it (III.VIII.2). Checklist:

- [ ] System demonstrated doing the client's real work
- [ ] Documentation walked through until the client navigates it unaccompanied
- [ ] Credentials, access and artefacts transferred, verified received and working
- [ ] Delivered-versus-agreed stated plainly, including recorded debts with reasons and repayment intent
- [ ] First weeks agreed: who watches, what happens, when we speak (III.VIII.3)

### 16.2 Closure (the record)

- Close the project record: final state, definition-of-done evidence, open debts, maintenance posture in force.
- Post-delivery review held (Section 8.4); knowledge captured (Section 15).
- Access granted for the project is revoked on our side and theirs, confirmed in writing (III.XVII.2 applies internally too).
- The record moves to history — complete, immutable, superseded rather than edited ever after (EA 7.2).

### 16.3 If the relationship ends

Offboarding follows III.XVII in full: everything the client owns leaves with them in usable form; documentation current to the last change; a written handover account for their next engineer; access revoked cleanly both ways; the door left open. The company's conduct in the last month, with no future revenue to protect, is the truest measurement of everything this manual claims (III.XVII.1) — perform it accordingly.

---

## Appendix A — Daily quick reference

**Before starting anything:** is it qualified, understood, agreed, and recorded? (Sections 1–2)
**Before sending anything:** clear, calm, early, proportionate — and true? (Section 3)
**Before shipping anything:** five gates. (Section 10)
**Before deciding anything:** reversible or not; whose seat; where recorded? (Section 11)
**When something breaks:** contain, preserve, record, message with facts and a next-update time. (Section 13)
**When something is learned:** capture it now. (Section 15)
**When in doubt:** stop, escalate, write it down. (Section 0)

## Appendix B — Amendment

This manual changes the operational way (EA 13): propose in writing, review, version, supersede. Practice diverging from the manual is an incident of the Knowledge domain — one of the two is wrong, and the divergence is fixed in whichever direction the truth requires (EA 8.3).

**End of Operating Manual v1.0.**

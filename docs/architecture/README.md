# YSWORKS Public Platform Architecture

## Purpose

This directory contains public-safe architecture contracts for the YSWORKS
public platform. It does not contain deployment configuration, private topology,
credentials, host addresses, ports, workflow definitions, or proof that any
named internal service is deployed.

## Canonical Document

- [Secure Public Platform Foundation](SECURE_PUBLIC_PLATFORM_FOUNDATION.md)
- [Client Portal Foundation](CLIENT_PORTAL_FOUNDATION.md)
- [Authority, Mandate, Approval And Audit System Design](AUTHORITY_MANDATE_APPROVAL_AUDIT_SYSTEM.md)
  defines the public-safe logical contract for future authority, mandates,
  policy, approvals, execution authorisation, and audit. It contains no runtime
  or private topology.

The client-facing experience of the Client Workspace is constitutionally
governed by
[Volume III — Client Experience Constitution](../CLIENT_EXPERIENCE_CONSTITUTION.md).
The Client Portal Foundation remains the authoritative technical and security
contract.

Both architecture contracts implement the enterprise boundaries in
[YSWORKS Enterprise Architecture](../YSWORKS_ENTERPRISE_ARCHITECTURE.md),
especially *EA 6.1–2* and *EA 10.1–6*. They may impose stricter domain controls
but may not claim that an architectural requirement is already deployed.

## Publication Rule

Every document in this directory must be safe to publish. Product names used in
exposure matrices describe service categories and policy decisions only. They
must not be interpreted as an inventory of YSWORKS systems.

# Design System

## Purpose

This document summarizes the public design direction for YSWORKS Web.

For detailed guidance, use `.ai/design-system-v1.md`.

## Direction

The visual direction is dark, minimal, precise, and professional.

The site should feel engineered rather than decorated. It may take inspiration from Vercel, Linear, Cloudflare, Stripe, Apple, Raycast, and Anthropic, while remaining distinct and restrained.

## Current Status

This is the approved public design-system foundation. Component behavior remains
subject to implementation validation. The Founder-approved
[YSWORKS Design Tokens v1.0](../docs/design/YSWORKS_DESIGN_TOKENS_V1.md) are the
permanent color foundation; other token domains remain governed by their
specific approved sources.

## Visual Principles

- Minimal.
- Calm.
- High contrast.
- Fast to scan.
- Premium without being flashy.
- Technical without exposing private systems.
- Consistent across mobile and desktop.
- Content-first.
- Performance-conscious.

## Interface Principles

- Prioritize content clarity.
- Avoid decorative complexity.
- Use whitespace intentionally.
- Keep interactions predictable.
- Prefer native semantics before custom controls.
- Use motion only when it improves comprehension.
- Prefer CSS over JavaScript for visual behavior.

## Components

Components should be:

- Small.
- Reusable.
- Accessible.
- Responsive.
- Easy to delete or replace.
- Decoupled from private systems.

Do not create a large component system before the website needs one.

## Content Constraints

Design must not depend on invented customers, invented products, invented metrics, or private implementation details.

Public content should be durable, factual, maintainable, and understandable without private context.

## Trust Model

YSWORKS should earn trust through engineering quality, consistency, accessibility, security, and clear documentation.

Do not use fake proof, exaggerated claims, generic stock imagery, or artificial credibility signals.

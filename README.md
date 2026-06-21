# Revanth Pattipati Personal Site

An Astro-powered personal website for AI infrastructure, agentic systems, enterprise AI architecture, writing, systems work, and field notes.

## Local Development

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321/` by default.

## Content Workflow

Editable website content lives in the root `content/` folder. The design and page code live in `src/`.

```text
content/
  site/
    profile.yml
    homepage.yml
    navigation.yml
    social-links.yml
  writing/
  notes/
  projects/
  certifications/
    certifications.yml
```

Use `content/site/profile.yml` for name, title, target title, location, hero headline, hero subheadline, bios, positioning, and personal interests.

Use `content/site/homepage.yml` for featured writing, featured projects, focus areas, credibility strip, CTA labels, and the speaking/advisory section.

Use `content/site/navigation.yml` for header navigation.

Use `content/site/social-links.yml` for LinkedIn, GitHub, and email links.

Use `content/certifications/certifications.yml` for certifications.

## Add Writing

Create a file in `content/writing/` using lowercase words separated by hyphens.

```mdx
---
title: "Why Most AI Agents Fail Before They Reach Production"
description: "A systems view of why agentic workflows break down before production."
date: "2026-06-20"
category: "Agentic Systems"
tags:
  - agents
  - enterprise-ai
readingTime: "6 min read"
featured: true
draft: false
---

Article body in Markdown or MDX.
```

Set `draft: true` to keep it unpublished.

## Add Notes

Create a file in `content/notes/`.

```mdx
---
title: "Token cost is architecture feedback."
date: "2026-06-20"
category: "Field Notes"
tags:
  - llm-infrastructure
  - cost
draft: false
---

Token cost is not just a billing problem. It is a signal that the workflow, context strategy, routing logic, or agent loop may need better architecture.
```

## Add Projects

Create a file in `content/projects/`.

```mdx
---
title: "EvalKit"
description: "A lightweight evaluation framework for LLM and agentic workflows."
status: "In Progress"
category: "Evaluation"
technologies:
  - TypeScript
  - Python
  - OpenAI
problem: "LLM and agentic systems are difficult to trust without repeatable evaluation."
architecture: "EvalKit provides test cases, scoring, failure classification, prompt versioning, and regression checks."
tradeoffs:
  - "Simplicity over excessive abstraction"
  - "Repeatable tests over one-off demos"
githubUrl: ""
writeupUrl: ""
featured: true
draft: false
---

Longer project notes in Markdown or MDX.
```

## Validate And Build

Run these before committing content changes:

```sh
npm run content:check
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deploy

The production build is emitted to `dist/`. Deploy the project to any static Astro host such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

For Vercel or Netlify:

- Build command: `npm run build`
- Output directory: `dist`

After pushing to GitHub, Vercel should automatically deploy the latest version.

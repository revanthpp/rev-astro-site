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

## Homepage Design Previews

The current homepage remains in place. Four isolated design directions are available for comparison:

- `/preview/editorial-operator`
- `/preview/field-manual`
- `/preview/builder-lab`
- `/preview/human-signal`

| Option | Best for | Visual feel | Strengths | Tradeoffs | Recommendation score |
| --- | --- | --- | --- | --- | --- |
| Editorial Operator | AI leaders, executives, hiring managers | Premium editorial, off-white, ink, muted rust | Highest immediate credibility, strong writing hierarchy, mature project framing | More formal and less playful | 8.9/10 |
| Field Manual | Builders, operators, curious readers | Practical guidebook, bone, charcoal, olive | Most distinctive information architecture, integrates quick notes naturally | The vertical rail is more opinionated | 8.6/10 |
| Builder Lab | Engineers, GitHub visitors, technical recruiters | Dark project ledger, graphite, restrained blue | Best project visibility, clearest technical depth, strongest GitHub path | Narrower appeal for non-technical readers | 8.8/10 |
| Human Signal | Broad audience, collaborators, newsletter readers | Warm, image-led, deep navy, muted copper | Best personal voice, approachable authority, strong newsletter conversion | Slightly less formal than Editorial Operator | 9.3/10 |

### Recommendation

Human Signal is the strongest overall direction. It balances technical credibility with the warmth and humor that make the site feel like Revanth rather than a generic AI portfolio. It also gives FutureProofOS a natural conversion moment and leaves enough room for projects to grow.

If selected, keep the Human Signal system and borrow the project ledger structure from Builder Lab for the full Projects page.

### Recommended Navigation

- Home
- Notes
- Projects
- Newsletter
- About
- Contact

Writing and Field Notes now share one destination: `/notes`. Long essays remain at their existing `/writing/<slug>` URLs for compatibility and SEO, while the Notes page presents essays and quick observations together.

Newsletter stays separate because it has a different job. Notes is the reading archive. FutureProofOS is the email invitation and subscription layer.

### Publishing a Selected Direction

1. Copy the selected preview page structure into `src/pages/index.astro`.
2. Keep its custom navigation treatment or move that treatment into `src/components/Header.astro`.
3. Use `noindex={false}` if the selected page continues to use `PreviewLayout.astro`, or move it into a production layout.
4. Preserve the existing metadata, canonical URL, project data, and post URLs.
5. Run `npm run content:check` and `npm run build`.
6. Check desktop and mobile before pushing to the production branch.

### Files to Change After Selection

- `src/pages/index.astro` for the selected homepage
- `src/components/Header.astro` if the selected navigation becomes global
- `src/components/Footer.astro` if the selected footer becomes global
- `src/styles/global.css` for shared production tokens
- `content/site/homepage.yml` for final homepage copy and featured content
- `src/layouts/PreviewLayout.astro` only if it becomes the new production layout

The preview files can remain as a design archive or be removed after the selected direction is published.

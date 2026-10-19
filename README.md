# Naoyuki Christopher Higaki — Portfolio

A personal portfolio presenting software engineering services, selected projects, professional profiles and an article about the author's computing setup. This repository contains the portfolio website, not the source code for the featured applications.

**Public website:** [portfolio-yuki-christopher.lovable.app](https://portfolio-yuki-christopher.lovable.app)

**Audience:** the portfolio owner, developers maintaining the website and reviewers assessing the implementation.

## Table of Contents

- [Overview](#overview)
- [Pages and Visitor Experience](#pages-and-visitor-experience)
- [Featured Projects](#featured-projects)
- [Technology and Architecture](#technology-and-architecture)
- [Repository Structure](#repository-structure)
- [Local Development](#local-development)
  - [Prerequisites](#prerequisites)
  - [Installation and Startup](#installation-and-startup)
  - [Configuration](#configuration)
- [Available Commands](#available-commands)
- [Maintaining Content](#maintaining-content)
  - [Profile and Contact Details](#profile-and-contact-details)
  - [Projects and Services](#projects-and-services)
  - [Blog Article](#blog-article)
  - [Design and Accessibility](#design-and-accessibility)
- [Search and Social Previews](#search-and-social-previews)
- [Quality Assurance](#quality-assurance)
- [Publishing and Release Checks](#publishing-and-release-checks)
- [Security and Privacy](#security-and-privacy)
- [Troubleshooting](#troubleshooting)
- [Contribution Guidelines](#contribution-guidelines)
- [Current Scope and Limitations](#current-scope-and-limitations)
- [Ownership and Licensing](#ownership-and-licensing)
- [Related Documentation](#related-documentation)

## Overview

The website gives visitors a concise view of Naoyuki Christopher Higaki's work across web, Windows desktop, Android and database development. Visitors can review skills, open project repositories, read the blog and connect through external professional profiles.

Content is maintained in the source code. The current implementation does not use a content management system, application database or account system.

## Pages and Visitor Experience

| Page | URL path | Purpose |
| --- | --- | --- |
| Home | `/` | Introduction, technology stack and links to services and profiles. |
| About | `/about` | Background, skills, development tools and operating-system preferences. |
| Services | `/services` | Web, desktop, Android, database, systems and code-review services. |
| Work | `/testimonials` | The three featured projects with links to their source repositories. |
| Blog | `/blog` | The current article listing. |
| Article | `/blog/linux-macos-windows-vms` | The full Fedora, macOS and Windows virtual-machine article. |
| FAQ | `/faq` | Common questions in expandable sections. |
| Contact | `/contact` | LinkedIn, GitHub and LeetCode profiles, plus public support wallet addresses. |
| Privacy Policy | `/privacy` | Information about data handling and external services. |
| Terms | `/terms` | Conditions for using the portfolio. |

The Work page retains `/testimonials` as its URL, but currently displays projects rather than testimonial quotes. Unknown URLs show a custom page-not-found screen. Shared navigation and footer links are available across the site.

## Featured Projects

| Project | Summary | Source repository |
| --- | --- | --- |
| Harmonie Budget Tracker | Offline Android expense tracking, categories, monthly budgets and spending charts; Kotlin, MVVM and local JSON storage. | [harmonie-budget-app-kt](https://github.com/HChristopherNaoyuki/harmonie-budget-app-kt) |
| Campus Eats | Android campus dining with local Room storage, Firebase synchronization, authentication and REST catalog integration. | [campus-eats-app-kt](https://github.com/HChristopherNaoyuki/campus-eats-app-kt) |
| Fake Restaurant API | A mock restaurant ordering API for learning, testing and integration; ASP.NET Core and Entity Framework Core. | [fake-restaurant-api](https://github.com/HChristopherNaoyuki/fake-restaurant-api) |

These technologies describe the featured projects. They are not dependencies or services used by this portfolio. For application setup, API contracts and project-specific licenses, consult each linked repository.

## Technology and Architecture

| Technology | Role in this website |
| --- | --- |
| TanStack Start | React application framework and server rendering. |
| TanStack Router | File-based routing and page metadata. |
| React 19 and TypeScript | User interface and typed application code. |
| TanStack Query | A query client created per router instance and provided through the root layout. |
| Tailwind CSS v4 | Styling through semantic tokens in the global stylesheet. |
| Radix UI and local UI components | Reusable interface controls available to the application. |
| Lucide React | Interface icons. |
| Vite and Lovable configuration | Development tooling and production build configuration. |
| Vitest and Testing Library | Automated tests in a simulated browser environment. |
| Bun | Dependency installation and script execution; the repository includes `bun.lock`. |

`src/router.tsx` creates the router and query client. `src/routes/__root.tsx` provides the document shell, shared layout, query provider and error screens. Individual content routes supply their own page metadata. The nested blog parent renders its child pages through an `Outlet`.

`src/start.ts` includes request error handling and cross-site request protection for server functions. `src/server.ts` wraps the server entry to normalize certain unexpected rendering failures. These framework facilities do not imply that the portfolio has a custom business API.

The Vite configuration uses Lovable's shared configuration package. It already supplies the core framework, React, Tailwind and build plugins; do not add duplicate copies. The default production target is Cloudflare. Local tooling and the published server runtime are different environments, so future server-side features must be checked for target-runtime compatibility.

## Repository Structure

```text
.
├── AGENTS.md                 Project maintenance rules
├── README.md                 Project overview and maintenance guide
├── package.json              Dependencies and supported scripts
├── bun.lock                  Dependency lockfile
├── bunfig.toml               Bun installation policy
├── vite.config.ts            Development and production configuration
├── vitest.config.ts          Test configuration
├── public/                   Favicon, robots.txt and sitemap.xml
├── roadmap.md                Task checklist
└── src/
    ├── components/site.tsx   Shared layout, metadata and portfolio elements
    ├── components/ui/        Reusable UI components
    ├── content/              Structured blog article content
    ├── hooks/                Shared React hooks
    ├── lib/                  Utilities and error handling
    ├── routes/               File-based pages and route documentation
    ├── test/                 Test setup and routing test
    ├── routeTree.gen.ts      Automatically generated route tree
    ├── router.tsx            Router and query-client creation
    ├── server.ts             Server entry wrapper
    ├── start.ts              Request middleware
    └── styles.css            Design tokens and global styles
```

Do not edit `src/routeTree.gen.ts` by hand. It is generated from route files. Dependency folders and generated build output are not application source.

## Local Development

### Prerequisites

- Access to this repository and a terminal.
- Git, if obtaining the source through a repository clone.
- A current stable Bun installation; see the [Bun installation guide](https://bun.sh/docs/installation).
- A Node.js version supported by the installed Vite release if using Node-based tooling. The repository does not declare an `engines` version; consult [Vite's current requirements](https://vite.dev/guide/) rather than assuming any Node.js version will work.

### Installation and Startup

Obtain the repository through your authorized Git host or download its source, then open a terminal in the project root—the folder containing `package.json`.

```sh
bun install --frozen-lockfile
bun run dev
```

Open the local address printed by the development server. In the Lovable sandbox, the preview server uses port `8080` and is managed automatically. A standalone local checkout may use a different port.

If installation reports that the lockfile and package manifest disagree, first confirm that both files come from the same revision. Run `bun install` without the frozen option only when intentionally updating dependencies, and review the resulting lockfile changes.

### Configuration

The current portfolio pages do not require a project-specific API key or database connection. No environment-file setup is needed for the current content-only experience.

Configuration is held in these files:

| File | What it controls |
| --- | --- |
| `vite.config.ts` | Lovable's Vite integration and custom server entry. |
| `tsconfig.json` | TypeScript rules and the `@/` alias for `src/`. |
| `vitest.config.ts` | Test file selection, browser simulation and aliases. |
| `eslint.config.js` | Code-quality checks. |
| `.prettierrc` | Formatting conventions. |
| `bunfig.toml` | Installation settings, including a 24-hour package release-age guard and explicit exceptions. |
| `src/styles.css` | Fonts, colors, layout utilities and motion preferences. |

Never place private credentials in source code or browser-exposed variables. If future features need secrets, configure them through the hosting platform's secret management.

## Available Commands

Run these commands from the project root.

| Command | Purpose | Notes |
| --- | --- | --- |
| `bun run dev` | Start the development server. | Use in a standalone checkout; the Lovable sandbox already manages its server. |
| `bun run build` | Create the production build. | In Lovable, builds run automatically after edits. |
| `bun run build:dev` | Build using development mode. | Not a substitute for a production release check. |
| `bun run preview` | Start Vite's build-preview command. | Preview behavior depends on the generated server output; it does not publish the site. |
| `bun run test` | Run all automated tests once. | Uses Vitest. |
| `bun run test:watch` | Run tests during local development. | Watches for changes. |
| `bun run lint` | Check code quality and formatting rules. | Review and resolve reported issues. |
| `bun run format` | Format supported project files. | Rewrites files; review the diff before submitting changes. |

There is no dedicated type-check script in `package.json`. Do not refer contributors to a command that has not been defined.

## Maintaining Content

### Profile and Contact Details

Edit `LINKS` in `src/components/site.tsx` to change shared external profile URLs. The visible profile labels are in `src/routes/contact.tsx`; update labels and destinations together. Background and skill groups are in `src/routes/about.tsx`.

Public Bitcoin and Ethereum addresses are held in `WALLETS` in the shared site module. Check every character with the owner before changing an address. The copy control only places an address on the clipboard; it does not initiate a payment.

The Contact page currently directs visitors to LinkedIn. It does not include an email address or a message submission form.

### Projects and Services

Maintain the selected projects in `src/routes/testimonials.tsx`. Keep the three owner-approved projects and accurate repository links. Do not invent customer feedback, project outcomes or performance statistics.

Services are defined in `src/routes/services.tsx`. Keep the home-page summaries and About-page skills consistent with changes to service offerings.

### Blog Article

The article text is in `src/content/linux-article.ts`. Its `ARTICLE` export contains a title, a description and ordered content blocks. The article page renders those blocks as paragraphs, headings, lists and emphasized text without a runtime Markdown dependency.

The listing is in `src/routes/blog.index.tsx`. The complete article is in `src/routes/blog.linux-macos-windows-vms.tsx`. `src/routes/blog.tsx` is the parent route and must retain its `Outlet`.

The blog currently contains only the owner's supplied article. Do not add placeholder posts. Preserve the meaning and ordering of the author's text when correcting or updating it.

### Design and Accessibility

Use the semantic tokens in `src/styles.css` and the existing interface components. Avoid isolated color values that bypass the design system. Keep body text legible, controls easy to reach and long profile names able to wrap.

Maintain visible keyboard focus, descriptive links, logical heading levels and reduced-motion support. Check both narrow phone layouts and desktop layouts. An automated overflow check alone does not establish accessibility compliance.

## Search and Social Previews

Every content page supplies a unique title and description through the shared `meta` helper in `src/components/site.tsx`. The helper also sets Open Graph title, description and type, plus the Twitter card type. The article overrides its Open Graph type to `article`.

`public/robots.txt` allows crawling and points to `public/sitemap.xml`. The sitemap lists public content URLs on the published domain. Update it whenever a public page or the primary domain changes.

The current implementation does not supply canonical URL tags or dedicated social-image tags. Search metadata and a sitemap improve discoverability but do not guarantee indexing or ranking. Do not imply that a sitemap has been submitted to a search service unless that has actually been done.

## Quality Assurance

Run the automated suite before submitting a change:

```sh
bun run test
```

The existing routing test in `src/test/app-routing.test.tsx` confirms that `/` resolves to a content route rather than the root fallback. It does not test every page, rendered layout, external repository or publishing outcome.

For a release or content update, also check:

1. Open every public URL directly and through navigation.
2. Confirm that the blog listing opens the article and that its return link works.
3. Check project and contact link destinations.
4. Test FAQ expansion and wallet copying in a supported browser.
5. Inspect narrow phone and desktop layouts for clipping and horizontal overflow.
6. Navigate with the keyboard and check visible focus.
7. Inspect page titles, descriptions and social metadata.
8. Open `/robots.txt` and `/sitemap.xml` and confirm their content.
9. Open an unknown URL and check the page-not-found experience.
10. Review browser errors and hosting build results.

For logic changes, add focused tests under `src/` using the configured `.test.ts`, `.test.tsx`, `.spec.ts` or `.spec.tsx` naming pattern. Do not treat screenshots or text-only assertions as substitutes for behavior tests.

## Publishing and Release Checks

Use the project's publishing controls in [Lovable](https://lovable.dev). A saved change in the editor updates the preview; it is not proof that the public website has been updated. Publish intentionally after reviewing the preview.

Before publishing, complete the quality checks above and confirm that links, addresses and legal wording are approved. After publishing, repeat the essential checks on the public domain, including direct loading of the article URL and sitemap access.

For an independent hosting deployment, preserve the configured TanStack Start server build and use a host compatible with its output. Do not assume a server-rendered application can be deployed by copying browser files alone. Consult [TanStack Start documentation](https://tanstack.com/start/latest/docs/framework/react/overview) and the chosen host's deployment instructions.

## Security and Privacy

- The portfolio has no user registration or login flow, application database or custom payment processor.
- Profile links lead to external services governed by their own policies.
- Listed wallet addresses are intentionally public. Contributions occur outside this website and may be recorded on public blockchains.
- Clipboard copying is a browser feature and generally requires a secure context and permission; check it on the published HTTPS site.
- Framework request middleware includes cross-site request protection for server functions. Preserve it when introducing future server functionality; it is not user authentication.
- Hosting and error-reporting facilities may process technical information. Review their actual configuration before making privacy guarantees.
- Keep private keys, tokens, personal data and local environment files out of the repository and logs.

Review the Privacy Policy and Terms with appropriate legal advice when site behavior, data collection or commercial activity changes.

## Troubleshooting

| Problem | Likely cause | Recommended action |
| --- | --- | --- |
| Installation fails with a lockfile error. | Manifest and lockfile differ. | Restore matching files or intentionally update dependencies and review changes. |
| A newly released dependency will not install. | Bun's release-age guard blocks it. | Wait for the configured period; do not bypass the guard without an approved reason. |
| A page shows the not-found screen. | Missing or incorrectly named route file. | Check the route naming guide and let route generation run. |
| A route type refers to a missing path. | A link was added before its destination route. | Create or correct the route file; do not suppress the error with a cast. |
| Blog child pages do not appear. | The parent no longer renders `Outlet`. | Restore the parent route's `Outlet`. |
| Long text clips on phones. | A constrained element cannot wrap. | Check the affected page and shared layout; add appropriate wrapping and retest. |
| Styling breaks after configuration changes. | Duplicate plugins or invalid CSS imports. | Restore the shared Vite integration and keep CSS imports at the top of the stylesheet. |
| Wallet copying fails. | Clipboard restrictions or permission denial. | Test on HTTPS and confirm browser permissions; the visible address can still be selected manually. |
| Published pages still show old content. | Preview changes have not been published, or cached content is displayed. | Confirm publishing completed, then reload and inspect the public site. |
| An unexpected error screen appears. | Rendering or request processing failed. | Inspect browser and hosting logs; do not expose stack traces to visitors. |

In the Lovable sandbox, diagnostic files may be available under `/tmp/observability/`, including `build-errors.log` and `runtime-errors.log`. These are environment-specific and may not exist in a local checkout. Check for file presence before reading them.

## Contribution Guidelines

1. Read [AGENTS.md](AGENTS.md) and the [route maintenance guide](src/routes/README.md).
2. Keep changes focused on an approved request.
3. Preserve TanStack file-based routing and generated-file boundaries.
4. Reuse shared layout, metadata and design components.
5. Verify factual copy with the owner; do not fabricate business claims.
6. Run relevant tests and inspect affected pages.
7. Update documentation and the sitemap when the change requires it.
8. Submit changes through the repository's agreed review process.

This project is connected to Lovable. Avoid rewriting published Git history, including force pushes and rebasing or amending already-published commits, because it can disrupt synchronization. Review dependency and formatting changes rather than including unrelated changes in a contribution.

## Current Scope and Limitations

The website is a source-maintained portfolio. It is not a customer portal, online shop, hosted restaurant API or Android application. It does not provide project search, blog subscriptions, comments, user accounts or automatic synchronization with GitHub repositories.

Featured project descriptions are owner-provided summaries. The blog has one article. Wallet support is an address display and copy feature, not transaction tracking. The legal pages are general site wording rather than evidence of legal review.

These boundaries describe the present implementation, not a commitment to future features.

## Ownership and Licensing

The portfolio identifies Naoyuki Christopher Higaki as its content owner. This repository does not currently include a standalone license file. Public access to source code does not by itself grant permission to reuse it; obtain permission before redistribution or commercial reuse.

Third-party dependencies retain their own licenses. The three featured repositories have independent licensing terms; check each repository before using its code or media.

## Related Documentation

- [Route maintenance guide](src/routes/README.md)
- [Project maintenance rules](AGENTS.md)
- [Lovable documentation](https://docs.lovable.dev/)
- [TanStack Router documentation](https://tanstack.com/router/latest/docs/framework/react/overview)
- [TanStack Start documentation](https://tanstack.com/start/latest/docs/framework/react/overview)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Vitest documentation](https://vitest.dev/guide/)

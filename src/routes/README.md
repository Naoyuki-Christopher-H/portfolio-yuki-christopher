# Portfolio Route Maintenance Guide

This document explains how the portfolio's pages are organized, how navigation works and how to maintain routes safely. It is intended for developers changing pages, metadata or shared layouts.

For installation, commands and release procedures, see the [project README](../../README.md). Project-wide maintenance rules are in [AGENTS.md](../../AGENTS.md).

## Table of Contents

- [Routing Model](#routing-model)
- [Current Route Inventory](#current-route-inventory)
- [Shared Shell and Router](#shared-shell-and-router)
- [File Naming Conventions](#file-naming-conventions)
- [Blog Structure](#blog-structure)
- [Adding or Changing a Page](#adding-or-changing-a-page)
  - [Create the Route](#create-the-route)
  - [Connect Navigation](#connect-navigation)
  - [Update Search Information](#update-search-information)
  - [Rename or Remove a Route](#rename-or-remove-a-route)
- [Page Metadata](#page-metadata)
- [Content and Shared Components](#content-and-shared-components)
- [Data Loading and Runtime Boundaries](#data-loading-and-runtime-boundaries)
- [Error and Not-Found Handling](#error-and-not-found-handling)
- [Accessibility and Mobile Layout](#accessibility-and-mobile-layout)
- [Testing and Review](#testing-and-review)
- [Troubleshooting](#troubleshooting)
- [Maintenance Checklist](#maintenance-checklist)
- [Reference Documentation](#reference-documentation)

## Routing Model

The application uses TanStack Start with TanStack Router's file-based routing. Route modules live in `src/routes/` and export a `Route` created with `createFileRoute`. The root route is the exception: it uses `createRootRouteWithContext`.

The route generator builds `src/routeTree.gen.ts` from these files. `src/router.tsx` imports that generated tree. File names therefore affect URLs, route relationships and navigation types.

Keep the existing routing framework. Do not add React Router, `BrowserRouter`, an `App.tsx` page switcher, a `src/pages/` directory or Next.js-style layouts. In particular, do not create `src/routes/_app/index.tsx` as an alternative home route; it can conflict with the existing `/` page.

## Current Route Inventory

Paths below are relative to this directory.

| File | Public URL | Responsibility |
| --- | --- | --- |
| `__root.tsx` | All pages | Document shell, shared navigation and footer, query provider and error screens. |
| `index.tsx` | `/` | Portfolio introduction and overview. |
| `about.tsx` | `/about` | Background, skills, tools and operating-system preferences. |
| `services.tsx` | `/services` | Development services. |
| `testimonials.tsx` | `/testimonials` | Three featured projects and external repository links; navigation label is Work. |
| `blog.tsx` | `/blog` parent | Structural parent that renders `Outlet`, not a separate article listing. |
| `blog.index.tsx` | `/blog` | Blog listing; route declaration is `/blog/`. |
| `blog.linux-macos-windows-vms.tsx` | `/blog/linux-macos-windows-vms` | Full operating-system article. |
| `faq.tsx` | `/faq` | Expandable questions and answers. |
| `contact.tsx` | `/contact` | External profiles and support wallet addresses. |
| `privacy.tsx` | `/privacy` | Privacy information. |
| `terms.tsx` | `/terms` | Website terms. |

The two blog files associated with `/blog` have different jobs: the parent provides the nesting boundary, while the index child provides the visible listing. They are not competing home pages.

## Shared Shell and Router

`src/routes/__root.tsx` defines the root route and provides:

- An HTML document with `lang="en"`.
- `HeadContent` for route metadata and `Scripts` for application scripts.
- Global stylesheet and favicon links.
- Shared `Header` and `Footer` components.
- A `QueryClientProvider` using the client from route context.
- A main content region containing `Outlet`.
- Custom error and not-found components.

Preserve `Outlet`: child pages cannot render without it. Every parent route that has children must also render an `Outlet`.

`src/router.tsx` creates a query client for each router instance and supplies it through router context. Scroll restoration is enabled. Do not replace this setup with a global page switcher or manually maintained route table.

## File Naming Conventions

The examples in this table describe supported patterns. Only the routes in the inventory above are currently implemented.

| Pattern | Example URL or behavior | Notes |
| --- | --- | --- |
| `index.tsx` | `/` | Root index page. |
| `about.tsx` | `/about` | Simple content page. |
| `blog.index.tsx` | `/blog` | Index child of `blog.tsx`. |
| `blog.article.tsx` | `/blog/article` | Child route using dot-separated file names. |
| `users/index.tsx` | `/users` | Directory-based index pattern. |
| `users/$id.tsx` | `/users/:id` | Required dynamic segment; use a bare `$` in the file name. |
| `posts/{-$category}.tsx` | `/posts/:category?` | Optional segment. |
| `files/$.tsx` | `/files/*` | Catch-all segment; read its value through `_splat`. |
| `_layout.tsx` | No extra URL segment | Pathless layout that must render its children through `Outlet`. |
| `__root.tsx` | All routes | The application's root shell. |

Allow the generator to update route types after adding or renaming files. Do not edit `src/routeTree.gen.ts` or suppress missing-route errors with type casts.

## Blog Structure

The blog uses these boundaries:

```text
__root.tsx
└── blog.tsx                         Parent: renders Outlet
    ├── blog.index.tsx               Listing at /blog
    └── blog.linux-macos-windows-vms.tsx
                                    Article at /blog/linux-macos-windows-vms
```

`src/content/linux-article.ts` exports browser-safe structured content as `ARTICLE`. The listing uses its title and description. The article route renders ordered blocks with semantic paragraphs, headings and lists. This separation keeps the supplied text in one place without adding a Markdown runtime.

The parent has no independent visible content. The listing and article each have their own `head()` metadata. The article's Open Graph type is `article`.

The owner has approved one blog article only. Do not add placeholder posts or automatically generated articles. If the scope changes later, obtain approved content before adding another article route.

## Adding or Changing a Page

### Create the Route

Create a route file in this directory and export `Route`. Keep its declared path consistent with its file name. Give the page a meaningful heading and app-specific metadata.

For example, if a new `/example` page has been approved, `src/routes/example.tsx` would follow this pattern:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/example")({
  head: () => meta("Example", "An accurate summary of this portfolio page."),
  component: ExamplePage,
});

function ExamplePage() {
  return (
    <>
      <PageHero eyebrow="Example" title="Example page" />
      <Section>
        <p>Approved page content goes here.</p>
      </Section>
    </>
  );
}
```

This is an illustrative example, not an existing page or a request to add one. Create dependencies before importing them. If the new page is a parent layout, include `Outlet` to render its children.

### Connect Navigation

Use `Link` from `@tanstack/react-router` for internal page navigation. Use ordinary anchors for external destinations. For external links that open a new tab, retain appropriate `rel` protection, such as `noreferrer`.

The main navigation is defined by `NAV` in `src/components/site.tsx`. Footer links are maintained in the same module. Add the destination route in the same change as any new internal link.

Use hash anchors only to move to a section within the same page. A distinct content page should have a distinct route file. Keep link labels concise and understandable without relying on an arrow icon alone.

### Update Search Information

For a new public page:

1. Add a unique `head()` using the shared `meta` helper.
2. Add the published URL to `public/sitemap.xml`.
3. Check that `public/robots.txt` still points to the correct sitemap.
4. Update this guide's route inventory and the project README's page table.
5. Verify metadata on a direct page load, not only after client navigation.

Do not list draft, nonexistent or private URLs in the public sitemap.

### Rename or Remove a Route

Before changing an established URL, find all internal links, sitemap entries, metadata references, tests and documentation that use it. Update them together.

If an old URL must keep working, implement and verify an appropriate redirect. Do not assume that renaming a file creates one automatically. Check both the old and new addresses after deployment.

When removing a route, remove or replace links to it and let the generator rebuild the route tree. Do not leave a navigation item pointing to a page-not-found screen.

## Page Metadata

The shared `meta(title, description)` helper in `src/components/site.tsx` returns:

- A document title containing the page title and portfolio owner's name.
- A description.
- Matching Open Graph title and description.
- Open Graph type `website` by default.
- Twitter card type `summary`.

Each content route needs its own `head()`; global root metadata is not a replacement. The structural blog parent can omit content metadata because its visible index and article children provide it.

Descriptions should accurately summarize the visible page. Avoid copied titles, vague template wording, invented outcomes or keyword lists. If a meaningful cover image is displayed using an absolute HTTPS URL, use that same URL for both `og:image` and `twitter:image` in the content route's metadata. Do not use relative bundled paths or placeholder images for those tags. The current pages do not declare social-image tags.

Canonical tags are not currently implemented. If adding them, use the approved public domain and the actual content URL; do not point crawlers to a temporary preview address.

## Content and Shared Components

| Source | Content or behavior maintained there |
| --- | --- |
| `src/components/site.tsx` | Shared navigation, footer, metadata, profile URLs, wallet addresses and portfolio display elements. |
| `src/components/ui/` | Reusable controls and interface primitives. |
| `src/routes/index.tsx` | Home-page technology stack and introductory sections. |
| `src/routes/about.tsx` | Skill and background groups. |
| `src/routes/services.tsx` | Service descriptions. |
| `src/routes/testimonials.tsx` | Featured project summaries and repository links. |
| `src/routes/contact.tsx` | Visible profile names and contact layout. |
| `src/routes/faq.tsx` | Questions and answers. |
| `src/content/linux-article.ts` | Full supplied article, title and description. |
| `src/styles.css` | Semantic design tokens, global styles and motion preferences. |

Read the current file before changing it. Keep shared values in their existing shared location rather than copying profile URLs or wallet addresses into multiple pages. Check address changes with the owner; public wallet addresses are not secret keys, but accuracy is essential.

Use existing design components for controls. Keep page sections unframed unless their content genuinely needs a framed tool or repeated item. Preserve the current design rather than introducing an unrelated visual system during a content change.

## Data Loading and Runtime Boundaries

The current portfolio reads local source content and does not define custom business data loaders, account-protected pages or API endpoints.

If future approved work introduces remote data, follow TanStack Start's loading model and the hosting runtime requirements. Prefer a route loader that ensures query data and a component that reads it with a suspense query. Do not add ad hoc effect-based fetching as the default page-loading pattern.

Server rendering evaluates module imports. A rendering guard does not make a browser-only import safe. Load browser-only libraries dynamically after hydration and keep shared data in browser-safe modules. Read render-visible browser storage after hydration to avoid server/client markup differences.

Keep private credentials and privileged clients out of browser bundles. Future authenticated or public server endpoints require explicit access controls; neither a URL prefix nor cross-site request protection proves a caller is authorized. The production server target is not a general Node.js runtime, so check compatibility before using Node-specific server APIs.

No server functionality needs to be added for an ordinary text or presentation update.

## Error and Not-Found Handling

The root route provides a custom not-found screen with links back home and to Contact. It also provides an error screen with retry and home actions. The root error handler reports errors through the existing reporting utility.

Request middleware in `src/start.ts` handles unexpected request failures, while `src/server.ts` normalizes certain catastrophic server-rendering responses. Preserve these boundaries rather than replacing them with page-specific stack traces.

When a page fails, identify whether the cause is a missing route, a rendering failure or a request failure. Fix the underlying cause and repeat the failing user flow. Do not hide errors with broad fallbacks that make a broken page appear successful.

## Accessibility and Mobile Layout

- Keep a clear page heading and logically ordered subheadings.
- Preserve the root document language, main content region and named navigation.
- Make link labels and controls understandable to assistive technology.
- Keep decorative icons hidden from assistive technology when adjacent text already conveys their meaning.
- Maintain visible keyboard focus and reduced-motion behavior.
- Allow long profile handles, titles and wallet addresses to wrap.
- Keep FAQ question text flexible and its expansion icon from shrinking into the text.
- Check navigation, content and controls at narrow phone widths as well as desktop widths.

The current navigation wraps on small screens. Avoid restoring a fixed-width header that clips items. Do not infer accessibility certification from the presence of semantic elements alone; keyboard and assistive-technology review remain necessary.

## Testing and Review

Run tests from the project root, not this directory:

```sh
bun run test
```

For the existing routing test only:

```sh
bunx vitest run src/test/app-routing.test.tsx
```

The current test checks home-route matching without running loaders or rendering. It does not establish that every page works. Add focused route or behavior tests when introducing new logic.

Manually verify the changed route with real visible content. Open it directly, reach it from navigation and use the browser's back action. For a nested page, confirm both the parent index and the child render. Inspect metadata, console errors, mobile wrapping and keyboard access.

In Lovable, builds run automatically after edits. Check the latest result rather than assuming that a saved file compiled successfully. In a standalone checkout, use the documented commands in the project README.

## Troubleshooting

| Symptom | Check | Corrective action |
| --- | --- | --- |
| Missing path in route types. | Does the destination file exist with the correct name? | Create or rename the route and allow generation to run; do not cast away the error. |
| Two pages claim `/`. | Is there an extra index under an unintended layout? | Keep `src/routes/index.tsx` as the root index and remove the conflicting claimant. |
| Blog listing appears where the article should be. | Does the parent render `Outlet`, and is the article file correctly named? | Restore nesting and verify both direct URLs. |
| Child content is blank. | Does its parent render `Outlet`? | Restore the outlet before debugging the child's content. |
| Metadata is missing or duplicated. | Does the leaf content route define a unique `head()`? | Use the shared helper on the visible content route and inspect the resulting document head. |
| A library fails during server rendering. | Does it access browser globals during import? | Move shared data out and dynamically load browser-only code after hydration. |
| Phone layout overflows. | Are long words or fixed widths preventing wrapping? | Fix the affected constraints and retest the entire page. |
| An old URL stops working after a rename. | Was a redirect implemented? | Restore compatibility if required and test both URL paths. |

## Maintenance Checklist

Before marking a route change complete:

- [ ] The route file and declared path agree.
- [ ] Every referenced internal destination exists.
- [ ] Parent layouts retain `Outlet`.
- [ ] No generated route file was edited manually.
- [ ] Visible copy is accurate and approved.
- [ ] The content route has unique title, description and social metadata.
- [ ] Sitemap and documentation reflect any public URL change.
- [ ] Relevant tests pass.
- [ ] Direct loading and navigation work.
- [ ] Phone and desktop layouts remain legible without horizontal overflow.
- [ ] Keyboard controls and focus remain usable.
- [ ] The latest build result and relevant error signals have been checked.
- [ ] Publication status is reported accurately; preview changes are not described as live unless published.

## Reference Documentation

- [Project README](../../README.md)
- [Project maintenance rules](../../AGENTS.md)
- [TanStack Router: file-based routing](https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing)
- [TanStack Router documentation](https://tanstack.com/router/latest/docs/framework/react/overview)
- [TanStack Start documentation](https://tanstack.com/start/latest/docs/framework/react/overview)
- [Lovable documentation](https://docs.lovable.dev/)

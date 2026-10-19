<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Content pages use the shared `meta` helper for unique title, description and social metadata; keep metadata aligned with visible content.
- Blog listing and articles use nested TanStack file routes with an Outlet in the parent, so articles have independent URLs and search metadata.
- The supplied article is stored as browser-safe structured content and rendered with semantic headings and lists, preserving the author's text without runtime Markdown dependencies.
- Shared surface transitions, control hover colors and shadows are defined as semantic tokens in src/styles.css so palette changes remain consistent across pages.

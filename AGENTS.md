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

# Project guidelines

- Portfolio content (name, contact links, projects, skills) lives in `src/lib/portfolio.ts` and both themes read from it, so a content change appears everywhere at once — never duplicate project data inside a route file.
- Themes are token scopes, not separate stylesheets: the default `:root` palette is the Graphite theme and `.theme-neo` on a page wrapper switches the same semantic utilities to the Studio palette. Add new colors as tokens in `src/styles.css`, never as hardcoded color classes in components.
- Project images are Lovable assets referenced through `src/assets/*.asset.json` pointers; import the pointer and use its `url`. Do not commit the image binaries into the project.

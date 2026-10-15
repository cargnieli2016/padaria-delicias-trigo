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

## Application structure
- Use TanStack content routes for home, about, products, gallery, and contact with a shared bakery shell; distinct URLs keep navigation and metadata meaningful.
- Keep business contact data in a browser-safe shared module consumed by contact sections and tested independently; this avoids inconsistent practical information.
- Use bundled illustrative photography, explicitly identified as illustrative in the gallery until real bakery photos are provided.

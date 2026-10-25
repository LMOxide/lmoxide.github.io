# LMOxide website

The project site for [LMOxide](https://github.com/LMOxide/lmoxide), a LEGO Minifigures Online
server in Rust: what it is, what works, how the pieces fit together, and how to start. A static
[Astro](https://astro.build) site, deployed to GitHub Pages on every push to `main`.

## Editing features

The feature cards come from [`src/data/features.yaml`](src/data/features.yaml), shown in file
order:

```yaml
- id: worlds                       # unique; the card's anchor is #feature-worlds
  title: The worlds are back
  category: game                   # game | server | webui | patcher | tooling
  description: >-
    LEGO Center, the starting worlds and every dungeon load with their enemies.
  image: ./images/enchanted-forest.jpg   # relative to the YAML file
  alt: A minifigure on the icy cliffs of the Enchanted Forest
  wide: true                       # optional: spans two columns
  link:                            # optional
    label: Protocol notes
    href: https://github.com/LMOxide/lmoxide/blob/main/docs/PROTOCOL.md
```

Put images in `src/data/images/`. Astro resizes them and converts them to WebP at build time, so
full-size screenshots are fine. A missing image or an unknown category fails the build.

Other text: links in [`src/data/site.ts`](src/data/site.ts), sections in `src/components/`.

## Developing

Needs Node 22+ and pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type-check, then the static site in dist/
pnpm preview    # serve dist/
```

## Deploying

`.github/workflows/deploy.yml` builds and publishes the site. Turn it on once in the repository's
**Settings → Pages → Source: GitHub Actions**. The workflow reads the site's URL and base path
from the Pages settings, so it works for both `<owner>.github.io` and a project site served from
`/<repo>/`.

## Credits

Game screenshots are from LMOxide test sessions. LEGO and LEGO Minifigures are trademarks of the
LEGO Group; this is a fan project, not affiliated with or endorsed by the LEGO Group or Funcom.

# exquz3.me

A small static portfolio inspired by the nlobby4 Cloudflare error pages: near-black background, Raleway typography, monospace labels, and a white identity tile.

## Preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## GitHub Pages

Push these files to `main`. In the repository's **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, and save. No build step is required. All asset paths are relative, so the page works at either a GitHub Pages project URL or a custom domain.

To use `exquz3.me` as a custom domain, configure it in GitHub Pages and set the domain's DNS accordingly. This repository does not set a custom domain automatically.

## Customize

Edit the personal description below the main headline, project cards, and profile links in `index.html`. Change the design in `styles.css`. The page has no JavaScript or external asset dependencies. GitHub and npm links appear in the top bar; YouTube, Discord, Flockmod, and Steam appear in Elsewhere. The white identity tile is decorative.

The sphoon and nlobby4 cards display `assets/sphoon-banner.png` and `assets/nlobby4-banner.png` over `assets/project-placeholder.svg`, which remains beneath them while the banners load. Update each banner's `src`, `alt`, `width`, and `height` in `index.html` to replace it. Banners load lazily. Cards reserve a 16:9 preview area to avoid layout shifts, appear side by side on desktop, and stack on mobile.

The portfolio also links to the [nlobby4 GitHub organization](https://github.com/nlobby4) and lists the existing profile redirects:

| Profile | Short URL |
| --- | --- |
| YouTube | https://exquz3.me/youtube |
| Discord | https://exquz3.me/discord |
| Flockmod | https://exquz3.me/flockmod |
| Steam | https://exquz3.me/steam |
| GitHub | https://exquz3.me/github |
| npm | https://exquz3.me/npm |

These redirects are managed separately. The portfolio uses absolute links to them, so they work from both a GitHub Pages project URL and the custom domain.

Raleway font files were extracted from the supplied reference pages and are distributed under the included [SIL Open Font License](assets/Raleway-OFL.txt).

## Crawlers and security reports

`robots.txt` allows all crawlers. Security contact information is published at `/.well-known/security.txt`, following [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116.html). The existing `.nojekyll` file allows GitHub Pages to serve the `.well-known` directory.

The security contact points to this repository's public GitHub issues. Keep issues enabled, or replace `Contact` with your preferred reporting address (for example, a monitored `mailto:` address for private reports). Renew the `Expires` value before October 1, 2027, and update the `Canonical` URL if you host on a different domain.

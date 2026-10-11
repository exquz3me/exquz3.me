# exquz3.me

A small static portfolio

`styles.css` is the stylesheet source. After editing it, run
`python3 scripts/build.py` to refresh the embedded CSS in `index.html`.
Embedding this small stylesheet avoids a render-blocking network request.

The project banners use responsive WebP sizes, generated from the original
PNG files. To rebuild them and the embedded CSS, run
`python3 scripts/build.py --images` (requires Pillow). The browser selects
the image size for the layout and screen density; PNGs remain as fallbacks.

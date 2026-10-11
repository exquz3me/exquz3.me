#!/usr/bin/env python3
"""Embed the stylesheet; optionally regenerate responsive banner assets."""

import argparse
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
WIDTHS = (240, 320, 480, 640, 800, 960)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--images', action='store_true', help='Rebuild WebP banners (requires Pillow).')
    args = parser.parse_args()

    if args.images:
        from PIL import Image

        for name in ('sphoon', 'nlobby4'):
            with Image.open(ROOT / 'assets' / f'{name}-banner.png') as image:
                for width in WIDTHS:
                    height = round(image.height * width / image.width)
                    resized = image.resize((width, height), Image.Resampling.LANCZOS)
                    resized.save(ROOT / 'assets' / f'{name}-banner-{width}.webp',
                                 format='WEBP', quality=90, method=6)

    html_path = ROOT / 'index.html'
    html = html_path.read_text()
    css = (ROOT / 'styles.css').read_text().rstrip()
    style = '<style id="page-styles">\n' + css + '\n    </style>'
    pattern = r'<style id="page-styles">.*?</style>|<link rel="stylesheet" href="styles\.css">'
    html, count = re.subn(pattern, lambda _: style, html, flags=re.DOTALL)
    if count != 1:
        raise SystemExit(f'Expected one page stylesheet, found {count}.')
    html_path.write_text(html)


if __name__ == '__main__':
    main()

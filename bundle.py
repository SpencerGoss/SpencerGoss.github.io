#!/usr/bin/env python3
"""Bundle the Vite build into a single-file portfolio.html deliverable.

Reads dist/index.html (which already contains the full <head> — title, meta
description, Open Graph / Twitter tags, favicon — straight from index.html)
and inlines the referenced CSS/JS so the result is one self-contained file.

Bundling FROM dist/index.html (instead of a hardcoded HTML template) means any
meta tag added to index.html automatically lands in the deliverable. No drift.

Usage:  npx vite build  &&  python bundle.py
"""
import os
import re

DIST = "dist"
ASSETS = os.path.join(DIST, "assets")

# Font preconnect + stylesheet. Fonts also load via @import inside the bundled
# CSS, so this is purely the preconnect perf hint + an explicit fallback link.
FONT_LINKS = (
    '<link rel="preconnect" href="https://fonts.googleapis.com" />'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />'
    '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:'
    "wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&"
    'display=swap" rel="stylesheet" />'
)


def read(path: str) -> str:
    with open(path, encoding="utf-8") as f:
        return f.read()


def main() -> None:
    html = read(os.path.join(DIST, "index.html"))

    css_file = next(f for f in os.listdir(ASSETS) if f.endswith(".css"))
    js_file = next(f for f in os.listdir(ASSETS) if f.endswith(".js"))
    css = read(os.path.join(ASSETS, css_file))
    js = read(os.path.join(ASSETS, js_file))

    # Inline the stylesheet link as a <style> block. Function replacements
    # avoid re.sub treating backslashes in css/js as group references.
    html, n_css = re.subn(
        r'<link rel="stylesheet"[^>]*href="/assets/[^"]+\.css"[^>]*>',
        lambda _: "<style>" + css + "</style>",
        html,
    )
    # Remove the module <script> from <head>. We re-add it as an inline script
    # at the END of <body> below — a plain inline script is NOT deferred like
    # type="module", so running it in <head> would execute before #root exists
    # (React error #299). Escape any literal </script> in the JS first.
    safe_js = js.replace("</script>", "<\\/script>")
    html, n_js = re.subn(
        r'<script type="module"[^>]*src="/assets/[^"]+\.js"[^>]*></script>\s*',
        lambda _: "",
        html,
    )

    if n_css != 1 or n_js != 1:
        raise SystemExit(
            f"Expected exactly 1 css + 1 js asset link, got css={n_css} js={n_js}. "
            "Did the Vite output shape change?"
        )

    # Inline the app script at the end of <body>, after #root has been parsed.
    html = html.replace("</body>", "<script>" + safe_js + "</script></body>", 1)

    # Add font preconnect hints if not already present (the CSS @import is now
    # inside <style>, so match on rel="preconnect" which only appears in links).
    if 'rel="preconnect"' not in html:
        html = html.replace("</head>", FONT_LINKS + "</head>", 1)

    with open("portfolio.html", "w", encoding="utf-8") as f:
        f.write(html)

    print(f"portfolio.html written ({len(html):,} bytes) from {js_file} + {css_file}")


if __name__ == "__main__":
    main()

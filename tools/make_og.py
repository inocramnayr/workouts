# Gera assets/og-image.png (1200x630): imagem da prévia do link (WhatsApp, iMessage etc.)
# Só formas, sem texto, para sair igual em qualquer computador. Requer Pillow (pip install pillow).
import sys
from PIL import Image, ImageDraw, ImageFilter

S = 2                       # desenha em 2x e reduz no fim, para bordas suaves
W, H = 1200 * S, 630 * S
out = sys.argv[1] if len(sys.argv) > 1 else "assets/og-image.png"

def lerp(a, b, t): return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))

# Fundo: degradê azul, do claro (canto superior esquerdo) ao azul do app
img = Image.new("RGB", (W, H))
top, bottom = (61, 155, 255), (0, 102, 230)
px = img.load()
for y in range(H):
    for x in range(0, W, 4):
        c = lerp(top, bottom, min(1, (x / W) * 0.35 + (y / H) * 0.65))
        for k in range(4):
            if x + k < W: px[x + k, y] = c

# Cartão branco no centro, como a lista do app
cw, ch = 660 * S, 430 * S
cx, cy = (W - cw) // 2, (H - ch) // 2
shadow = Image.new("L", (W, H), 0)
ImageDraw.Draw(shadow).rounded_rectangle([cx, cy + 18 * S, cx + cw, cy + ch + 18 * S], 40 * S, fill=90)
shadow = shadow.filter(ImageFilter.GaussianBlur(28 * S))
img.paste(Image.new("RGB", (W, H), (0, 40, 110)), (0, 0), shadow)
d = ImageDraw.Draw(img)
d.rounded_rectangle([cx, cy, cx + cw, cy + ch], 40 * S, fill=(255, 255, 255))

BLUE_T, BLUE_B = (46, 145, 255), (0, 122, 255)
def tile(x, y, size, glyph):
    t = Image.new("RGB", (size, size))
    tp = t.load()
    for j in range(size):
        c = lerp(BLUE_T, BLUE_B, j / size)
        for i in range(size): tp[i, j] = c
    m = Image.new("L", (size, size), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size - 1, size - 1], int(size * 0.23), fill=255)
    img.paste(t, (x, y), m)
    g = ImageDraw.Draw(img)
    u = size / 24          # mesmas proporções dos ícones de 24x24 do app
    X = lambda v: x + v * u
    Y = lambda v: y + v * u
    wht = (255, 255, 255)
    if glyph == "dumbbell":
        for a, b, c2, e in [(3.4, 9.6, 5.4, 14.4), (6.2, 7.2, 8.6, 16.8), (15.4, 7.2, 17.8, 16.8), (18.6, 9.6, 20.6, 14.4)]:
            g.rounded_rectangle([X(a), Y(b), X(c2), Y(e)], 0.9 * u, fill=wht)
        g.rectangle([X(8.6), Y(11.2), X(15.4), Y(12.8)], fill=wht)
    elif glyph == "stack":
        g.rectangle([X(11.2), Y(2.2), X(12.8), Y(5)], fill=wht)
        for yy in (5.2, 9.6, 14.0, 18.4):
            g.rounded_rectangle([X(6), Y(yy), X(18), Y(yy + 2.6)], 0.9 * u, fill=wht)
    elif glyph == "pulley":
        g.ellipse([X(5), Y(3), X(14), Y(12)], outline=wht, width=round(1.8 * u))
        g.ellipse([X(8.6), Y(6.6), X(10.4), Y(8.4)], fill=wht)
        g.rectangle([X(13.2), Y(7.5), X(15), Y(17)], fill=wht)
        g.rounded_rectangle([X(10.4), Y(18.6), X(17.8), Y(20.4)], 0.9 * u, fill=wht)

rows = [("stack", 0.62, 0.40), ("dumbbell", 0.78, 0.34), ("pulley", 0.55, 0.44)]
rh = ch // 3
for i, (glyph, w1, w2) in enumerate(rows):
    ry = cy + i * rh
    ts = 92 * S
    tx, ty = cx + 40 * S, ry + (rh - ts) // 2
    tile(tx, ty, ts, glyph)
    lx = tx + ts + 32 * S
    avail = cx + cw - 90 * S - lx
    d.rounded_rectangle([lx, ty + 16 * S, lx + int(avail * w1), ty + 40 * S], 12 * S, fill=(44, 44, 46))
    d.rounded_rectangle([lx, ty + 56 * S, lx + int(avail * w2), ty + 76 * S], 10 * S, fill=(199, 199, 204))
    ax, ay = cx + cw - 52 * S, ry + rh // 2      # seta ">"
    d.line([(ax - 9 * S, ay - 16 * S), (ax + 7 * S, ay), (ax - 9 * S, ay + 16 * S)], fill=(196, 196, 199), width=6 * S, joint="curve")
    if i < 2:
        d.rectangle([lx, ry + rh - 1 * S, cx + cw, ry + rh + 1 * S], fill=(226, 226, 230))

img.resize((1200, 630), Image.LANCZOS).save(out, optimize=True)
print("ok:", out)

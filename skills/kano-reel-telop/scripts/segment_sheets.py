import sys, subprocess, numpy as np, cv2, json
src, outdir = sys.argv[1], sys.argv[2]
ch = [float(x) for x in sys.argv[3].split()]
# 連続した変化をまとめて「切り替わり」にする
cl = []
for t in ch:
    if cl and t - cl[-1][1] <= 0.05: cl[-1][1] = t
    else: cl.append([t, t])
# 変化が始まった時刻で区切る（直前の字幕が消える瞬間）。0.3秒未満の区間は次とまとめる
starts = [0.0] + [c[0] - 0.03 for c in cl if c[0] > 0.4]
merged = []
for t in starts:
    if merged and t - merged[-1] < 0.3: continue
    merged.append(t)
ends = merged[1:] + [51.15]
segs = [(round(a, 2), round(b, 2)) for a, b in zip(merged, ends)]
json.dump(segs, open(f'{outdir}/segs.json', 'w'))
tiles = []
for i, (a, b) in enumerate(segs):
    t = min(b - 0.05, a + max(0.35, (b - a) * 0.6))
    raw = subprocess.check_output(['ffmpeg','-loglevel','error','-ss',f'{t:.2f}','-i',src,'-frames:v','1','-f','rawvideo','-pix_fmt','bgr24','-'])
    f = np.frombuffer(raw, np.uint8).reshape(720, 406, 3).copy()
    for x in range(0, 406, 50): cv2.line(f, (x, 0), (x, 719), (0, 255, 255) if x % 100 == 0 else (0, 160, 160), 1)
    for y in range(0, 720, 50): cv2.line(f, (0, y), (405, y), (0, 255, 255) if y % 100 == 0 else (0, 160, 160), 1)
    for x in range(0, 406, 100): cv2.putText(f, str(x), (x + 2, 712), cv2.FONT_HERSHEY_SIMPLEX, 0.4, (0, 0, 255), 1)
    for y in range(100, 720, 100): cv2.putText(f, str(y), (2, y - 3), cv2.FONT_HERSHEY_SIMPLEX, 0.4, (0, 0, 255), 1)
    cv2.rectangle(f, (0, 0), (405, 22), (0, 0, 0), -1)
    cv2.putText(f, f'#{i} {a:.2f}-{b:.2f}', (4, 16), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (255, 255, 255), 1)
    tiles.append(f)
per = 6
for s in range(0, len(tiles), per):
    row = tiles[s:s + per]
    while len(row) < per: row.append(np.zeros_like(tiles[0]))
    cv2.imwrite(f'{outdir}/sheet{s // per}.png', np.hstack(row))
print(len(segs))

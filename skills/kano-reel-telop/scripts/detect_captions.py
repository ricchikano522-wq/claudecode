"""焼き込み字幕の切り替わり時刻と位置を測る。
使い方: python3 -I detect_captions.py <動画> [帯の上端px] [帯の下端px]
  帯 = 字幕が出る高さの範囲（元動画のpx）。省略時は高さの37%〜64%。
出力:
  CHG <秒> ... 字幕（または場面）が切り替わった時刻
  BB  <秒> x<左>-<右> y<上>-<下> ... 0.5秒ごとの白文字の範囲（元動画px）
"""
import json, subprocess, sys
import numpy as np

src = sys.argv[1]
info = json.loads(subprocess.check_output(['ffprobe', '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height,r_frame_rate', '-of', 'json', src]))['streams'][0]
W, H = info['width'], info['height']
num, den = map(int, info['r_frame_rate'].split('/')); fps = num / den
y0 = int(sys.argv[2]) if len(sys.argv) > 2 else int(H * 0.37)
y1 = int(sys.argv[3]) if len(sys.argv) > 3 else int(H * 0.64)
p = subprocess.Popen(['ffmpeg', '-loglevel', 'error', '-i', src, '-vf', f'crop={W}:{y1-y0}:0:{y0}',
                      '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], stdout=subprocess.PIPE)
size = W * (y1 - y0) * 3; prev = None; i = 0
step = max(1, round(fps / 2))
while True:
    b = p.stdout.read(size)
    if len(b) < size: break
    a = np.frombuffer(b, np.uint8).reshape(y1 - y0, W, 3).astype(int)
    m = (a.min(2) > 232) & ((a.max(2) - a.min(2)) < 18)  # 白っぽい文字
    t = i / fps
    if prev is not None:
        d = (m ^ prev).sum() / max(1, (m | prev).sum())
        if d > 0.5 and m.sum() > 300: print(f'CHG {t:.2f}')
    if i % step == 0:
        rows = np.where(m.sum(1) > 3)[0]; cols = np.where(m.sum(0) > 2)[0]
        if len(rows): print(f'BB {t:.1f} x{int(cols.min())}-{int(cols.max())} y{int(rows.min())+y0}-{int(rows.max())+y0}')
    prev = m; i += 1

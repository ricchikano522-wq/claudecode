#!/usr/bin/env bash
# 字幕の帯だけを0.5秒ごとに切り出して、15秒ごとの一覧画像にする（字幕の読み取り用）
# 使い方: contact_sheets.sh <動画> <出力フォルダ> [帯の上端px] [帯の高さpx]
set -e
V="$1"; OUT="$2"; mkdir -p "$OUT"
W=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$V")
H=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$V")
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$V")
TOP=${3:-$((H*30/100))}; BH=${4:-$((H*35/100))}
ffmpeg -loglevel error -y -i "$V" -vf "fps=12/$D,scale=270:-2,tile=6x2" -frames:v 1 "$OUT/overview.png"
n=0; st=0
while python3 -c "import sys; sys.exit(0 if $st < $D else 1)"; do
  ffmpeg -loglevel error -y -ss $st -t 15 -i "$V" -vf "fps=2,crop=$W:$BH:0:$TOP,scale=394:-2" -frames:v 30 -f image2pipe -vcodec png - \
    | ffmpeg -loglevel error -y -f image2pipe -i - -vf "tile=3x10" -frames:v 1 "$OUT/cap$n.png"
  n=$((n+1)); st=$((st+15))
done
echo "一覧: $OUT/overview.png と cap0.png〜（1枚=15秒・左上から0.5秒刻み・3列）"

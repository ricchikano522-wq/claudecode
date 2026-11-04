#!/usr/bin/env bash
# テロップ層を並列で書き出し、元動画に重ねて書き出す
# 使い方: build.sh <元動画> <作業フォルダ(template.html と timeline.js がある)> <出力mp4> [再生速度 例:0.9]
set -e
V="$1"; WORK="$2"; OUTMP4="$3"; SPEED="${4:-1}"
HERE="$(cd "$(dirname "$0")" && pwd)"
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$V")
N=$(python3 -c "import math;print(math.ceil($D*30))")
FR="$WORK/frames"; mkdir -p "$FR"
P=4; CH=$(( (N + P - 1) / P ))
for k in $(seq 0 $((P-1))); do
  node "$HERE/render_overlay.js" "$WORK/template.html" "$FR" $((k*CH)) $(( (k+1)*CH < N ? (k+1)*CH : N )) &
done; wait
VF="[0:v]scale=1080:1920,setsar=1[v];[v][1:v]overlay=eof_action=pass"
AF="anull"
if [ "$SPEED" != "1" ]; then VF="$VF,setpts=PTS/$SPEED,fps=30"; AF="atempo=$SPEED"; fi
ffmpeg -loglevel error -y -i "$V" -framerate 30 -i "$FR/o%04d.png" \
  -filter_complex "$VF,format=yuv420p[vo];[0:a]$AF[ao]" -map "[vo]" -map "[ao]" \
  -c:v libx264 -crf 19 -preset medium -c:a aac -b:a 192k -movflags +faststart "$OUTMP4"
echo "完成: $OUTMP4 ($(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUTMP4")秒)"

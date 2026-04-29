---
name: character-illustration
description: デザイン学習サイトのマスコットキャラクター（クリーム色のチワックスが2足歩行で立っているイラスト）を、指定の手描き・水彩・ノイズ調スタイルで生成するためのスキル。ユーザーが「マスコット」「キャラクター」「イラスト生成」「チワックス」などについて言及した時、または新しいポーズ・表情・シーンのバリエーションを依頼された時に使用する。
---

# Character Illustration Skill

デザイン学習サイトのマスコットキャラクター（クリーム色のチワックス／チワワ×ダックスフンドMIX）の公式イラストを、一貫したアートスタイルで生成するためのスキル。

## いつ使うか

以下のような依頼があった時にこのスキルを呼び出す:
- 「マスコットキャラクターのイラストを作って」
- 「チワックスの新しいポーズを生成して」
- 「学習サイト用のキャラを作って」
- 既存キャラの新しいシーン/表情/小物バリエーションを依頼された時

## 何をするか

ユーザーの依頼内容に応じて、以下のいずれかを生成する:

1. **画像生成プロンプト** (Midjourney / DALL·E / Stable Diffusion / nano-banana 等で使える文字列)
2. **SVGコード** (Webサイトに直接埋め込めるベクター実装)

デフォルトは1。ユーザーが「Web用」「コードで」「SVGで」と言った場合は2を生成する。

## キャラクター仕様

### モデル犬（必ず守る特徴）

| 項目 | 内容 |
|------|------|
| 犬種 | チワックス（チワワ × ミニチュアダックスフンド） |
| 毛色 | クリーム色（やや黄みのオフホワイト、`#F5E6C8` 〜 `#EFD9A8` 付近） |
| 毛質 | やや長毛・ふわふわ・耳と胸まわりに飾り毛 |
| 顔 | 細長めだがダックスほど長くない。鼻先はやや尖るが小さく丸い |
| 耳 | 垂れ耳・三角・長めの飾り毛、毛が外にハネる |
| 目 | 黒の点（小さめのドット）。ハイライトは入れない |
| 鼻 | 小さい黒い丸。`#1F1A17`系の濃いブラウンブラック |
| 体型 | 胴がやや長め・脚は短め。チワワ寄りの華奢さ |

### ポーズ（デフォルト）

- **2足歩行・直立**
- 前足（手）はおなかの前で軽く垂らす or 軽く広げる
- 後ろ足はまっすぐ立ち、左右どちらかにわずかに体重をかけてもよい
- 正面 or やや3/4向き
- 表情はにこやか / 興味津々 / きょとん のいずれか

ユーザーが別のポーズを指定した場合はそれに従う（座る・走る・ものを持つ等）。

## アートスタイル仕様

| 要素 | 指定 |
|------|------|
| タッチ | 手描き・水彩・ノイズあり（紙のテクスチャが透ける感じ） |
| 線 | 太め・**真っ黒は使わない**。`#2A2422`〜`#3A2E26`の濃いダークブラウン推奨。線は連続でなく、わずかにかすれ・ドット状に途切れた点線風 |
| 塗り | 原色を避け、**少し落ち着いた柔らかい色味だが彩度ははっきり**残す。水彩のようににじみとムラを残す |
| ノイズ | 全体に粒状/織物テクスチャを薄く重ねる（キャンバス風） |
| 目 | 小さな黒い点（ドット）のみ |
| 鼻 | 小さい黒い丸 |
| 影/グラデ | 使わない（フラットな塗りのみ） |
| 背景 | デフォルトは白〜オフホワイト。シーンによって淡いパステル背景＋格子等の模様を入れてもよい |

### カラーパレット（参考）

| 用途 | カラー |
|------|--------|
| 主毛色（クリーム） | `#F2E2BD` |
| 影・差し色（ライトブラウン） | `#C68A5C` |
| 線色 | `#2C2420` |
| 鼻・目 | `#1F1A17` |
| 背景アクセント（コーラル） | `#F2A98A` |
| 背景アクセント（ブルー） | `#A8D0E6` |
| 背景ベース（オフホワイト） | `#FAF6EE` |

## 画像生成プロンプトのテンプレート

以下の英語プロンプトをベースに、ユーザーの追加要望をマージする。

```
A cute mascot illustration of a cream-colored Chiweenie (Chihuahua × Dachshund mix) standing upright on two legs, front-facing, friendly expression, hand-drawn watercolor style with visible canvas/paper noise texture, thick dark-brown hand-drawn outlines (NOT pure black, dotted/dashed line quality, slightly broken strokes), tiny black dot eyes, small black round nose, flat soft muted-but-saturated colors (no gradients, no shading), long floppy ears with fluffy tufts, slightly long body, short legs, slim chihuahua-like build, clean off-white background, illustration for a design-learning website mascot, charming children's book aesthetic, palette: cream #F2E2BD, light brown accent #C68A5C, dark brown line #2C2420
```

ネガティブプロンプト:
```
photorealistic, 3D render, glossy, sharp vector lines, pure black #000000 outlines, anime big eyes, gradient shading, drop shadow, glitter, multiple dogs, text artifacts
```

## SVG実装ガイド

SVG出力時は以下を守る:
- 線は `stroke="#2C2420"` （絶対に`#000`/`#000000`を使わない）
- 線は `stroke-dasharray` で点線/破線にして手描き感を出す（例: `stroke-dasharray="6 3 4 4"`）
- 線幅は `stroke-width="6"` 前後（ビューポート1200x1200想定で）
- 塗りはフラットカラー、グラデ禁止
- ノイズは `<filter>` で `feTurbulence` + `feComposite` を使ってオーバーレイ
- 目は `<circle r="8" fill="#1F1A17">`
- 鼻は `<circle r="14" fill="#1F1A17">` 程度の小さめ
- 全体は SVG 1.1 / viewBox 必須でレスポンシブ対応

参考実装は `references/mascot-base.svg` にひな形を置いてある。

## 実行フロー

1. ユーザーの依頼内容を確認し、デフォルトポーズか・カスタムシーンか判定する
2. 出力形式（画像生成プロンプト / SVG）を決める。不明な場合はデフォルトの画像生成プロンプトで出す
3. 上記スタイル仕様を**省略せず**プロンプトに反映する
4. キャラの一貫性（クリーム色・チワックス・点目・小さい鼻・点線手描き）が崩れないようチェックする
5. 完成物をユーザーに提示する

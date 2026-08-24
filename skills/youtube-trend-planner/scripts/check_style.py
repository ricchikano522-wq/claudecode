#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
台本の文体ルール自動チェッカー（かの｜営業なしで集客するデザイン 専用）

使い方:
    python3 check_style.py 台本_*.md
    python3 check_style.py --strict 台本_*.md   # 警告も終了コード1にする

チェック項目:
  E1 文末が「よ」で終わる文（〜ですよ／〜ますよ／〜なんですよ）  ← 致命
  E2 絵文字                                                      ← 致命
  E3 体言止め・中止形止め・引用中止形（「〜」と。）              ← 致命
  E4 禁止語（主婦・ママ・一択・最強・失敗しない・僕・俺）        ← 致命
  E5 締めの定型文が一字一句一致しない                            ← 致命
  E6 CTAの【キーワード】が残っていない                           ← 致命
  W1 同一語尾が3文以上連続                                       ← 警告
  W2 本文の文字数が目安レンジ外（既定 8,500〜10,000字）          ← 警告
  W3 必須セクション見出しの欠落                                  ← 警告
  W4 タイトル行にAIが主語・枕詞として入っている                  ← 警告

判定対象は「本文」のみ。見出し行・箇条書き行・コードブロック・
「制作メモ」以降は除外する。
"""

import argparse
import re
import sys
import unicodedata

CLOSING = "今日も最後まで見てくださって、ありがとうございました。また次の動画でお会いしましょう。かのでした。"
BANNED_WORDS = ["主婦", "ママ", "一択", "最強", "失敗しない", "僕", "俺"]
REQUIRED_HEADINGS = ["フック", "共感", "結論", "STEP1", "STEP2", "STEP3", "まとめ", "制作メモ"]

# 「言い切っている」と見なす文末パターン
DECISIVE_TAIL = re.compile(
    r"(です|ます|ません|でした|ました|ください|ましょう|でしょう|ですね|ですよね|"
    r"ますよね|ますか|ですか|んか|たい|ない|いる|ある|する|なる|れる|せる|いく|くる|"
    r"みる|おく|しまう|から|ので|のに|けど|だ|た|う|ぬ|ぶ|む|く|ぐ|す|つ|る|ね|か|ん|い)"
    r"[。！？]$"
)
# 挨拶など、体言止め判定から除外する定型
GREETINGS = ("こんにちは", "こんばんは", "おはようございます", "はじめまして", "お疲れさまです")
QUOTE_TAIL = re.compile(r"」と[。！]$")          # 「〜」と。  → 引用中止形
TE_TAIL = re.compile(r"[ぁ-んァ-ヶ一-龥ー]て[。！]$")  # 〜して。   → 中止形

ENDINGS = [
    "なんですよね", "んですよね", "ですよね", "ますよね",
    "なんです", "んです", "ません", "ました", "ています", "しています",
    "します", "ください", "でしょう", "ましょう", "です", "ます",
]


def is_emoji(ch: str) -> bool:
    if ch in "◯○●▲△■□★☆→←↑↓":  # 日本語文中で普通に使う記号は除外
        return False
    if 0x1F300 <= ord(ch) <= 0x1FAFF:
        return True
    if 0x2600 <= ord(ch) <= 0x27BF:
        return True
    return unicodedata.category(ch) == "So"


def extract_body(text: str):
    """本文の (行番号, 行) を返す。見出し・箇条書き・コードブロック・制作メモ以降は除外。"""
    lines = text.split("\n")
    out = []
    in_code = False
    for idx, line in enumerate(lines, start=1):
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
        if s.startswith("#"):
            if "制作メモ" in s:
                break  # 制作メモ以降は本文ではない
            continue
        if not s or s.startswith(("-", "*", ">", "|", "1.", "2.", "3.")):
            continue
        out.append((idx, s))
    return out


def split_sentences(body):
    """(行番号, 文) のリストにする。"""
    sents = []
    for lineno, line in body:
        for s in re.split(r"(?<=[。！？])", line):
            s = s.strip()
            if s:
                sents.append((lineno, s))
    return sents


def ending_of(s: str) -> str:
    core = s.rstrip("。！？")
    for e in ENDINGS:
        if core.endswith(e):
            return e
    return ""


def check(path: str, min_chars: int, max_chars: int):
    text = open(path, encoding="utf-8").read()
    body = extract_body(text)
    sents = split_sentences(body)
    errors, warnings = [], []

    # E1 文末「よ」
    for ln, s in sents:
        if re.search(r"よ[。！]$", s):
            errors.append(("E1 文末「よ」", ln, s[-38:]))

    # E2 絵文字
    for ln, line in body:
        for ch in line:
            if is_emoji(ch):
                errors.append(("E2 絵文字", ln, f"{ch!r} in {line[:32]}"))
                break

    # E3 体言止め・中止形
    for ln, s in sents:
        if any(g in s for g in GREETINGS):
            continue
        if re.search(r"よ[。！]$", s):
            continue  # E1 で報告済み
        if QUOTE_TAIL.search(s) or TE_TAIL.search(s):
            errors.append(("E3 中止形止め", ln, s[-38:]))
        elif re.search(r"[ぁ-んァ-ヶ一-龥ー]。$", s) and not DECISIVE_TAIL.search(s):
            errors.append(("E3 体言止め疑い", ln, s[-38:]))

    # E4 禁止語
    for w in BANNED_WORDS:
        for ln, line in body:
            if w in line:
                errors.append(("E4 禁止語:" + w, ln, line[:44]))
                break

    # E5 締め
    if CLOSING not in text:
        errors.append(("E5 締めの定型文不一致", 0, "一字一句の一致が必要です"))

    # E6 CTAキーワード
    if "【キーワード】" not in text:
        errors.append(("E6 【キーワード】欠落", 0, "プレースホルダーを残してください"))

    # W1 同一語尾3連続
    ends = [ending_of(s) for _, s in sents]
    i = 0
    while i < len(ends):
        j = i
        while j + 1 < len(ends) and ends[j + 1] == ends[i] and ends[i]:
            j += 1
        if j - i + 1 >= 3:
            warnings.append(
                ("W1 同一語尾%d連続:%s" % (j - i + 1, ends[i]), sents[i][0], sents[i][1][:40])
            )
        i = j + 1

    # W2 文字数
    n = sum(len(s) for _, s in sents)
    if not (min_chars <= n <= max_chars):
        warnings.append(("W2 本文%d字（目安%d〜%d）" % (n, min_chars, max_chars), 0, ""))

    # W3 必須見出し
    for h in REQUIRED_HEADINGS:
        if not re.search(r"^#{1,3}.*" + re.escape(h), text, re.M):
            warnings.append(("W3 見出し欠落:" + h, 0, ""))

    # W4 タイトル行のAI主語
    first = next((l for l in text.split("\n") if l.startswith("# ")), "")
    if re.search(r"^#\s*(【[^】]*AI[^】]*】)?\s*AI", first) or re.search(r"AIで|AIが|AI時代", first):
        warnings.append(("W4 タイトルがAI主語・枕詞", 1, first[:56]))

    return n, errors, warnings


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="+")
    ap.add_argument("--min", type=int, default=8500)
    ap.add_argument("--max", type=int, default=10000)
    ap.add_argument("--strict", action="store_true", help="警告も失敗扱いにする")
    a = ap.parse_args()

    total_err = total_warn = 0
    for path in a.files:
        n, errors, warnings = check(path, a.min, a.max)
        total_err += len(errors)
        total_warn += len(warnings)
        mark = "NG" if errors else ("△" if warnings else "OK")
        print(f"\n[{mark}] {path}  本文{n}字  致命{len(errors)}件 / 警告{len(warnings)}件")
        for kind, ln, detail in errors:
            print(f"    x {kind}  (L{ln}) {detail}")
        for kind, ln, detail in warnings:
            print(f"    ! {kind}  (L{ln}) {detail}")

    print(f"\n=== 合計: 致命 {total_err}件 / 警告 {total_warn}件 ===")
    if total_err or (a.strict and total_warn):
        sys.exit(1)
    sys.exit(0)


if __name__ == "__main__":
    main()

---
marp: true
title: "今後のLT会の資料について"
description: ""
author: "hori"
date: "2024/06/20"
---
# 今後のLT会の資料について
---
## 背景
- LT会の内容を，これから入ってくる人から見られるようにしたい
- 過去の発表を共有したい
- あまり，外部に発信するためにかける労力を大きくしたくない
- ついでに，現在やってる活動についても内容を公開したい（現状だとキャンパスマップ）
--- 
## 方針
- OpenTUTのホームページの部員の活動の欄でLT会の内容を公開する
- マークダウン形式で発表資料を作成し，そのままWebページに取り込む
--- 
![Astro](https://astro.build/assets/press/astro-logo-dark.svg)

[Astro](https://astro.build/)・・・現在ホームページで使用されているフレームワーク
- 主要なUIフレームワーク(React, Vueなど)と組み合わせて，利用できる静的サイトジェネレーター(MPA)
    - 静的サイト・・・Javascriptで記述されるロジックを排したHTML onlyのサイト
- markdown形式のファイルに好みのcssを適応してページ化できる
    - HTMLの基本的なタグに変換してくれる
---
![Marp](https://github.com/marp-team/marp/raw/main/marp.png#gh-light-mode-only)
[marp](https://marp.app/)・・・マークダウンでスライドが作れる．VScodeにプラグインがある

---
### ブログの追加の仕方（暫定）
```
---
marp: true
title: "今後のLT会の資料について"
description: ""
author: "hori"
date: "20 June 2024"
image:
  url: https://astro.build/assets/press/astro-logo-dark.svg
  alt: ''
---
# 今後のLT会の資料について
```
- Githubで公開されている[OpenTUT.gr.jpのリポジトリ](https://github.com/OpenTUT/opentut.gr.jp)にファイルを追加
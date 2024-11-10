---
marp: true
title: 'nohupでのbg処理の終了をSlackに通知する'
description: ''
author: '昨日'
date: '2024/07/25'
pdf: '/pdf/lt/nohup.pdf'
---
<!--
headingDivider: 2
-->

# nohupでのbg処理の終了をSlackに通知する

## 背景・目的
terminalで時間がかかる処理をしているとき，チラチラ画面を監視するのが面倒
->**どうにかしたい**

**ジョブをサーバに投げてbg処理させて，それが終了したことをSlackに通知するスクリプトを作る**

## 今回やったこと
- 処理が終わったときにSlackに通知するスクリプトの実装
    - slack api

- nohupコマンドによるbg処理

- これら二つを併せて運用

## nohup
- SIGHUP(ハングアップシグナル)を無視するコマンド
    - remoteにssh接続しているとき，接続を切断してもremoteで処理を続けてくれる
    - `nohup python3 hoge.py &`とか`nohup python3 hoge.py > out1.log 2>&1 &`みたいに使う

## slack apiとnohupの併用
- `~/hoge.sh`に`myfunc`関数として定義する
    - slack apiの処理とnohupの処理を同時にできるように書くだけ
        - 使う前に`source ~/hoge.sh`をする
        - `myfunc "python3 hoge.py"`とかでbg処理の開始と終了を通知

## デモンストレーション
見せます

## 結論
画面をチラチラ監視しないでいいからうれしいね
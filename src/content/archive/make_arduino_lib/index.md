---
marp: true
title: "自作Arduinoライブラリを公開してみる"
description: ""
author: "岩井"
date: "2025/04/27"
pdf: '/pdf/archive/make_arduino_lib.pdf'
---

# 自作Arduinoライブラリを公開してみる

---

## Arduinoとは

- Arduinoボード(マイコンボード)、Arduino IDE(開発環境)から成る一連のエコシステム
- 安価なArduinoボードに書き込むプログラムをArduino IDEで作成することによって誰でも組み込み開発に取り組むことができる
- Arduino IDE上で使える各種ライブラリが公開されており、高度な技術を要するアイデアを容易に形にできる

---

## Arduinoで使えるライブラリについて

- センサを読み取るための...
- ゲームコントローラーと無線通信するための...
- モーターを動かすための...
- ディスプレイにいろいろ表示するための...

---

## Arduinoライブラリの作り方

- ライブラリ名/
  - examples/
    - hoge/hoge.ino
  - src/
      - ライブラリ名.h
      - hoge.cpp
      - ...
  - library.properties
  - LICENSE
  - README.md

---

## ライブラリ公開の準備

- 前述のディレクトリ構造を持ったArduinoライブラリをGitHubにpushしたらarduino-lint-actionを実行するworkflowを作成する
  - https://github.com/arduino/arduino-lint-action
  - Arduinoライブラリ公開にあたって不足しているファイルはないか、library.propertiesが規則に従っているか自動でチェックしてくれる
- GitHub上でtagとreleaseを作成する
  - このときつける名前をlibrary.properties記載のバージョンと一致させること

---

## 公式にPull Request作成->公開

https://github.com/arduino/library-registry

をforkして、

https://github.com/arduino/library-registry/blob/main/repositories.txt

の末尾に公開したいライブラリへのURLを追記したPRを作成する。

![alt text](<Screenshot from 2025-04-27 13-54-00.png>)

---

## Arduino IDEからインストール可能に！

- うまく反映されない場合は、数時間たったあとにtagとreleaseを作り直す
- 2時間おきに各リポジトリのreleaseをチェックしているらしいので割とすぐに公開される

![alt text](<Screenshot from 2025-04-27 13-54-30.png>)
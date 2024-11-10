---
title: "PythonのProjectManagerって結局何がいいの？"
description: ""
author: "hori"
date: "2024/07/04"
marp: true
pdf: '/pdf/archive/pip.pdf'
---

# Python の ProjectManager って結局何がいいの？

---

## 問題点
- デフォルトのPython環境だと, 依存関係管理に関するツールとしてpipが用いられる（Python3に含まれている）
    - パッケージのバージョン管理などの機能が不十分
    - Python自身のバージョンを指定できない
    - 仮想環境（プロジェクト単位のパッケージのインストール先）を単体で解決できない
---
## よくある構成
### pip + venv + pyenv
- pipでパッケージ管理
- venvで仮想環境管理
- pyenvでバージョン管理

  - pip freezeコマンドを使って依存関係をファイルに書き出すことはできるが、面倒
  - コマンド実行忘れが発生しやすく、慣れが必要な構成
  - デフォルトでインストールされているツールも多く,環境を選ばない
---
### [poetry](https://python-poetry.org/)
### [pipenv]()

- どちらもパッケージ管理　&　仮想環境管理が行える
- Pythonのバージョン管理ツールと併せて利用することが多い

---
## 全部一つのツールで解決したい!!
---

### [Rye](https://rye.astral.sh/)
- Rust製の新しめのツール
- パッケージ管理 & 仮想環境管理 &  Pythonバージョン指定すべてできる



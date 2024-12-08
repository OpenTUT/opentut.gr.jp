---
marp: true
title: 'FPGAで遊ぶ'
description: ''
author: 'horih'
date: '2024/12/08'
pdf: '/pdf/archive/cpu.pdf'
---

# FPGAで遊ぶ

---

## FPGAって？
- ハードウェア記述言語HDL（SyetemVerilogとかVHDL）で論理回路を構成したものを実装できる．
- HDLから真理値表を生成して，それ通りに動作するゲートの組み合わせを構成する（まあまあ時間かかる）

---
## なんでこのタイミング？
- 実務訓練でSystemVerilog使いそうだから
--- 
## 使ったハードウェア
- Intel Cyclone 10 LP Evaluation Kit

## 今回やったこと
- FPGAでCPUを作る
---
## 採用したアーキテクチャ
- RV32I (RISC-Vの32bit)
- ３年の実験の使いまわしで行けそうかなという甘い考え(Verilog)
```
module adder(a,b,q);

input [3:0] a, b;
output [3:0] q;

assign q = a + b;
endmodule

module adder(
    input [31:0] a, b,
    output [31:0] q);

    assign q = a + b;
endmodule
```

多次元配列のサポートがデカい

---
## RISC-Vって？
- 最近シェアを伸ばしている？商業利用可能なオープンソースアーキテクチャ
- Armと同じRISCなので，組込み向けにシェア拡大中？
    - 命令が単純なのでハードウェアも単純（消費電力低, サイズ小）
    - epsressifのマイコンはよく目にする

---
## 感想
### まだまだよくわからんことが多い
### パイプラインプロセッサとかつくってみたい
---
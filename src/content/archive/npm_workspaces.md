---
marp: true
title: 'npm workspacesでモノレポ構成'
description: ''
author: 'りｎ'
date: '2025/03/30'
pdf: '/pdf/archive/npm_workspaces.pdf'
---

# npm workspacesでモノレポ構成

---

## モノレポ(monorepo)とは

- 一つのリポジトリの中に複数のnpmパッケージ
- 型、スキーマ、ロジックなどを共有できる

---

## npm workspacesとは

モノレポを実現するツールにはいくつかある

- Lerna
- Nx
- Turborepo
- ...

npm workspacesはnpmに付属しているため、別途ツールの導入が不要

---

## npm workspacesを使うための準備

### フォルダ構成

```
.
└── practice/
    ├── packages/
    │   ├── common/
    │   │   └── package.json (name: @practice/common)
    │   ├── client/
    │   │   └── package.json (name: @practice/client)
    │   └── server/
    │       └── package.json (name: @practice/server)
    └── package.json
```

---

### practice/package.json

```json
{
  "name": "@practice/workspace",
  "private": true,
  "workspaces": [
    "packages/common",
    "packages/client",
    "packages/server"
  ]
}
```

---

## npm workspaces使い方

### 特定パッケージに外部依存を追加

```sh
$ npm install react -w @practice/client
```

### 特定パッケージに内部依存を追加

```sh
$ npm install @practice/common -w @practice/server
```

### 特定パッケージが持つnpm scriptを実行

```sh
$ npm run dev -w @practice/client
```

### すべてのパッケージについてnpm scriptを実行

```sh
$ npm run build -ws
```

---

## おわりに

これで複雑な依存関係に悩まされることなく複数パッケージから成る複雑なプロジェクトを構成できるようになる
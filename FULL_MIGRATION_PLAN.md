# Full Migration Plan

このプロジェクトを別PCへ「できるだけ完全移植」するための設計書です。

## 目的

単にWebアプリのファイルを移すだけではなく、以下を移す、または移行先で同等に復元する。

- プログラム本体
- GitHubリポジトリとの接続
- GitHub Pages公開状態
- Codexで作業を続けるための文脈
- Codexホスト側の実行環境
- GitHub CLI認証
- ブラウザ/GitHubログイン状態
- PWAの公開確認手順

## 重要な前提

Codexのスレッドそのものが別PCの一覧に出ない場合、GitHub cloneだけでは完全移植ではない。

GitHubに移るのは、リポジトリ内のファイルとGit履歴であり、Codexスレッドの会話履歴、ローカル認証、ブラウザログイン、Codexプラグイン設定は自動では移らない。

そのため、移行は2層で考える。

1. **実体層**: GitHub、ファイル、公開URL、認証、ツールを移行先PCで復元する。
2. **文脈層**: Codexスレッド履歴を、ChatGPTで共有できる会話またはリポジトリ内Markdownに保存し、移行先Codexに読ませる。

## 推奨構成

### 1. GitHubを正本にする

現在の正本:

- Repository: `https://github.com/waragamef-png/koukyo-no14-pwa`
- Pages: `https://waragamef-png.github.io/koukyo-no14-pwa/`
- Branch: `main`

移行先PCでは必ずcloneから始める。

```powershell
git clone https://github.com/waragamef-png/koukyo-no14-pwa.git
cd koukyo-no14-pwa
```

### 2. GitHub CLI認証を移行先PCで復元する

移行先PCで確認:

```powershell
gh auth status
git remote -v
git push --dry-run origin main
```

GitHub Actions workflowを今後使う可能性があるなら、`workflow` scopeも必要。

```powershell
gh auth refresh -h github.com -s repo -s workflow -s read:org
```

### 3. Codexホストとして移行先PCを使う

常時ON PCにCodex Appを入れ、同じChatGPT/Codexアカウントと同じworkspaceでログインする。

移行先PC側で必要なもの:

- Codex App
- Git
- GitHub CLI
- Python
- Node.js
- Chrome
- Codex Chrome Extension
- GitHubへのブラウザログイン

### 4. ChatGPTを文脈母艦にする

ChatGPTの同じ会話を複数PCから見られるなら、ChatGPT側に次の情報を置く。

- GitHub URL
- Pages URL
- 現在の目的
- 直近のバグ修正
- `CODEX_HANDOFF.md`
- この `FULL_MIGRATION_PLAN.md`
- 移行先Codexに最初に読ませるプロンプト

移行先Codexに貼るプロンプト:

```text
このプロジェクトは GitHub の waragamef-png/koukyo-no14-pwa です。
まず README.md、CODEX_HANDOFF.md、FULL_MIGRATION_PLAN.md を読んでください。
そのうえで、GitHub接続、PWA公開URL、ローカル実行、採点バグ修正済み状態を検証し、以後このPCを正の作業環境として扱ってください。
```

### 5. Codexスレッドの扱い

理想は、Codexのremote connectionまたはhandoff機能で、現在のスレッドまたはforkしたスレッドを常時ON PCへ移すこと。

ただし、現在のスレッドを直接移せない場合があるため、その場合は以下の順に完全性を上げる。

1. 現スレッドをforkし、forkスレッドを常時ONホストへhandoffする。
2. handoffできない場合、現スレッドの内容をMarkdownに書き出してリポジトリに保存する。
3. 移行先CodexでMarkdownを読ませ、新スレッドとして継続する。

## 検証チェックリスト

移行先PCで以下をすべて確認できたら、実用上の完全移植とみなす。

```powershell
git status --short --branch
git remote -v
gh auth status
python -m http.server 5173
```

ブラウザ確認:

- `http://127.0.0.1:5173/` が開く。
- 問題タブで空欄が不正解になる。
- `https://waragamef-png.github.io/koukyo-no14-pwa/` が開く。
- `https://waragamef-png.github.io/koukyo-no14-pwa/manifest.webmanifest` が200で返る。
- `https://waragamef-png.github.io/koukyo-no14-pwa/service-worker.js` が200で返る。

GitHub確認:

```powershell
git pull
git push --dry-run origin main
```

Codex確認:

- Codexが移行先PCのプロジェクトフォルダを開ける。
- Codexからファイル編集できる。
- Codexからテスト用コマンドを実行できる。
- CodexからGitHub pushできる。
- 必要ならChrome/GitHubログイン済みページを操作できる。

## 失敗しやすい点

- GitHub cloneだけではCodexスレッド履歴は移らない。
- GitHub CLIのログインはPCごとに必要。
- ChromeのGitHubログインもPCごとに必要。
- Codex Chrome Extension、Computer Use、MCP、プラグインはホストPCごとの設定。
- GitHub CLI tokenに `workflow` scopeがないと、workflowファイルのpushが拒否される。
- iPhoneのPWAはGitHub Pagesを見ているため、PCの電源状態には依存しない。

## 現在の既知状態

- GitHub repo作成済み。
- GitHub Pages公開済み。
- PWAファイル配信確認済み。
- 採点バグ修正済み。
- 前回の No.14 単独プリントは削除済み。現在は No.8-14 の7枚構成、90問。
- `CODEX_HANDOFF.md` 追加済み。
- このファイルで完全移植の方針を追加。

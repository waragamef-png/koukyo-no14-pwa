# Codex Handoff

このファイルは、別PCのCodexでこのプロジェクトを再開するための引き継ぎメモです。

## プロジェクト

- GitHub: https://github.com/waragamef-png/koukyo-no14-pwa
- 公開URL: https://waragamef-png.github.io/koukyo-no14-pwa/
- ローカル作業フォルダ: `C:\Users\win1\Documents\Web_App`
- 目的: 学校の授業プリント「公共 No.8-14」をもとに、問題演習・要点確認・暗記カードができるPWAを作る。

## 現在できていること

- `index.html`, `styles.css`, `app.js` で静的Webアプリを実装済み。
- `assets/prints/` に No.8-14 のプリント画像を同梱済み。
- `manifest.webmanifest` と `service-worker.js` を追加し、PWAとしてホーム画面追加できる構成。
- GitHub Pagesで公開済み。
- iPhoneではSafariで公開URLを開き、「共有」から「ホーム画面に追加」で使う。

## 重要な修正履歴

- 最初の採点ロジックでは、空欄や短い部分一致が正解になるバグがあった。
- `app.js` の `isCorrect()` を修正し、空欄は不正解、正答を含む十分な入力のみ正解にした。
- 修正コミット: `139ee52 Fix quiz answer validation`
- その後、前回の No.14 単独プリントを削除し、No.8-14 の7枚から90問を作り直した。

## 別PCで再開する手順

```powershell
git clone https://github.com/waragamef-png/koukyo-no14-pwa.git
cd koukyo-no14-pwa
python -m http.server 5173
```

ブラウザで開く:

```text
http://127.0.0.1:5173/
```

## 別PCのCodexで最初に貼るとよい依頼文

```text
このリポジトリは公共No.8-14の授業プリントから作ったPWA学習アプリです。
まず CODEX_HANDOFF.md と README.md を読んで、現在の実装・公開URL・修正履歴を把握してください。
以後、このプロジェクトの続きを作業してください。
```

## 注意

- Codexの会話スレッドそのものが別PCの一覧に出ない場合、このファイルを文脈の代替として使う。
- 完全な会話ログの移植ではなく、作業継続に必要な要約と手順をリポジトリ内に保存する方式。
- GitHub Pagesの公開元は `main` ブランチのルート。

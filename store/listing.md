# Chrome ウェブストアに載せる内容

Developer Dashboard の各タブに貼る文と、上げる画像です。名前と概要は manifest.json の `name` と `description` が使われます。

## ストアの掲載情報(Store Listing)

- 名前: Hitokoto
- 概要: 選んだ語を AI が一言で説明する
- カテゴリ: ダッシュボードの一覧から選ぶ(候補: 教育)
- 言語: 日本語
- アイコン: 拡張機能の `icons/128.png` がそのまま使われる
- スクリーンショット(1280×800): `screenshot-1.png` 〜 `screenshot-4.png`
- 小さいプロモーション画像(440×280): `promo-small.png`
- サポートの URL: https://github.com/4rtoflow/Hitokoto/issues

説明:

```
Web 小説などを読んでいて分からない語に出会ったとき、読むのを止めずに意味だけを確かめられる拡張機能です。

■ 使い方
1. ページ上の語をドラッグかダブルクリックで選ぶ
2. 語のすぐ下に出るアイコンを押す
3. その場に、一言で意味が出ます

■ 特長
・説明は一言だけ。長い解説は出しません
・縦書きの小説でも使えます。説明はページの色と書体になじみます
・英単語は日本語の訳で答えます
・Claude(Haiku 5.5)と OpenAI(GPT-6 Luna)の API キーに対応しています

■ 必要なもの
Claude か OpenAI の API キー。説明 1 回ごとに、キーの持ち主に API の料金がかかります。

■ プライバシー
アイコンを押したときだけ、選んでいる語を API キーの会社(Anthropic か OpenAI)に送ります。ページのほかの文や閲覧履歴は送らず、開発者には何も届きません。
```

## プライバシーへの取り組み(Privacy)

- 単一の目的: Web ページで選んだ語の意味を、AI に一言で説明させてその場に表示する。
- `storage` の理由: 利用者が入れた API キーと、送る内容への同意を、ブラウザの中に保存するため。
- ホストの権限の理由(`https://api.anthropic.com/*`・`https://api.openai.com/*`・全ページの content script): 利用者がどのサイトで語を選んでもアイコンを出し、アイコンを押したときに選んだ語を AI の API に送って意味を受け取るため。ページから読むのは、選んでいる語と、説明の枠をページになじませるための文字の色・背景の色・書体だけで、送るのは選んだ語だけ。
- リモートコード: 使っていない(No, I am not using remote code)
- 集めるデータ:
  - ウェブサイトのコンテンツ: 選んでいる語(アイコンを押したときだけ、API キーの会社に送る)
  - 認証情報: API キー(ブラウザの中に保存し、キーの会社に送るだけ)
- 3 つの証明: すべてにチェックする(承認された用途以外で第三者に販売・転送しない/単一の目的に関係ない用途で使用・転送しない/信用度の判定や融資の目的で使用・転送しない)
- プライバシーポリシーの URL: https://github.com/4rtoflow/Hitokoto/blob/main/PRIVACY.md

## 配布(Distribution)

- 支払い: 無料
- 公開範囲: 公開

## テストの手順(Test instructions)

審査の人が説明を出すには API キーが要ります。渡す場合は、使える額に上限を付けたキーを作って下の文に書き足します。渡さなくても、設定画面・同意・キーが無いときの案内までは確かめられます。

```
1. After installation, the options page opens automatically.
2. Enter an Anthropic (sk-ant-...) or OpenAI API key, check the consent box, and click 保存 (Save).
3. Open any web page, select a word by double-clicking it, and click the red speech-bubble icon shown under the word.
4. A one-phrase explanation of the word appears in place.
Without a key or consent, clicking the icon sends nothing and opens the options page instead.
```

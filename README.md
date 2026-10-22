# Hitokoto

Web ページで選んだ語を、AI がすぐに一言で説明する Google Chrome の拡張機能です。

Web 小説などを読んでいて分からない語(日本語の難しい語や英単語)に出会ったとき、読むのを止めずに意味だけを確かめられるようにします。説明は長くせず、一言に絞ります。

## 導入

1. Chrome で `chrome://extensions` を開き、右上の「デベロッパー モード」をオンにする
2. 「パッケージ化されていない拡張機能を読み込む」で、このリポジトリのフォルダを選ぶ
3. 自動で開く設定画面で、Claude か OpenAI の API キーを入れ、送る内容に同意して保存する(あとから開くときは、拡張機能の「詳細」→「拡張機能のオプション」)

API キーは [Claude Console](https://platform.claude.com/) か [OpenAI Platform](https://platform.openai.com/api-keys) で作れます。Claude のキーなら Claude Haiku 5.5、OpenAI のキーなら GPT-6 Luna で答えます。説明 1 回ごとに、キーの持ち主に API の料金がかかります。

## 使い方

1. ページ上の語をドラッグかダブルクリックで選ぶ
2. 語のすぐ下に出るアイコン(朱色の吹き出し)を押す

送るのは選んだ語だけです。文脈によらない、一般的な意味を答えます。

## プライバシー

アイコンを押したときだけ、選んでいる語を API キーの会社(Anthropic か OpenAI)に送ります。ページのほかの文や閲覧履歴は送らず、開発者には何も届きません。詳しくは[プライバシーポリシー](PRIVACY.md)をご覧ください。

Hitokoto が利用者から受け取った情報の使い方と渡し方は、Limited Use の要件を含む [Chrome ウェブストアのユーザーデータに関するポリシー](https://developer.chrome.com/docs/webstore/program-policies/policies)に従います。

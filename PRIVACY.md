# プライバシーポリシー / Privacy Policy

最終更新: 2026-10-23 / Last updated: October 23, 2026

## 日本語

Hitokoto は、Web ページで選んだ語の意味を、AI が一言で説明する Chrome の拡張機能です。

### 扱う情報と使い道

| 情報 | いつ・どこへ | 使い道 |
|---|---|---|
| 選んでいる語 | 語の下に出るアイコンを押したときだけ、API キーの会社へ HTTPS で送ります。Claude のキーなら Anthropic(api.anthropic.com)、OpenAI のキーなら OpenAI(api.openai.com)です。 | その語の意味を答えさせるため |
| API キー | このブラウザの中(`chrome.storage.local`)に保存し、上の送り先へ送るときに使います。 | API を呼ぶため |
| 同意したかどうか | このブラウザの中に保存します。 | 同意する前に何も送らないため |

- ページのほかの文、URL、閲覧履歴は集めません。
- 開発者のサーバーはありません。開発者に情報が届くことはありません。
- 情報を売ったり、広告に使ったり、上の送り先以外に渡したりしません。
- 保存した情報は、拡張機能を削除すると消えます。

送った語は、送り先の会社の決まりに従って扱われます。[Anthropic のプライバシーポリシー](https://www.anthropic.com/legal/privacy)・[OpenAI のプライバシーポリシー](https://openai.com/policies/privacy-policy/)をご覧ください。OpenAI へは、答えを保存しない指定(`store: false`)を付けて送ります。

Hitokoto が利用者から受け取った情報の使い方と渡し方は、Limited Use の要件を含む [Chrome ウェブストアのユーザーデータに関するポリシー](https://developer.chrome.com/docs/webstore/program-policies/policies)に従います。

### 問い合わせ

[GitHub の Issues](https://github.com/4rtoflow/Hitokoto/issues) へどうぞ。

## English

Hitokoto is a Chrome extension that explains the meaning of a word you select on a web page in a single short phrase, using AI.

### What we handle and why

| Data | When and where | Purpose |
|---|---|---|
| The selected word | Sent over HTTPS only when you click the icon shown under the word, to the provider of your API key: Anthropic (api.anthropic.com) for a Claude key, or OpenAI (api.openai.com) for an OpenAI key. | To get the meaning of the word |
| Your API key | Stored in this browser (`chrome.storage.local`) and used when sending to the provider above. | To call the API |
| Whether you consented | Stored in this browser. | To send nothing before you consent |

- We do not collect any other page text, URLs, or browsing history.
- There is no developer server. No data ever reaches the developer.
- We do not sell data, use it for advertising, or share it with anyone other than the provider above.
- Stored data is removed when you remove the extension.

The words you send are handled under the provider's terms. See the [Anthropic Privacy Policy](https://www.anthropic.com/legal/privacy) and the [OpenAI Privacy Policy](https://openai.com/policies/privacy-policy/). Requests to OpenAI are sent with `store: false`.

Hitokoto's use and transfer of information received from users adheres to the [Chrome Web Store User Data Policy](https://developer.chrome.com/docs/webstore/program-policies/policies), including the Limited Use requirements.

### Contact

Please use [GitHub Issues](https://github.com/4rtoflow/Hitokoto/issues).

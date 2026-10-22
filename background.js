const SYSTEM = '選ばれた語を、日本語で一言（20 字程度）で説明する。文脈があれば、その文脈での意味を答える。前置き・語の繰り返し・装飾は書かない。';

chrome.runtime.onMessage.addListener((target, _sender, reply) => {
  explain(target).then(text => reply({ text }), e => reply({ error: e.message }));
  return true;
});

async function explain({ word, context }) {
  const { apiKey } = await chrome.storage.local.get('apiKey');
  if (!apiKey) {
    chrome.runtime.openOptionsPage();
    throw new Error('設定画面で API キーを入れてください');
  }
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2026-10-21',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-haiku-5-5',
      max_tokens: 1024,
      output_config: { effort: 'low' },
      system: SYSTEM,
      messages: [{ role: 'user', content: `語: ${word}\n文脈: ${context}` }],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message ?? `HTTP ${res.status}`);
  if (data.stop_reason === 'refusal') throw new Error('この語は説明できませんでした');
  return data.content.filter(b => b.type === 'text').map(b => b.text).join('').trim();
}

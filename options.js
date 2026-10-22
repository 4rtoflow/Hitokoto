const key = document.getElementById('key');
const consent = document.getElementById('consent');

chrome.storage.local.get(['apiKey', 'consent']).then(r => {
  key.value = r.apiKey ?? '';
  consent.checked = !!r.consent;
});

document.getElementById('form').addEventListener('submit', async e => {
  e.preventDefault();
  await chrome.storage.local.set({ apiKey: key.value.replace(/[^\w-]/g, ''), consent: consent.checked });
  document.getElementById('status').textContent = '保存しました';
});

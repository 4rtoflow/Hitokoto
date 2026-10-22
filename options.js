const key = document.getElementById('key');

chrome.storage.local.get('apiKey').then(({ apiKey }) => {
  key.value = apiKey ?? '';
});

document.getElementById('form').addEventListener('submit', async e => {
  e.preventDefault();
  await chrome.storage.local.set({ apiKey: key.value.replace(/[^\w-]/g, '') });
  document.getElementById('status').textContent = '保存しました';
});

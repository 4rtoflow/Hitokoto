const host = document.createElement('div');
host.style.cssText = 'all:initial;position:absolute;z-index:2147483647;display:none';
const root = host.attachShadow({ mode: 'open' });
root.innerHTML = `<style>
  div { font: 14px/1.5 system-ui, sans-serif; color: #222; background: #fff; border: 1px solid #ccc;
        border-radius: 6px; padding: 4px 8px; box-shadow: 0 2px 8px #0003; max-width: 20em; }
  button { font: inherit; cursor: pointer; }
</style><div><button>一言で説明</button><span></span></div>`;
const button = root.querySelector('button');
const output = root.querySelector('span');
document.documentElement.append(host);

let target;

document.addEventListener('mouseup', e => {
  if (e.target === host) return;
  const selection = getSelection();
  const word = selection.toString().trim();
  if (!word || word.length > 40) return hide();
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  target = { word, context: contextAround(word, range.commonAncestorContainer) };
  button.hidden = false;
  output.textContent = '';
  Object.assign(host.style, { display: 'block', top: `${rect.bottom + scrollY + 6}px`, left: `${rect.left + scrollX}px` });
});

document.addEventListener('mousedown', e => {
  if (e.target !== host) hide();
});

button.addEventListener('click', async () => {
  const asked = target;
  button.hidden = true;
  output.textContent = '…';
  const { text, error } = await chrome.runtime.sendMessage(asked).catch(e => ({ error: e.message }));
  if (asked === target) output.textContent = text || error;
});

function hide() {
  host.style.display = 'none';
}

function contextAround(word, node) {
  const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  const text = (el.closest('p, li, dd, td, blockquote') ?? el).innerText.replace(/\s+/g, ' ');
  const i = text.indexOf(word);
  return i < 0 ? '' : text.slice(Math.max(0, i - 80), i + word.length + 80);
}

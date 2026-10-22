const host = document.createElement('div');
host.style.cssText = 'all:initial;position:absolute;z-index:2147483647;display:none';
const root = host.attachShadow({ mode: 'open' });
root.innerHTML = `<style>
  button { display: block; padding: 0; border: 0; background: none; cursor: pointer; }
  svg { display: block; width: 28px; height: 28px; filter: drop-shadow(0 1px 2px #0005); }
  span { display: block; font: 14px/1.5 system-ui, sans-serif; color: #222; background: #fff; border: 1px solid #ccc;
         border-radius: 6px; padding: 4px 8px; box-shadow: 0 2px 8px #0003; max-width: 20em; }
  button[hidden], span:empty { display: none; }
</style><button title="一言で説明"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M40 16H88A24 24 0 0 1 112 40V72A24 24 0 0 1 88 96H62Q52 106 35 112.5Q30 114.5 31.5 110Q37 104 40 96A24 24 0 0 1 16 72V40A24 24 0 0 1 40 16Z" fill="#E5483B"/><path d="M33 48.5C39.5 49.5 46 50.5 54 50C64 49.5 74 47.5 82 45.5C86 44.3 89.5 42 92.5 42.6C97 43.6 99 49.5 98 54C97 59.5 92.5 63 87 63C76 62.8 62 63.8 50 66C45 66.8 41.2 66 39.6 63.2C37.6 59.5 35.8 53 33 48.5Z" fill="#fff"/></svg></button><span></span>`;
const button = root.querySelector('button');
const output = root.querySelector('span');
document.documentElement.append(host);

let target;

document.addEventListener('mouseup', e => {
  if (e.target === host) return;
  const selection = getSelection();
  const word = selection.toString().trim();
  if (!word || word.length > 40) return hide();
  const rect = selection.getRangeAt(0).getBoundingClientRect();
  target = { word };
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

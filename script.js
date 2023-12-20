function extendHex(shortHex) {
  shortHex = shortHex.replace(/^#/, '');

  const fullHex = shortHex
    .split('')
    .map(char => char.repeat(2))
    .join('');

  return `#${fullHex}`;
}

function extendHexCode() {
  const shortHex = document.getElementById('shortHex').value;
  const fullHex = extendHex(shortHex);
  document.getElementById('result').innerText = `Extended Hex Code: ${fullHex}`;
}

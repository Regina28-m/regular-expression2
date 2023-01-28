export default function numberEditor(number) {
  const res = number.replace(/[^0-9+]/g, '');
  if (!/^\+/.test(res)) {
    return `+7${res.split('').slice(-10).join('')}`;
  }
  return res;
}

export const encode = string => {
  if (!string) return '';
  const chars = [...string];
  let charCountPairs = [{char : chars[0], count: 0}];
  for (const ch of chars) {
    const lastCharCountPair = charCountPairs[charCountPairs.length - 1];
    if (lastCharCountPair['char'] === ch) lastCharCountPair['count']++;
    else charCountPairs.push({char : ch, count : 1});
  }
  return charCountPairs.reduce((res, pair) => res + (pair['count'] > 1 ? pair['count'] : '') + pair['char'], '');
};

export const decode = string => {
  if (!string) return '';
  return [...string.matchAll(/(\d*[\s|\w])/g)]
  .map(match => match[0])
  .map(group => {
    if (group.length === 1) return group;
    const count = parseInt(group.match(/\d+/)[0]);
    const char = group.match(/\D/)[0];
    return char.repeat(count);
  })
  .join('');
};
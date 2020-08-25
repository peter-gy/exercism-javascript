const codonProteinMap = new Map([
  ['AUG', 'Methionine'],
  ['UUU', 'Phenylalanine'],
  ['UUC', 'Phenylalanine'],
  ['UUA', 'Leucine'],
  ['UUG', 'Leucine'],
  ['UCU', 'Serine'],
  ['UCC', 'Serine'],
  ['UCA', 'Serine'],
  ['UCG', 'Serine'],
  ['UAU', 'Tyrosine'],
  ['UAC', 'Tyrosine'],
  ['UGU', 'Cysteine'],
  ['UGC', 'Cysteine'],
  ['UGG', 'Tryptophan'],
  ['UAA', 'STOP'],
  ['UAG', 'STOP'],
  ['UGA', 'STOP']
]);

export const translate = (sentence='') => {
  if (sentence.length % 3 !== 0) throw new Error('Invalid codon');
  let proteins = [];
  for (let i = 0; i < sentence.length; i += 3) {
    const codon = sentence.slice(i, i + 3);
    const protein = codonProteinMap.get(codon);
    if (protein === 'STOP') break;
    else if (protein) proteins.push(protein);
    else throw new Error('Invalid codon');
  }
  return proteins;
};

const nuclMap = new Map([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
]);

const map = Array.prototype.map;

export const toRna = (dna) => (!dna ? "" : map.call(dna, (nucl) => nuclMap.get(nucl)).join(""));

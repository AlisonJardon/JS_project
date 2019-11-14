let codonToAcideAmine = [
	{ aminoAcid: 'Sérine', cords: ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'] },
	{ aminoAcid: 'Proline', cords: ['CCU','CCC', 'CCA', 'CCG'] },
  { aminoAcid: 'Leucine', cords: ['UUA', 'UUG'] },
  { aminoAcid: 'Phénylalanine', cords: ['UUU', 'UUC'] },
  { aminoAcid: 'Arginine', cords: ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG'] },
  { aminoAcid: 'Tyrosine', cords: ['UAU', 'UAC'] }
  ];

let arn1 = "CCGUCGUUGCGCUACAGC";
let codons1 = arn1.toString().match(/.{3}/g).join('-');
const codonsArray1 = codons1.split("-");

//transformation de chaque codon en un "acide aminé"
console.log(".".repeat(50));
acideAmineArray1 = []
codonsArray1.forEach(codon => {
	const resultat = codonToAcideAmine.find( acideAmine => acideAmine.cords.includes(codon));
	acideAmineArray1.push(resultat.aminoAcid);
});
console.log("===> L'ARN n°1 transcrit en protéines se compose de : ")
console.log(acideAmineArray1.join("-"))
console.log(".".repeat(50));

console.log(".".repeat(50));
let arn2 = "CCUCGCCGGUACUUCUCG"
let codons2 = arn2.toString().match(/.{3}/g).join('-');
const codonsArray2 = codons2.split('-');

acideAmineArray2 = []
codonsArray2.forEach(codon => {
const resultat2 = codonToAcideAmine.find(acideAmine => acideAmine.cords.includes(codon));
acideAmineArray2.push(resultat2.aminoAcid);
});
console.log("===> L'ARN n°2 transcrit en protéines se compose de : ")
console.log(acideAmineArray2.join("-"))
console.log(".".repeat(50));






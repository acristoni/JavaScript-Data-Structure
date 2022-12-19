// concatenar string
convertToMilitaryStandart = convertedHour + convertion.substring(2,convertion.length)

//transforma string, frase, em array de letras to caixa baixa
const s = 'SUM BALANCE of all active POCKETS ACCOUNTS'
const sToLower = s.toLowerCase()
console.log(sToLower)

// //remove caracteres especiais
const paragraphWithoutSymbols = paragraph.replace(/[^a-zA-Z ]/g, "")

// //array com as palavras de uma frase
const arrayParagraph = paragraphWithoutSymbols.split(" ")

//TRANSFORMA STRING EM ARRAY
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
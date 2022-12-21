//BUSCA DE UM ELEMENTO
const arrayDatas = [
    "2022-11-26",
    "2022-11-27",
    "2022-12-17",
    "2022-12-18",  
    "2022-01-28",
    "2022-01-29",
    "2022-02-25",
    "2022-02-26",
    "2022-03-25",
    "2022-03-26",
]

//encontrar elemneto do array, retorna elemento
const result = arrayDatas.find(element => element === "2022-04-23")

//encontrar elemneto do array, retorna indicie
const index = arrayDatas.findIndex(element => element === "2022-04-23")

//encontrar elemneto do array, que corresponde as exigencias do callback
const a = b.filter(word => word.occurence >= Y)

function validationDate (result){
    if ( result ) {
        // console.log("data existe")
        return
    }
    
    // console.log("data não existe")
}

validationDate(result)

//LAÇO DE REPETIÇÃO
for (const element of arrayDatas) {
    // console.log(element)
}

//REMOVER ELEMENTO
console.log(arrayDatas)
arrayDatas.splice(2,1)
console.log(arrayDatas)

// organizar numero por ordem crescente
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
//decrescete
points.reverse()

//organizar objetos por alguma chave especifica, ex: occurrence
const numbersSortByOccurrence = numbersMinYOccurrence.sort((a, b) => b.occurrence - a.occurrence)

//para cada elemento do array
array.forEach((v) => (v === value && count++));

//exemplo array de duas dimensçoes
const twoDimensionArray = [
    [11,2,4,5],
    [4,5,6, 5],
    [10,8,-12, 5],
    [4,5,6,5],
]

//IGUALDADE ENTRE ARRAYS
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
const arr3 = [1, 5, 6]
function checkArrays(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2);
}
console.log(checkArrays(arr1, arr2)) // true
console.log(checkArrays(arr1, arr3)) // false

//SOMA DOS ELEMENTOS DE UM ARRAY
let rightSum = arr.reduce((a,b) => a + b);

//remove ultimo elemento de um aarya
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
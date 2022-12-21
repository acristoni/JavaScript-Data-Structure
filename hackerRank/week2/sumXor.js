const n = 10

// function sumXor(n) {
//     let counter = 0

//     for ( let i = 0; i <= n; i++) {
//         if ((n + i) === (n ^ i)) {
//             counter++
//         }
//     }

//     return counter
// }

function sumXor(n) {
    // Write your code here
    if(n === 0){
        return 1;
    }

    const DecToBin = n.toString(2)
    const numbe1Replaced = DecToBin.replaceAll('1','')
    const stringNumberBinPlus1Beegining = '1' + numbe1Replaced
    const numberBinToDec = parseInt(stringNumberBinPlus1Beegining, 2);
    return numberBinToDec
}

console.log(sumXor(n))
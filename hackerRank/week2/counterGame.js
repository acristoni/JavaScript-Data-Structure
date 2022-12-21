const n = 2147483648


// function counterGame(n) {
//     var counter = 2

//     function counterGameINside(n) {
//         let potencia = 1
//         let restoNMenorPotencia = 1
    
//         while (restoNMenorPotencia > 0) {
//             restoNMenorPotencia = n - 2**potencia
//             potencia++
//         }
    
//         const subNmaiorNUmero = n -  2**(potencia - 2)
    
//         if (subNmaiorNUmero === 0) {
//             if ((potencia - 2) % 2 !== 0 && counter % 2 === 0) {
//                 return 'Louise'
//             } 
            
//             if ((potencia - 2) % 2 === 0 && counter % 2 !== 0) {
//                 return 'Richard'
//             }
//         }
        
//         if (subNmaiorNUmero === 1) {
//             if ((counter % 2) === 0) {
//                 return 'Louise'
//             }
//             if ((counter % 2) !== 0) {
//                 return 'Richard'
//             }
//         } 
        
//         if (subNmaiorNUmero > 1) {
//             counter++
//             return counterGameINside(subNmaiorNUmero)
//         }
//     }

//     return counterGameINside(n)
// }

function counterGame(n) {
    // Write your code here
    const binaryN = n.toString(2);
    const noOfZerosToTheRight = binaryN.split('1').pop().length;
    const noOfOnes = binaryN.match(/1/g).length;
    console.log(noOfZerosToTheRight, noOfOnes);
    if(!((noOfZerosToTheRight + noOfOnes) % 2)){
        return 'Louise';
    }
    return 'Richard';
}

console.log(counterGame(n))
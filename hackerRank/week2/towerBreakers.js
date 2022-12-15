const n = 2
const m = 6

// function winner(numberOfPlayersMoves) {
//     if (numberOfPlayersMoves % 2 === 0) {
//         return 2
//     } else {
//         return 1
//     }
// }

// function createDivisionNumber(div) {
//     if ((div % 2) === 0 ) {
//         return div/2 
//     } else {
//         return (div - 1)/2
//     }
// }

// function towerBreakers(n, m) {
//     const numberOfTowers = n
//     const heightOfTowers = m
//     let arrayTowers = []
//     let arrayFinish = []
//     let firstDivision = 0
//     let numberOfPlayersMoves = 0
//     var divisionNumber = heightOfTowers

//     for (let i = 0; i < numberOfTowers; i++) {
//         arrayTowers.push(heightOfTowers)
//         arrayFinish.push(1)
//     }

//     while (JSON.stringify(arrayTowers) !== JSON.stringify(arrayFinish)) {
//         divisionNumber = createDivisionNumber(divisionNumber)
        
//         for (let i = 0; i < arrayTowers.length; i++) {
//             const tower = arrayTowers[i]
//             arrayTowers[i] = tower - divisionNumber
//             numberOfPlayersMoves++
//         }
//     }

//     return winner(numberOfPlayersMoves)
// }

function towerBreakers(n, m) {
    if (m === 1) {
        return 2
    }
    if (n%2 === 0) {
        return 2
    }
    return 1
}

console.log(towerBreakers(n, m))
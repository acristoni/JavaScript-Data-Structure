// var matrix = [
//     [112, 42, 83, 119], 
//     [56, 125, 56, 49],          
//     [15, 78, 101, 43], 
//     [62, 98, 114, 108]
// ]

// var matrix = [
//     [1,2],
//     [3,4]
// ]

const matrix = [
    [107, 54, 128, 15],
    [12, 75, 110, 138],
    [100, 96, 34, 85],
    [75, 15, 28, 112]
]

//depois da primeira passada
// const matrix = [
//     [ 15, 128, 54, 107 ],
//     [ 138, 110, 75, 12 ],
//     [ 100, 96, 34, 85 ],
//     [ 75, 15, 28, 112 ]
// ]

function flippingMatrix(m) {
    var matrix = m
    let maxNumbersPerRow = []
    let maxNumbersPerRowAfterSortColumn = []
    let result = 0
    for (const row of matrix) {
        const maxRow = Math.max(...row)
        maxNumbersPerRow.push(maxRow)
    }

    //reverte coluna
    for (let i = (maxNumbersPerRow.length - 1); i >= maxNumbersPerRow.length/2 ; i--) {
        const maxNumber = maxNumbersPerRow[i]
        const indexRow = matrix[i].findIndex(element => element === maxNumber)
        let isCollumnConverteder = 0
 
        for (let j = 0;  j < matrix.length/2; j++ ) {

            if (maxNumber > matrix[j][indexRow]) {
                isCollumnConverteder++
            }            
        }

        if (isCollumnConverteder === parseInt(maxNumbersPerRow.length/2)){
            for (let i = 0; i < matrix.length/2; i++) {
                const temp = matrix[i][indexRow]
                matrix[i][indexRow] = matrix[matrix.length - i - 1][indexRow]
                matrix[matrix.length - i - 1][indexRow] = temp   
            }
        }
    }
    
    for (const row of matrix) {
        const maxRow = Math.max(...row)
        maxNumbersPerRowAfterSortColumn.push(maxRow)
    }
    
    //reverte linha
    for (let i = 0; i < maxNumbersPerRowAfterSortColumn.length/2 ; i++) {
        const maxNumber = maxNumbersPerRowAfterSortColumn[i]
        const indexRow = matrix[i].findIndex(element => element === maxNumber)
        
        if (indexRow >= matrix.length/2){
            matrix[i] = matrix[i].reverse()
        }
    }
    
    console.log("🚀 ~ file: flippingMatrix.js:66 ~ flippingMatrix ~ matrix", matrix)
    for (let i = 0; i < maxNumbersPerRow.length/2; i++) {
        for (let j = 0; j < maxNumbersPerRow.length/2; j++) {
            const number = matrix[i][j]
            result = result + number
        }
    }
    
    return result
}

// function flippingMatrix(matrix) {
//     let matrixLinear = ''
//     let result = 0

//     for (const row of matrix) {
//         matrixLinear += `${row},`
//     }

//     const arrayFromMatrix = matrixLinear.split(',')

//     const arraysort = arrayFromMatrix.sort(function(a, b){return b-a});
//     console.log("🚀 ~ file: flippingMatrix.js:93 ~ flippingMatrix ~ arraysort", arraysort)

//     for (let i = 0; i < matrix.length; i++) {
//         const number = parseInt(arraysort[i])
//         result += number
//     }

//     return result
// }

console.log(flippingMatrix(matrix))
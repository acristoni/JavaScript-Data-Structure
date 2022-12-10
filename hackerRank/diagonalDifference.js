const twoDimensionArray = [
    [11,2,4,5],
    [4,5,6, 5],
    [10,8,-12, 5],
    [4,5,6,5],
]

function diagonalDifference(arr) {
    let sumLeftToRight = 0
    let sumRightToLeft = 0
    const maxIndex = arr.length - 1

    for (let i = 0; i <= maxIndex; i++) {
        let num = arr[i][i]
        sumLeftToRight = sumLeftToRight + num
    }
    
    for (let i = 0; i <= maxIndex; i++) {
        let num = arr[maxIndex - i][i]
        sumRightToLeft = sumRightToLeft + num
    }

    return Math.abs(sumLeftToRight - sumRightToLeft)
}

console.log(diagonalDifference(twoDimensionArray))
const arr = [-1, -1, 0, 1, 1]

function plusMinus(arr) {
    const arrayLength = arr.length
    let positiveCount = 0
    let zeroCount = 0
    let negativeCount = 0

    for (const num of arr) {
        if (num > 0) {
            positiveCount++
        }
        
        if (num < 0) {
            negativeCount++
        }
        
        if (num === 0) {
            zeroCount++
        }
    }
    
    const portionPositive = (positiveCount/arrayLength).toFixed(6)
    const portionNegative = (negativeCount/arrayLength).toFixed(6)
    const portionZero = (zeroCount/arrayLength).toFixed(6)
    
    console.log(portionPositive)
    console.log(portionNegative)
    console.log(portionZero)

    return
}

plusMinus(arr)
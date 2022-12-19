const K = 3
const N = '148'

function superDigit(n, k) {
    const numberTimes = k
    const digitArray = n.split('')
    let resultPerPart = 0

    while (resultPerPart.length > 1 || typeof resultPerPart === 'number') {
        if (typeof resultPerPart === 'number') {
            resultPerPart = digitArray.reduce((a,b) => parseInt(a) + parseInt(b))
        } else {
            resultPerPart = resultPerPart.reduce((a,b) => parseInt(a) + parseInt(b))
        }    
        resultPerPart = resultPerPart.toString().split('')
    }

    const primitiveDigiteSum = resultPerPart[0]
    const sumPrimitiveDig = parseInt(primitiveDigiteSum)
    let resultTotal = sumPrimitiveDig*numberTimes
    let arrayResultTotal = resultTotal.toString().split('')

    while (arrayResultTotal.length > 1) {
        resultTotal = arrayResultTotal.reduce((a,b) => parseInt(a) + parseInt(b))
        arrayResultTotal = resultTotal.toString().split('')
    }

    return resultTotal
}

console.log(superDigit(N, K))
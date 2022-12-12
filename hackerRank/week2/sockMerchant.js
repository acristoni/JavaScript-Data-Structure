const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
    let result = 0
    const sortArray = ar.sort()

    for (let i = 0; i < n; i++){
        if (sortArray[i] === sortArray[i+1]) {
            result++
            i++
        }
    }

    return result
}

console.log(sockMerchant(n, ar))
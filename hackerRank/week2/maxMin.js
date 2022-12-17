const k = 3
const arr = [100, 200, 300, 350, 400, 401, 402]

function maxMin(k, arr) {
    const sortArray = arr.sort(function(a, b){return a-b});
    let result = sortArray[k -1] - sortArray[0]

    for (let i = 0; i < arr.length - k + 1; i++) {
        const number1 = sortArray[i]
        const number2 = sortArray[k + i - 1]

        if (number2 - number1 < result) {
            result = number2 - number1
        }

    }

    return result
}

console.log(maxMin(k, arr))
const s = [1, 2, 1, 3, 2] //array
const d = 3 //soma dos elementos
const m = 2 //length do subarray

function birthday(s, d, m) {
    let result = 0

    for (let i = 0; i <= (s.length - m); i++) {
        let subarray = []
        let sum = 0

        for (let j = i; j < (m + i); j++){
            subarray.push(s[j])
        }

        for (const number of subarray) {
            sum = sum + number
        }

        if (sum === d) {
            result++
        }
    }

    return result
}

console.log(birthday(s, d, m))
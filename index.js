// https://youtube.com/shorts/2WKFvhKvOns?feature=share

// spinner
// https://youtube.com/shorts/fHYrSqJQaKw?feature=share

// movimento suave na anvegação na mesma página
https://youtube.com/shorts/cxAoURrEpi4?feature=share

const numbers = [1,2,3,3,2]
const k = 1

function countPairs(numbers, k) {
    const setNumbes = new Set(numbers)
    const arrayNumbers = [...setNumbes]
    let count = 0
    
    for (let i = 0; i < arrayNumbers.length; i++) {
        for (let j = i; j < arrayNumbers.length; j++) {
            let a = arrayNumbers[i]
            let b = arrayNumbers[j]
            
            if ((a + k) === b) {
                count++
            }
        }
    }
    
    return count

}

console.log(countPairs(numbers, k))
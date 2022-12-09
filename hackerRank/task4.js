import { getOccurrence } from "../getOccurrence.js"

// // Exemplo 1
// const A = [2,2,2,2,3,3,3,4,4,4,5,5,1]
// const Y = 3
//result = [2,4,3]

// Exemplo 2
const A = [1,1,2,2]
const Y = 2



function solution(A, Y){
    let result = []
    const arraytoSet = new Set(A)
    const queryNumbers = [...arraytoSet]
    let numbersWithOccurrenceArray = []

    for (const number of queryNumbers) {
        let occurrence = getOccurrence(A, number)

        let numberAndOccurrence = {
            number: number,
            occurrence: occurrence
        }

        numbersWithOccurrenceArray.push(numberAndOccurrence)        
    }

    const numbersMinYOccurrence = numbersWithOccurrenceArray.filter(number => number.occurrence >= Y)

    const numbersSortByOccurrence = numbersMinYOccurrence.sort((a, b) => b.occurrence - a.occurrence)

    /**ORGANIZA DE FORMA DECRESCENTE */
    for (let i = 0; i < numbersSortByOccurrence.length; i++) {
        for (let j = i; j > 0; j--) {
            if (numbersSortByOccurrence[j-1].occurrence === numbersSortByOccurrence[j].occurrence) {
                if (numbersSortByOccurrence[j-1].number < numbersSortByOccurrence[j].number ) {
                    const change = numbersSortByOccurrence[j]
                    numbersSortByOccurrence[j] = numbersSortByOccurrence[j-1]
                    numbersSortByOccurrence[j-1] = change
                }
            }
        }
    }

    for (const number of numbersSortByOccurrence) {
        result.push(number.number)
    }

    return result       
}

console.log(solution(A, Y))
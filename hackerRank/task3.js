import { getOccurrence } from '../getOccurrence.js'

const paragraph = "Where is the cat? The cat is under the table."
const Y = 2

function solution(paragraph, Y) {
    let result = []
    const paragraphWithoutSymbols = paragraph.replace(/[^a-zA-Z ]/g, "")
    const arrayParagraph = paragraphWithoutSymbols.split(" ")
    const arrayToSet = new Set(arrayParagraph)
    const queryWordsArray = [...arrayToSet]
    let wordsWithOccurenciesArray = []

    for (const queryWord of queryWordsArray) {
        let occurence = getOccurrence(arrayParagraph, queryWord)

        let wordWithOccurence = {
            occurence:occurence,
            word:queryWord
        }

        wordsWithOccurenciesArray.push(wordWithOccurence)
    }

    const arrayWordsWithYOccurencies = wordsWithOccurenciesArray.filter(word => word.occurence >= Y)

    const wordsSortByOccurrence = arrayWordsWithYOccurencies.sort((a, b) => a.occurence - b.occurence)

    /**ORGANIZA DE FORMA CRECENTE */
    for (let i = 1; i < wordsSortByOccurrence.length; i++) {
        for (let j = i; j > 0; j--) {
            if (wordsSortByOccurrence[j - 1].occurence === wordsSortByOccurrence[j].occurence) {
                if (wordsSortByOccurrence[j - 1].word > wordsSortByOccurrence[j].word){
                    const change = wordsSortByOccurrence[j]
                    wordsSortByOccurrence[j] = wordsSortByOccurrence[j - 1]
                    wordsSortByOccurrence[j - 1] = change
                }
            } 
        }
    }

    for (const word of wordsSortByOccurrence) {
        result.push(word.word)
    }

    return result
}

console.log(solution(paragraph, Y))
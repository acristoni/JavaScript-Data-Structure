const strings = ['ab', 'ab', 'abc']
const queries = ['ab', 'abc', 'bc']

export function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

function matchingStrings(strings, queries) {
    let results = []

    for (const query of queries) {
        let occurrence = getOccurrence(strings, query)
        results.push(occurrence)
    }
    return results
} 

console.log(matchingStrings(strings, queries))
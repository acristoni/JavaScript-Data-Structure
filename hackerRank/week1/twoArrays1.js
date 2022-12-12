const A = [84, 2, 50, 51, 19, 58, 12, 90, 81, 68, 54, 73, 81, 31, 79, 85, 39, 2]
const B = [53, 102, 40, 17, 33, 92, 18, 79, 66, 23, 84, 25, 38, 43, 27, 55, 8, 19]
const k = 94

function twoArrays(k, A, B) {
    let comparasionArray = []
    
    for (const number of B) {
        const comparasionNumber = k - number
        comparasionArray.push(comparasionNumber)
    }

    const sortQueriesArray = comparasionArray.sort(function(a, b){return a-b});
    const sortA = A.sort(function(a, b){return a-b});

    for (let i = 0; i < A.length; i++) {
        if (!(sortA[i] >= sortQueriesArray[i])){
            return 'NO'
        }
    }

    return 'YES'
}

console.log(twoArrays(k, A, B))
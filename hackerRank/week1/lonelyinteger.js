const a = [1,2,3,4,3,2,1]

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

function lonelyinteger(a) {
    const setA = new Set(a)

    for (const query of setA) {
        let occurrence = getOccurrence(a, query)

        if (occurrence === 1) {
            return query
        }
    }
}


console.log(lonelyinteger(a))
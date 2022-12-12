const s = "We promptly judged antique ivory buckles for the next prize"
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

function pangrams(s) {
    const alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
    let result = ''
    const sToLower = s.toLowerCase()
    const arrayString = sToLower.split('')

    for (const letter of alphabet) {
        const occurence = getOccurrence(arrayString, letter)

        if (occurence === 0) {
            return 'not pangram'
        }
    }

    return 'pangram'
}

console.log(pangrams(s))
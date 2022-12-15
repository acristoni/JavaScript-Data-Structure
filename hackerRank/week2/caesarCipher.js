const k = 27
const s = '1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M'
const expected = '1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N'
                 '1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHundefinedt1n10fz7fVk62XW2fyMU4D83undefinedm7R80N'

function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetUpperCase = alphabet.toUpperCase()
    const arrayAlphabet = alphabet.split('')
    const arrayUpperCaseAlphabet = alphabetUpperCase.split('')
    let criptoArrayAphabet = []
    let criptoUpperCaseArrayAphabet = []
    let frase = ''

    for (let i = 0; i < arrayAlphabet.length; i++) {
        let indexCriptoArray = 0

        if (i + k >=  arrayAlphabet.length) {
            indexCriptoArray = i + k - arrayAlphabet.length 
            while (indexCriptoArray >= arrayAlphabet.length) {
                indexCriptoArray -= arrayAlphabet.length
            }
        } else {
            indexCriptoArray = i + k
        }
        criptoUpperCaseArrayAphabet.push(arrayUpperCaseAlphabet[indexCriptoArray])
        criptoArrayAphabet.push(arrayAlphabet[indexCriptoArray])
    }

    for (let i = 0; i < s.length; i++) {
        let letter = s[i]
        const lowerCaseLetterIndex = arrayAlphabet.findIndex(element => element === letter)
        const upperCaseLetterIndex = arrayUpperCaseAlphabet.findIndex(element => element === letter)

        if (lowerCaseLetterIndex >= 0) {
            frase += criptoArrayAphabet[lowerCaseLetterIndex]
        } else if (upperCaseLetterIndex >= 0) {
            frase += criptoUpperCaseArrayAphabet[upperCaseLetterIndex]
        } else [
            frase += s[i]
        ]
    }

    return frase.toString()
}

console.log(caesarCipher(s, k) === expected)
// console.log(caesarCipher(s, k))
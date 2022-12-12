const s = '001010'
const t = '100101'

function XOR(s,t) {
    let result = ''

    const arrayNumber1 = s.split('')
    const arrayNumber2 = t.split('')

    for (let i = 0; i < arrayNumber1.length; i++){
        if (arrayNumber1[i]===arrayNumber2[i]) {
            result = result + '0'
        }
        if (arrayNumber1[i]!==arrayNumber2[i]) {
            result = result + '1'
        }
    }

    return result
}

    console.log(XOR(s,t))
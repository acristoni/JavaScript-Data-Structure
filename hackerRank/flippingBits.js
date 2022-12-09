const n = 802743475

function flippingBits(n){
    //CONVERTE N DEC -> BIN
    const nBinary = n.toString( 2 );

    //TROCAR 0 -> 1 E 1 -> 0 32 BITS
    let opostBinary = ''

    for (let i = (nBinary.length - 1); i >= (nBinary.length - 32); i--) {
        let char = nBinary[i]
        let charChanged = ''

        if (char === '1') {
            charChanged = '0'
        }

        if (char === '0' || char === undefined) {
            charChanged = '1'
        }

        opostBinary = charChanged + opostBinary
    }

    //CONVERTE BIN -> DEC
    const decAgain = parseInt(opostBinary, 2)

    return decAgain

}

console.log(flippingBits(n))
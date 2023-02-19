function getMin(s) {
    let arrayS = s.split('()')
    let numberOfRight = 0
    let numberOfLeft = 0
    let arrayLimpo = []

    if (arrayS.length === 1) {
        return arrayS[0].length
    }

        const arrayFilterd = arrayS.filter(elem => elem !== '')
        const stringFiltered = arrayFilterd.toString()
        const arrayLimpoprimeiro = stringFiltered.split('(,)')
        const stringDENvo = arrayLimpoprimeiro.toString()
        const arrayLimposegundo = stringDENvo.split('(,,)')

        function limparArray(array) {
            const stringDENvodenovo = array.toString()
            const arrayLimpoTerceiro = stringDENvodenovo.split('(,)')

            if (arrayLimpoTerceiro.length === 1) {
                arrayLimpo = arrayLimpoTerceiro
            } else {
                return limparArray(arrayLimpoTerceiro)
            }
        }

        limparArray(arrayLimposegundo)

    for (let i = 0; i < arrayLimpo.length; i++) {
       const element = arrayLimpo[i]

       for (let x = 0; x < element.length; x++) {
            const parentese = element[x]    
        
            if (parentese === "(") {
                numberOfRight++
            }

            if (parentese === ")") {
                numberOfLeft++
            }
        }
        
    }
     
    return numberOfLeft + numberOfRight

}

console.log(getMin(")))(()()(()))))))))))))))))()))))))()))))))))))))))))))))()))())())())())))()))()))()())))))())))))))((((()()())())))))))))))))))))))())()))())())))()()))))()))))))()))))))()(())))))())))))))))))))))))()))))))(())))())))))))))))())))))))))))))))))())))))(()))))))))))()))))))))())))(()))())))())()))())))))()))())))()))))))))))))))))()))))))))())))))(())()(()))))))))))(()))))))))))))))))))))))()))))))))()))))))))))))))))))))()))())())))())))(()(())))))()())))())))))))))))))))())))))()((())))())(()))))((())))))))))()))))))())))))))))))))()()))(())))))))))))()))))())))))))(()))))))))())))))))))())))))))())))))()))))))))))()())))))))())))))))))))))))())))))())))))))))))))()))()))))()())))))))))())())))()))))())))(())))))))))))))))))))))())()))))))))))))))))()))())))())))(())))))((()))))))))()))))))))))()))))))))()))()))))))())))())(()))))((())))))))()())))))))))()))))))))))))))))()))())))()))))))())))))))))))))())))))))))))()))))()))())))))(()))()))))))))())))))())))))))()()))))))))))))()))"))
const n = 12 //numero de paginas
const p = 5 //pagina para ser encontrada

function pageCount(n, p) {
    //encontrar indicie da página
    if (p === 0 | p === 1 | p === n) {
        return 0
    }
    //cria array bidemensional]
    const max = n % 2 === 0 ? n + 1 : n
    let index = 0
    let arrayBidimensional = []
    for (let i = 0; i < max; i++) {
        if (n % 2 === 0 && i === n) {
            const subArray = [i]
            arrayBidimensional.push(subArray)
        } else {
            const subArray = [i,(i+1)]
            arrayBidimensional.push(subArray)
            i++
        }
    }

    if (p % 2 === 0) {
        index = arrayBidimensional.findIndex(element => JSON.stringify(element) === JSON.stringify([p, p+1]))
    }

    if (p % 2 !== 0) {
        index = arrayBidimensional.findIndex(element => JSON.stringify(element) === JSON.stringify([p-1, p]))
    }

    const pathRigthToLeft = index
    const pathLeftToRight = arrayBidimensional.length - index - 1

    if (pathRigthToLeft < pathLeftToRight) {
        return pathRigthToLeft
    } else {
        return pathLeftToRight
    }
}

console.log(pageCount(n, p))
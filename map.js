const resultData = new Map()

resultData.set('avarage', 1.53)
resultData.set('lastResult', null)

const Brasil = {name: 'Brasil', population: 220} //object as a key

resultData.set(Brasil, 10)

for (const El of resultData) {
    // console.log(El)
}

//HOW TO RETRIEVE VALUE
// console.log(resultData.get(Brasil))

//HOW TO DELETE VALUE
resultData.delete(Brasil)
console.log(resultData)
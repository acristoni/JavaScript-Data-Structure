//BUSCA DE UM ELEMENTO
const arrayDatas = [
    "2022-11-26",
    "2022-11-27",
    "2022-12-17",
    "2022-12-18",  
    "2022-01-28",
    "2022-01-29",
    "2022-02-25",
    "2022-02-26",
    "2022-03-25",
    "2022-03-26",
]

const result = arrayDatas.find(element => element === "2022-04-23")
const index = arrayDatas.findIndex(element => element === "2022-04-23")

function validationDate (result){
    if ( result ) {
        // console.log("data existe")
        return
    }
    
    // console.log("data não existe")
}

validationDate(result)

//LAÇO DE REPETIÇÃO
for (const element of arrayDatas) {
    // console.log(element)
}

//REMOVER ELEMENTO
console.log(arrayDatas)
arrayDatas.splice(2,1)
console.log(arrayDatas)
// // array nativamente o index inicia com o '0', basicamente o primeiro item

// const fruits = ['maçã', 'banana', 'laranja']
// console.log(fruits)
// console.table(fruits)

// // metodo lenght conta a quantidade de itens nesse cenário, porém inicia com '1'.
// console.log(fruits.length)

// método length conta a quantidade de caract, nesse cenário, porém inicia com '1'
const fullName = 'JOSE MARIA AUGUSTO'
fullName.NameCapitalize
console.log(fullName.length)

function ClienteSaudacao(fullName) {
    // string => converti para array de string
    let splitName = fullName.split(' ')
    // peguei o primeiro indice
    let fisrtName = splitName[0]
    // peguei o ultimo indice
    let lastName = splitName[splitName.length - 1]
    
    console.log(`Olá ${CapitalizeWord(fisrtName)} ${CapitalizeWord(lastName)}`)
}
ClienteSaudacao(fullName)

let word = 'Palavra'
// console.log(word)
// console.log(word.toUpperCase())
// console.log(word.toLowerCase())

function CapitalizeWord(word){
    let lower = word.toLowerCase()
    let capitalize = lower.charAt(0).toUpperCase() + lower.slice(1)
    return capitalize
}

console.log(CapitalizeWord('LUCAS'))
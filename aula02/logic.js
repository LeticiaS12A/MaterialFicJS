let idade = 20
let dinheiro = true
let carro = true
let moto = true


// e = &&
// ou = ||
// não = !

//  comparação, 'e' da logica, !diferente de true
let podeBeber = (idade >= 18 && dinheiro) && !carro || !moto
console.log(podeBeber)

let menino = 15

//  condição
const xequeMate = menino >= 18 ? console.log('vai trabalhar')
: console.log('pode jogar video game')

console.log(xequeMate)


// let menina = 15

// const jogoDoTigrinho = () => menina >= 18 && console.log('pode jogar aviãozinho')
// console.log(jogoDoTigrinho(), 'aqui')
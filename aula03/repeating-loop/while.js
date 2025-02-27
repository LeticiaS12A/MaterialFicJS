//while padrão

// let i = 0

// // laço sobre a condição
// while(i < 10){
//     //bloco de codigo
//     console.log(i, 'while')
//     //atualiza a variavel
//     i++
// }

//while que para no primeiro numero par

// while(i % 2 == 0){
//     console.log(`${i}: numero par`)
//     i++
// }

//while contagem regressiva

// let count = 10

// while(count > 0){
//     console.log('contagem regressiva:', count)
//     count--
// }

// console.log('Fim da contagem')

//while conta um valor de um numero
let num = 1
let soma = 0

while(num <= 10000000000){
    //soma = soma + num
    console.log(num)
    soma += num
    num++
}

console.log(`A soma dos números de 0 a 10 é: ${soma}`)
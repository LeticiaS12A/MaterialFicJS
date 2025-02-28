const numbers = [1, 2, 3, 4, 5]

const soma = numbers.reduce((acumulador, valorCorrente) => 
    acumulador + valorCorrente, 0
)

console.log(soma)
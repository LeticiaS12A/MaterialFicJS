const numbers = [1, 2, 3, 4]

let num = numbers.map((number, i) => {
    return number * 2
})

console.table(num)
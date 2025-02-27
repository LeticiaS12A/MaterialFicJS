// let name = 'Leticia'

// function Saudacao (name) {
//     console.log(`Bem vindo(a), ${name}!!!`)
// }
// Saudacao('Leticia')

function BuscaPares(num){
    
    for(i = 0; i <= num; i++){
        if(i % 2 == 0){
            console.log(`${i} é par`)
        }
    }

}

BuscaPares(1000)
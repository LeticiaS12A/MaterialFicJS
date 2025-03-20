export default function Feth() {
    
    const url = 'https://viacep.com.br/ws/05783050/json/'

    fetch(url)
    .then(res => {
        if(!res.ok){
            throw new Error('Deu ruim nisso aqui:' + res.status)
        }
        return res.json()
    })
    .then(data => {
        console.log('Dados recebidos: ', data)
    })
    .catch(err => {
        console.error('Error:', err)
    })
    
    return <h1>Feth</h1>
}

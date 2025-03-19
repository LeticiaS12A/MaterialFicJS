import { useEffect, useState } from "react"

export default function Fetch() {
        //dado, seta o dado,   estado inicial
    const [ data, setData ] = useState({})

    // console.log(data, 'estdo inicial')
    
        //mock
    const url = 'https://viacep.com.br/ws/05783050/json/'

    useEffect(() => {
        console.log('rodou useEffect')
    }, [])

    // fetch(url)
    // .then(res =>{
    //     if(!res.ok){
    //     throw new Error("deu ruim nisso aqui:" + res.status)
    //     }
    //     return res.json()
    // })
    // .then(data =>{
    //     //     inserindo o dado na variavel
    //     return setData(data)
    // })
    // .catch(err => {
    //     console.error('Error', err)
    // })

    // console.log(data, 'estado depois do setData')

    return(
        <div className="">
            <h1>fetch</h1>
            {/* <h1>{resData?.cep}</h1> */}
        </div>
    )
}
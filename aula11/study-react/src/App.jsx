import { useEffect, useState } from "react"
import "./App.css"
// import Accordion from "./class/accordion"
// import ApiPokemon from "./class/apiPokemon"
import { Card } from "./class/card"
// import Example from "./class/example"
// import Fetch from "./class/fetch"
// import Count from "./class/count"
// import Js from './class/js'

export default function App(){

    const [ product, setProduct ] = useState(null)
    // primeira coisa a ser chamada na função App()
    useEffect(() => {
        console.log('Entrou no useEffect')
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [])

    console.log(product)

    return ( 
        <div className=""> 
            {
                product && product.map((prd, id) => {
                    return <Card key={id} image={prd.image} title={prd.category} description={prd.description}/>
                })
            }    
        </div>
    )
}
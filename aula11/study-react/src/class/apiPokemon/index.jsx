import React, { useState } from "react";
import './styles.css';

export default function ApiPokemon() {
    // Aloca o nome do pokemon que vem do input
    const [ pokemon, setPokemon ] = useState('')
    // Aloca o dado que vem da API
    const [ data, setData ] = useState(null)

    const [ error, setError ] = useState(null)
    // informa quando está carregando
    const [ loading, setLoading ] = useState(false)

    // Variável que dispara uma função
    const handleGetPokemon = () => {
        //verifica se tem texto dentro da variavel pokemon
        if (!pokemon) return;
        // Usuario clicou antes de começar a processar, 
        // eu coloco para carregar
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        
        .then(res => {
            setError(err => {
                if(!res.ok){
                    
                }
            }
            )
            
            setLoading(false)
            return res.json()
            
        })
        .then(result => {
            // Salvando o dado do pokemon na variavel
            setData(result)
            // Desligando o loading
            setLoading(false)
        })
        // .catch(err => {
        //     console.error()
        //     setLoading(false)
        // })

        
    }

    console.log(data)

    return(
        <div className="api-pokemon">
            <h1>Busque seu Pokemon Favorito</h1>
            <input type="text" placeholder="Quem é esse pokemon?" 
                    onChange={(e) => setPokemon(e.target.value)}
                    value={pokemon}
            />
            <button
                // Caso não tenha nenhum nome o botão fica disabled
                disabled={pokemon.length <= 0 ? true : false}
                onClick={handleGetPokemon}
            >Gotta Catch</button>

            {/* { quando Loading estiver true mostra o paragrafo } */}
            { loading && <p>Carregando...</p>}
            {/* { quando o data da api chegar, traz as informação } */}
            { data && 
            
            <div className="">
                <img src={data.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`Foto do ${pokemon}`} />
                <p>{data.name}</p>
            </div>

            }
            { error && <p>Error buscar pokemon: ${err}</p> }
        </div>
    );
}
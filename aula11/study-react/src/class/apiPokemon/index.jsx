import React, { useState } from "react";
import './styles.css';

export default function ApiPokemon() {

    const arrayTypes = {

        'normal' : '#ffdfdf',
        'fighting' : '#ff9368',
        'flying' : '#596f8b',
        'poison' : '#b96fff',
        'ground' : '#ce9363',
        'rock' : '#83422e',
        'bug' : '#35832e',
        'ghost' : '#452e83',
        'steel' : '#5d8f77',
        'fire' : '#ff4545',
        'water' : '#5d90ff',
        'grass' : '#4dc542',
        'electric' : '#fcff51',
        'psychic' : '#c542a9',
        'ice' : '#83f1ff',
        'dragon' : '#62bdc9',
        'dark' : '#17033d',
        'fairy' : '#990d7b',
        'stellar' : '#d2e3e4',
        'unknown' : '#fff',
          
        }
        
    console.log(arrayTypes.dark)

    // Aloca o nome do pokemon que vem do input
    const [ pokemon, setPokemon ] = useState('')
    // Aloca o dado que vem da API
    const [ data, setData ] = useState(null)

    // informa quando está carregando
    const [ loading, setLoading ] = useState(false)
    
    // Variavel para trazer a informação caso tenha um erro 
    const [ erro, setErro ] = useState(null)

    // Variável que dispara uma função
    const handleGetPokemon = () => {
        //verifica se tem texto dentro da variavel pokemon
        if (!pokemon) return;
        // Usuario clicou antes de começar a processar, 
        
        // limpando a variavel data
        setData(null)
        // limpando a varivel error
        setErro(null)
        // eu coloco para carregar
        setLoading(true)
        

        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

            .then(res => res.json())
            .then(result => {
                // Salvando o dado do pokemon na variavel
                setData(result)
                // Desligando o loading
                setLoading(false)
            })
            .catch(() => {
                setErro("Ocorreu um erro ao buscar pokemon")
                setLoading(false)
            })
        }, 1000)

    }

    const handleTypeColor = data && arrayTypes[data?.types?.[0].type?.name]

    console.log(data)

    return(
        <div className="api-pokemon" style={{ backgroundColor: handleTypeColor}}>
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
            {/* {quando a promisse for fejeitada mostra o erro } */}
            {erro && <p>{erro}</p> }
            {/* { quando o data da api chegar, traz as informação } */}
            { data && 
            
            <div className="info-pokemon">
                <img src={data.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`Foto do ${pokemon}`} />
                <p>{data.name}</p>
            </div>
            }
        </div>
    );
}
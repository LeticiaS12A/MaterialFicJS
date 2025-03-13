export default function Js(props) {

    let brand = {
        name: 'Suporte',
        founded: 2023,
        city: 'São Paulo'
    }

    const {city} = brand

    return <h1>nome completo: {city} {brand.founded}</h1>
}

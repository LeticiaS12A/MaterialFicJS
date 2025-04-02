import { Link } from "react-router-dom"
import { Titulo } from "./style"

export function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">About</Link>
            <Titulo>Titulo por styled-components</Titulo>
        </div>
    )
}
import { use, useState } from "react"
import './style.css'
import setaCima from './assets/setaCima.svg'
import setaBaixo from './assets/setaBaixo.svg'
import ModalContact from "../modals"

export default function Accordion(){
    
    const[active , setActive] = useState(false)

    function HendleActive(){
        setActive(prevState => !prevState)
    }

    const[modals , setModals] = useState(false)

    function OpenModal(){
        setModals(prevState => !prevState)
    }

    
    return <div className="accordion">
        <div className="topo">
            <h1>Question text goes here</h1>
            <button onClick={OpenModal}>Contact</button>
            <button onClick={HendleActive}><img src={active ? setaCima : setaBaixo} alt={active ? "seta para cima" : 'setaBaixo'}  /></button>
        </div>
        {active && (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
        eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus 
        tristique posuere.</p>
        )}
        {modals && (
            <ModalContact/>
        )}
    </div>
}
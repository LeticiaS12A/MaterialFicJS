import { useState } from "react";
import './style.css'
import close from './assets/close.svg'
import OpenModal from "../accordion"

export default function ModalContact(){
    // const[open, setOpen] = useState(false)

    // function hendleModal(){
    //     setOpen(prevState => !prevState)
    // }

    return (
            <div className="modal">
                <div className="close">
                    <button onClick={OpenModal}><img src={close} alt="" /></button>
                </div>
                <div className="title">
                    <div>
                        <h1>Contact us</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
                
                    <div className="inputs">
                        <form action="">
                            <label for="username">Name</label><br />
                            <input type="text" id="username" name="username"></input><br />
                            
                            <label for="email">Email</label><br />
                            <input type="text" id="email" name="email"></input><br />
                            
                            <label for="message">Message</label><br />
                            <input type="text" id="message" name="message" placeholder="Type your message..."></input>

                        </form>
                        
                    </div>
               
               <div className="checkbox">
                    <input  type="checkbox" /><label htmlFor=""> I accept the  </label><a href="http://">terms</a>
               </div>
                    <div className="submit">
                        <button>Submit</button>
                    </div>

            </div>
    )
}
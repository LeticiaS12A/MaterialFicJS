//importei o css
import './style.css'
import Close from '../../../assets/images/icons/close.svg'

export default function CookiesConsent() {
    return (
        <div className="container">
            <p>By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our Privacy Policy for more information.
            </p>
    
              <div className="button-wrapper">
                <button type="button">Preferences</button>
                <button className='text-button' type="button">Decline</button>
                <button className='text-button black' type="button">Accept</button>
              </div>
                <button className='close' type="button">
                    <img src={Close} alt="icone de fechar" />
                </button> 
        </div>
      )
}
import './App.css';
import FirstComponent from './components/FirstComponent';
import Imagem from './img/hendPixelArt.png'

function Saudacao(fullName){
  
  let splitName = fullName.split(' ')
  let firstName = splitName[0]
  let lastName  = splitName[splitName.length - 1]
  
  return `${firstName} ${lastName}`
}

function Welcome() {
    return <div>
      <h1>Welcome</h1>
      <img src={Imagem} alt="" />

    </div>
}


function App() {

  let word = 'Letícia dos Santos Alves'
  const names = ['Pedro',  'Larissa', 'Joao', 'Marcos', 'Lucas', 'Leticia', 'Nicolas']


  return (
    <>
    <FirstComponent />
    <Welcome />
    <h1>Olá, {Saudacao(word)}</h1>
    {
    names.map((name, index) => {
      return <h1 key={index}>{name}</h1>
    })
    }
    </>
  );
}

export default App;

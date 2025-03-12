import banner from './assets/images/banner.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <p>Medium length banner heading with link goes here</p>
      <img src={banner} className='close' alt="" />
    </div>
  );
}

export default App;

import banner from './assets/images/banner.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <p>Medium length banner heading with link goes here</p>
      <button className='close'>
        <img src={banner} className='close' alt="" />
      </button>
    </div>
  );
}

export default App;

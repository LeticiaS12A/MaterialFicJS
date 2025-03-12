import relumeLogo from "./assets/images/relume-logo.svg";
import webflowLogo from "./assets/images/webflow-logo.svg";
import './App.css';

function App() {
  return (
    <div className="container">
      <p>Used by the world's leading companies</p>
      <div className="logo-companies">
        <img src={webflowLogo} alt="" />
        <img src={relumeLogo} alt="" />
        <img src={webflowLogo} alt="" />
        <img src={relumeLogo} alt="" />
        <img src={webflowLogo} alt="" />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CurrentLocation from './Components/CurrentLocation';

function App() {
  return (
    <div className="App">
     <>
       <div className="container">
        <CurrentLocation />
      </div>

      <div className="footer-info">
        <a href="https://github.com/CoderPoojam">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://itsmepooja.wixsite.com/home">
         Pooja Mandule
        </a>
      </div>
     </>
    </div>
  );
}

export default App;

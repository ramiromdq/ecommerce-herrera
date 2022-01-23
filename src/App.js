import './App.css';
import foto from './fotoperfil2.png';
import NavBar from './components/navbar/NavBar';
import "bootstrap/dist/css/bootstrap.css"



function App() {
  return (
    <div className="App">
 
      <NavBar/>
     
      <header className="App-header">
      <h3> Mi primera app en React </h3>
        <img src={foto} className='App-logo' alt="foto" />   
    
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h6>ECOMMERCE-HERRERA </h6>
        
        </a>

      </header>

      

    </div>

    
  );
}

export default App;

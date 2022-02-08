import "./App.css";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartIcon from "./icon/CartIcon";
import { task } from "./helpers/promises";
import Item from "./components/Item/Item";
import ItemCounts from "./components/ItemCounts/ItemCounts";
import ItemDetailContainer from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
        <h3> Mi primera app en React </h3>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h6>ECOMMERCE-HERRERA </h6>
        </a>
      </header>

      <body className="App-body">
        <ItemDetailContainer />
      </body>
    </div>
  );
}

export default App;

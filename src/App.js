import "./App.css";
import { DetailPage } from "./Components/PokeDetails/DetailPage";
import { PokeCard } from "./Components/PokeDetails/PokeCard";
import TopBar from "./Components/searchbar/SearchBar";

function App() {
  return (
    <div className="App">
      <PokeCard />
    </div>
  );
}

export default App;

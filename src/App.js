import "./App.css";
import { DetailPage } from "./Components/PokeDetails/DetailPage";
import { PokeCard } from "./Components/PokeDetails/PokeCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PokeCard />} />
          <Route path="/pokedetails/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailRecipe from "./pages/DetailRecipe";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/ricette" element={<Recipes />}></Route>
        <Route path="/dettaglio/:title/:id" element={<DetailRecipe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

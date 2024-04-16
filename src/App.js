import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailRecipe from "./pages/DetailRecipe";
import RegistrationUser from "./pages/RegistrationUser";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/ricette" element={<Recipes />}></Route>
        <Route path="/dettaglio/:title/:id" element={<DetailRecipe />}></Route>
        <Route path="/registrazione" element={<RegistrationUser />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

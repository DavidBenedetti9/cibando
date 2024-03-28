import "./App.scss";

import CarouselSlider from "./components/CarouselSlider";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>

      <CarouselSlider></CarouselSlider>

      <div className="container-titolo">
        <h2>App di esempio</h2>
        <p className="paragrafo">Ecco il testo iniziale</p>
      </div>
    </>
  );
}

export default App;

import "./App.scss";
import { useState } from "react";

import styled from "styled-components";

import CarouselSlider from "./components/CarouselSlider";
import Header from "./components/Header";
import Recipes from "./pages/Recipes";

function App() {
  const [evidenziazione, setEvidenziazione] = useState(false);
  const bgDinamico = {
    backgroundColor: evidenziazione ? 'yellow' : 'white',
    fontSize: '50px',
    cursor: 'pointer',
    textAlign: 'left'
  }

  const onEvidenziazione = () => {
    setEvidenziazione(!evidenziazione);
  }

  return (
    <Contenitore>
      <Header></Header>

      <CarouselSlider></CarouselSlider>

      <div className="container-titolo">
        <h2 style={bgDinamico} onClick={onEvidenziazione}>Benvenuti in Cibando</h2>
        <p className="paragrafo">
          Gregorio Samsa, svegliandosi una mattina da sogni agitati, si trovò
          trasformato, nel suo letto, in un enorme insetto immondo. Riposava
          sulla schiena, dura come una corazza, e sollevando un poco il capo
          vedeva il suo ventre arcuato, bruno e diviso in tanti segmenti
          ricurvi, in cima a cui la coperta da letto, vicina a scivolar giù
          tutta, si manteneva a fatica. Le gambe, numerose e sottili da far
          pietà, rispetto alla sua corporatura normale, tremolavano senza tregua
          in un confuso luccichio dinanzi ai suoi occhi. Cosa m’è avvenuto?
          pensò. Non era un sogno. La sua camera, una stanzetta di giuste
          proporzioni, soltanto un po’ piccola, se ne stava tranquilla fra le
          quattro ben note pareti. Sulla tavola, un campionario disfatto di
          tessuti - Samsa era commesso viaggiatore e sopra, appeso alla parete,
          un ritratto, ritagliato da lui - non era molto - da una rivista
          illustrata e messo dentro una bella cornice dorata: raffigurava una
          donna seduta, ma ben dritta sul busto, con un berretto e un boa di
          pelliccia; essa levava incontro a chi guardava un pesante manicotto,
          in cui scompariva tutto l’avambraccio. Lo sguardo di Gregorio si
          rivolse allora verso la finestra, e il cielo fosco{" "}
        </p>
      </div>
      <Recipes></Recipes>
    </Contenitore>
  );
}

const Contenitore = styled.div`
background-color: white;

h2 {
  margin-left: 10px;
}

p {
  width: 95%;
  margin: auto;
  text-align: justify;
}
`

export default App;

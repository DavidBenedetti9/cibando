import React, { useEffect, useState } from "react";

//service
import RecipesApi from "../api/recipeApi";

//components
import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";

const Recipes = (props) => {
  const [ricette, setRicette] = useState([]);
  const [titolo, setTitolo] = useState("");

  async function getAllRecipes() {
    try {
      const response = await RecipesApi.getRecipes();
      if (response) {
        setRicette(response.sort((a, b) => b._id - a._id));
      } else {
        setRicette([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function titoloDalFiglio(data) {
    console.log("titolo", data);
    console.log(titolo);
    if (titolo === data) {
      setTitolo(null);
    } else {
      setTitolo(data);
    }
  }

  //all'avvio del componente
  useEffect(() => {
    console.log("sei entrato");
    getAllRecipes();

    return () => {
      console.log("sei uscito dal componente");
      setRicette([ricette]);
    };
  }, []);

  //modifica
  useEffect(() => {
    if (ricette.length > 1) {
      console.log("hai ricevuto le ricette dal server", ricette);
    }
  }, [ricette]);

  return (
    <Contenitore>
      <div className="altezza-titolo">
        <h2 className="title">Le nostre ricette</h2>
        {titolo && <h3 className="titolo-mod"> Titolo ricevuto: {titolo}</h3>}
      </div>
      <RecipeCard
        ricette={ricette}
        onTitoloRicevuto={titoloDalFiglio}
        pag="ricette"
      ></RecipeCard>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;

  .title {
    padding: 5px 15px;
  }
  .altezza-titolo {
    height: 110px;
  }
  .titolo-mod {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Recipes;

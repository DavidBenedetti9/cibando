import React, { useEffect, useState } from "react";

//service
import RecipesApi from "../api/recipeApi";

//components
import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";

const Recipes = () => {
  const [ricette, setRicette] = useState([]);

  async function getAllRecipes() {
    try {
      const response = await RecipesApi.getRecipes();
      if (response) {
        setRicette(response);
      } else {
        setRicette([]);
      }
    } catch (error) {
      console.log(error);
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
      <h2 className="title">Le nostre ricette</h2>
      <RecipeCard ricette={ricette}></RecipeCard>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;

  .title {
    padding: 5px 15px;
  }
`;

export default Recipes;

import React, { useEffect, useState } from "react";
import RecipesApi from "../api/recipeApi";

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

  return <div>Ricette</div>;
};

export default Recipes;

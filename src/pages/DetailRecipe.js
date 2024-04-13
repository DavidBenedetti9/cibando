import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import RecipesApi from "../api/recipeApi";

const DetailRecipe = () => {
  //const pippo = useParams().id;
  const { id } = useParams();
  const [ricetta, setRicetta] = useState();
  const [loading, setLoading] = useState(false);
  const percorsoDifficolta = "/assets/images/difficolta-";

  async function onGetRecipe() {
    try {
      //la setto a true per far apparire lo spinner mentre carica
      setLoading(true);
      //lo converto in numero perchè dall'url ricevo una stringa
      const idNumber = Number(id);
      const recipe = await RecipesApi.getRecipeById(idNumber);
      if (recipe) {
        setRicetta(recipe);
        setLoading(false);
      } else {
        setLoading(false);
      }
      console.log(recipe);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    onGetRecipe();
  }, []);

  return (
    <Contenitore>
      {ricetta && (
        <>
          <div
            className="container-image"
            style={{ backgroundImage: `url(${ricetta?.image})` }}
          ></div>
          <div className="container-fluid">
            <div className="row">
              <h2 className="title-summary">{ricetta?.title}</h2>
              <p className="description">{ricetta?.description}</p>
            </div>
            <div className="row">
              <div className="col">
                Difficoltà
                <div className="row">
                  {ricetta?.difficulty < 3 && (
                    <div className="difficolta">
                      Facile
                      <img
                        src={percorsoDifficolta + ricetta?.difficulty + ".png"}
                        alt={ricetta?.title}
                        className="difficolta"
                      ></img>
                    </div>
                  )}
                  {ricetta?.difficulty === 3 && (
                    <div className="difficolta">
                      Medio
                      <img
                        src={percorsoDifficolta + ricetta?.difficulty + ".png"}
                        alt={ricetta?.title}
                        className="difficolta"
                      ></img>
                    </div>
                  )}
                  {ricetta?.difficulty > 3 && (
                    <div className="difficolta">
                      Difficile
                      <img
                        src={percorsoDifficolta + ricetta?.difficulty + ".png"}
                        alt={ricetta?.title}
                        className="difficolta"
                      ></img>
                    </div>
                  )}
                </div>
              </div>
              <div className="col data">Data {ricetta?.date}</div>
            </div>
          </div>
        </>
      )}
      {!ricetta && !loading && <div>caricamento in corso</div>}
      {loading && (
        <div className="container-spinner">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading</span>
          </div>
        </div>
      )}
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;

  .container-fluid {
    padding: 10px 20px;
  }
  .container-image {
    height: 450px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -19px;
    width: 100%;
  }
  .description {
    text-align: justify;
  }
  .data {
    display: flex;
    justify-content: flex-end;
  }
  .container-spinner {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .difficolta {
    width: 150px;
  }
`;

export default DetailRecipe;

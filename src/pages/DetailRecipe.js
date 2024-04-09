import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import RecipesApi from "../api/recipeApi";

const DetailRecipe = () => {
  //const pippo = useParams().id;
  const { id } = useParams();
  const [ricetta, setRicetta] = useState();

  async function onGetRecipe() {
    try {
      //lo converto in numero perchè dall'url ricevo una stringa
      const idNumber = Number(id);
      const ricetta = await RecipesApi.getRecipeById(idNumber);
      setRicetta(ricetta);
      console.log(ricetta);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onGetRecipe();
  }, []);

  return (
    <Contenitore>
      <div className="container-card">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${ricetta?.image})` }}
        ></div>
        <div>
          <div className="card-body">
            <h5 className="card-title">{ricetta?.title}</h5>
            <p className="card-text">{ricetta?.description}</p>
          </div>
          <div>
            <div className="data">
              <img
              className="star"
                src={
                  "../assets/images/difficolta-" + (ricetta?.difficulty) + ".png"
                }
                alt={ricetta?.difficulty}
              />
              <span>{ricetta?.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;

  .container-card {
    .card-image {
      height: 450px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      margin-top: -19px;
    }

    .card-body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 15px;

      .card-title {
        font-weight: bold;
        font-size: 25px;
        color: black;
      }
      .card-text {
        font-weight: 400;
        font-size: 20px;
        color: black;
        text-align: justify;
        margin-bottom: 10px;
      }
    }
    .data {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 15px;
      
      .star {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export default DetailRecipe;

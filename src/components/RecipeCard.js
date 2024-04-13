import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const ricette = props.ricette;

  const accorciaDescrizione = (descrizione) => {
    const lunghezzaMassima = 170;

    if (descrizione.lenght <= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      //lastIndexOf prende l'ultimo spazio ,in questo caso,
      // const posizioneUltimoSpazio = descrizione.lastIndexOf(
      //   " ",
      //   lunghezzaMassima
      // );
      const posizioneUltimoSpazio = descrizione.indexOf(" ", lunghezzaMassima);
      return posizioneUltimoSpazio;
    }
  };

  function inviaTitolo(titolo) {
    console.log("titolo da inviare:", titolo);
    if (props.pag === "ricette") {
      //richiamo la funzione di callback nel componente padre
      props.onTitoloRicevuto(titolo);
    }
  }

  return (
    <Contenitore>
      <div className="div-contenitore">
        {props.ricette.map((ricetta, index) => (
          <div className="container-card" key={index}>
            <div className="card">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${ricetta.image})` }}
                onClick={() => inviaTitolo(ricetta.title)}
              ></div>
              <div className="card-body">
                <h5 className="card-title">{ricetta.title}</h5>
                <p className="card-text">
                  {ricetta?.description?.slice(
                    0,
                    accorciaDescrizione(ricetta.description)
                  )}
                  ...
                  {/* slice semplice */}
                  {/* {ricetta.description.slice(0, 200)}... */}
                </p>
                <Link to={`/dettaglio/${ricetta.title}/${ricetta._id}`}>
                  <button className="btn btn-primary">VISUALIZZA</button>
                </Link>

                {/* <button className="btn btn-primary">
                <Link to={"/dettaglio/" + ricetta._id}>
                  VISUALIZZA
                </Link>
              </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;
  .div-contenitore {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .container-card {
      display: block;
      width: 23%;
      float: left;
      margin-left: 1.6%;
      margin-bottom: 20px;

      .card-image {
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;

        .card-title {
          font-weight: bold;
          font-size: 25px;
          color: #8e210b;
        }
        .card-text {
          font-weight: 400;
          font-size: 20px;
          color: black;
          text-align: justify;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export default RecipeCard;

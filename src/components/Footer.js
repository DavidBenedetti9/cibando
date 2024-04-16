import React from "react";
import styled from "styled-components";

import Logo from "../assets/images/icona-cibando.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Contenitore>
      <div class="footer">
        <Link to="/" className="navbar-brand">
          <img src={Logo} className="icona_cibando" alt="Cibando" />
        </Link>
      </div>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  .footer {
    height: 150px;
    background-color: #8e210b;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    left: 0;
    bottom: 0;
    width: 100%;
    .icona_cibando {
      width: 100px;
      cursor: pointer;
    }
  }
`;

export default Footer;

import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

import Logo from "../assets/images/icona-cibando.png";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-red navbar-dark">
          <div className="container-fluid">
            <img src={Logo} className="icona_cibando" alt="Cibando logo" />
            <a className="navbar-brand" href="#">
              Cibando
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <HomeIcon>Filled</HomeIcon>Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <MenuBookIcon>Filled</MenuBookIcon>Ricette
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <MarkAsUnreadIcon>Filled</MarkAsUnreadIcon>Contatti
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

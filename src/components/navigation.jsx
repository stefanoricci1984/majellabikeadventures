
import React from "react";

export const Navigation = (props) => {
  return (
    
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header" style={{ display: "flex", alignItems: "center", maxWidth: "100%", height: "auto"}}>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{ padding: "5px 7px" }}
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{ display: "flex", alignItems: "center"}}>
          <img src="img\navbar\titolo2.png" alt="Logo" style={{ maxHeight: "50px", marginRight: "10px" }} /> {/* Aggiungi il logo qui */}
          <img src="img\navbar\sfondo.png" alt="Logo" style={{ maxHeight: "50px", marginRight: "10px" }} /> {/* Aggiungi il logo qui */}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#Gallery" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
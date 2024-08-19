import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <style>{`
        @media (max-width: 431px) {
          #header .intro {
            display: none; /* Nasconde l'introduzione su schermi piccoli */
          }
        }
      `}</style>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 intro-text text-center">
                <p style={{ fontSize: "24px", lineHeight: "1.5" }}>
                  <span style={{ display: "block" }}>
                    "La vita è come andare in bicicletta. Per mantenere l’equilibrio devi muoverti."
                  </span>
                  <span style={{ display: "block", marginTop: "10px" }}>
                    - Albert Einstein
                  </span>
                </p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center text-dark p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a className="text-dark p-1" style={{textDecoration:"none"}} href="https://audvik.in/">
              Audvik.in
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

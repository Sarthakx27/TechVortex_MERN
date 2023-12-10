import React from "react";

const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we will
            look into it.
          </p>
          <div className="btns btn-group">
            <a href="/">
              <button className="btn">Return Home</button>
            </a>

            <a href="/contact">
              <button className="btn secondary-btn">Report Problem</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;

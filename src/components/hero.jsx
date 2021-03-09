import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <article>
        <h1>Font Champs</h1>
        <h2>Some of my best font pairings with a touch of holy Geeta.</h2>
        <p>
          All these fonts are freely available at{" "}
          <a href="https://fonts.google.com/?preview.text_type=custom">
            google fonts
          </a>{" "}
          and all these shloks are taken from{" "}
          <a href="https://asitis.com/">Geeta english translation</a>.
        </p>
        <small>
          made by <a href="https://github.com/d-rat">dilip singh dangwal</a>
        </small>
      </article>
    </div>
  );
}

export default Hero;

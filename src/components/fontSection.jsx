import React from "react";
import "./fontSection.css";

function FontSection({ number, verse, color, head, body, bodyLink, headLink }) {
  return (
    <section className="fontSection" style={{ backgroundColor: color }}>
      <article>
        <h2 style={{ fontFamily: head }}>Chapter 10, Verse {number} </h2>
        <p style={{ fontFamily: body }}>{verse}</p>
        <small>
          <a href={headLink}>{head}</a> and <a href={bodyLink}>{body}</a>
        </small>
      </article>
    </section>
  );
}

export default FontSection;

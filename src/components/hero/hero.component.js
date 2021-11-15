import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./hero.styles.css"


const Hero = () => {
  return (
    <div>
      <section className="intro" id="home" data-nav="Home">
        <div>
          <h1 className="hero-title">
            Hello, I'm<strong>Jean-Hugues DOUMBE KINGUE </strong>
          </h1>
          <p className="hero-subtitle">Software Engineer</p>
        </div>
        <AnchorLink className="btn" to="/#about">
          About Me
        </AnchorLink>
      </section>
    </div>
  );
};

export default Hero;

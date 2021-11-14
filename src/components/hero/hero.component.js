import React from "react";
import { Link } from "gatsby"

import "./hero.styles.css"

const Hero = () => {
  return (
    <div>
      <section className="intro" id="home" data-nav="Home">
        <div>
          <h1 className="section-title">
            Hello, I'm<strong>Jean-Hugues DOUMBE KINGUE </strong>
          </h1>
          <p className="section subtitle">Software Engineer</p>
        </div>
        <Link className="btn" to="/#about">
          About Me
        </Link>
      </section>
    </div>
  );
};

export default Hero;

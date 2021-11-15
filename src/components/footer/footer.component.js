import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "@reach/router"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

import "./footer.styles.css"

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="footer-main">
          <Link to="/">
            <StaticImage
              src="../../images/logo.png"
              alt="logo"
              className="footer-logo"
            />
          </Link>
          <p className="footer-fineprint">
            © {new Date().getFullYear()} Designed & built by Jean-Hugues DOUMBE
            KINGUE
            {` `}
          </p>
        </div>
        <ul className="social-list">
          <li className="social-list-item">
            <a
              href="https://www.linkedin.com/in/jhdoumbekingue/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-list-link"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="social-list-item">
            <a
              href="https://twitter.com/JhDoumbe"
              target="_blank"
              rel="noopener noreferrer"
              className="social-list-link"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="social-list-item">
            <a
              href="https://github.com/hugonin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-list-link"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import linksToPages from "../../../data/links-to-pages"

import "./navbar.styles.css"

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
          <StaticImage src="../../images/logo.png" alt="logo"  className="logo" />
            <button
              type="button"
              className="toggle-btn"
              onClick={toggleSidebar}
            >
              <FaAlignRight />
            </button>
          </div>
          <div className="nav-links">
            {linksToPages.map(link => {
              return (
                <Link key={link.id} to={link.url}>
                  {link.text}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

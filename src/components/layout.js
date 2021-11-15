import React, { useState } from "react"
import Navbar from "./navbar/navbar.component"
import Sidebar from "./sidebar/sidebar.component"
import Footer from "./footer/footer.component"

import "./layout.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
    <Navbar toggleSidebar={toggleSidebar}/>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    {children}
    <Footer />
    </>
  )
}



export default Layout

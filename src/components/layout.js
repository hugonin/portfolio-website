import React, { useState } from "react"
import Navbar from "./navbar/navbar.component"
import Sidebar from "./sidebar/sidebar.component"

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
    </>
  )
}



export default Layout

// src/components/layout.js
import React from "react"
import Nav from "./nav"

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
)
export default Layout

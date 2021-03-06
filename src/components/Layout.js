import React from "react"
import PropTypes from "prop-types"

import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-teal-100 min-h-screen min-w-screen p-2">{children}</div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

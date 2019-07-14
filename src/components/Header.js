import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Pat Mellon</h1>
    <p>Software Engineer</p>
  </header>
)

export default Header

import { Link } from 'gatsby'
import React from 'react'

import '../assets/stylesheets/nav.scss'

const Nav = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Nav

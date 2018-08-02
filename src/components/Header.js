import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Amy-Kate Andrews</h1>
    <p>
      turning coffee into code<br />
      one div at a time.
    </p>
  </header>
)

export default Header

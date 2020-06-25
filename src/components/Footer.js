import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => (
  <footer id="footer">
    <section>
      <h2>don't be a stranger</h2>
      <p>
        I'm currently accepting freelance work. If you need a rad site, want
        help on a project, or just want to talk about code, drop me a line.
        &ensp; <span>💁‍♀️</span>
      </p>
      <dl className="alt">
        <dt>Location</dt>
        <dd>Salt Lake City &bull; UT &bull; USA</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:amykate.andrews@gmail.com">
            amykate.andrews@gmail.com
          </a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="http://twitter.com/heyamykate"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="http://github.com/heyamykate" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
  </footer>
)

export default Footer

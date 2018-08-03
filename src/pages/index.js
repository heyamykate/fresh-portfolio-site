import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'

import portrait from '../assets/images/la-ak.jpg'
import adidas from '../assets/images/logos/adidas.png'
import byu from '../assets/images/logos/byu.png'
import converse from '../assets/images/logos/converse.png'
import ghost from '../assets/images/logos/ghost.png'
import publik from '../assets/images/logos/publik.png'
import rodeo from '../assets/images/logos/rodeo-austin.jpg'
import projectSunday from '../assets/images/logos/project-sunday.png'
import skiutah from '../assets/images/logos/skiutah.jpeg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Nice to meet you</h2>
                </header>
                <p>
                  Hi! I'm Amy-Kate, but everyone calls me AK. I've been coding
                  since the MySpace days of yore, and I've come a long way since
                  table based layouts and autoplaying emo songs.<br />
                  I love code and tech, and I'm always trying to figure out how
                  to build things in a better, more efficient way.
                </p>
              </div>
              <span className="image">
                <img src={portrait} alt="Amy-Kate Andrews" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code" />
                <strong>Javascript</strong>
              </li>
              <li className="style2">
                <span className="icon fa-terminal" />
                <strong>Laravel / PHP</strong>
              </li>
              <li className="style3">
                <span className="icon fa-sitemap" />
                <strong>Django / Python</strong>
              </li>
              <li className="style4">
                <span className="icon fa-diamond" />
                <strong>Styling</strong>
              </li>
              <li className="style5">
                <span className="icon fa-bug" />
                <strong>TDD</strong>
              </li>
            </ul>
            <p className="content">
              In the words of one of my managers, I am one of the "fullest stack
              developers" he's worked with. I pride myself on being able to jump
              between the back and front end of a codebase and do meaningful
              work. I enjoy designing server-side logic just as much as I enjoy
              creating some scroll-based animation. I'm a senior developer, but
              I am of the "strong opinions held loosely" school of thought, and
              I am constantly humbled by those around me. I love learning from
              feedback and other engineers, and I am always learning more from
              the amazing dev community.
            </p>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Brands I've Worked With</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon adidas">
                  <img src={adidas} alt="Adidas" />
                </span>
              </li>
              <li>
                <span className="icon byu">
                  <img src={byu} alt="BYUTV" />
                </span>
              </li>
              <li>
                <span className="icon converse">
                  <img src={converse} alt="Converse" />
                </span>
              </li>
              <li>
                <span className="icon ghost">
                  <img src={ghost} alt="Ghost Lifestyle" />
                </span>
              </li>
              <li>
                <span className="icon publik">
                  <img src={publik} alt="Publik Coffee" />
                </span>
              </li>
              <li>
                <span className="icon rodeo">
                  <img src={rodeo} alt="Rodeo Austin" />
                </span>
              </li>
              <li>
                <span className="icon skiutah">
                  <img src={skiutah} alt="Ski Utah" />
                </span>
              </li>
              <li>
                <span className="icon project-sunday">
                  <img src={projectSunday} alt="Project Sunday" />
                </span>
              </li>
            </ul>
            <footer>
              <p>Portfolio details and write-ups are available upon request.</p>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Extracurricular Activities</h2>
            </header>
            <p>Other things about me:</p>
            <p>
              Side project: <a href="http://urbanipsum.com">Urban Ipsum</a>
            </p>
            <p>I'm left handed.</p>
            <p>I love watching Dateline.</p>
            <p>
              I'm pretty obsessed with skiing. If you french fry when you're
              supposed to pizza, you're gonna have a bad time.
            </p>
          </section>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

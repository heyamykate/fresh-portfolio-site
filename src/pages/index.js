import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'

import portrait from '../assets/images/portrait.jpg'
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
                  table based layouts and autoplaying emo songs.
                  <br />I love code and tech, and I'm always trying to figure
                  out how to build things in a better, more efficient way.
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
              <li className="style3">
                <span className="icon fa-sitemap" />
                <strong>HTML / CSS</strong>
              </li>
              <li className="style4">
                <span className="icon fa-diamond" />
                <strong>Perfect Pixels</strong>
              </li>
            </ul>
            <p className="content">
              I <em>love</em> writing code. Really love it. I started in high
              school and never stopped.
              <br />I pride myself on being able to hop between the front and
              back end of a project, helping out wherever I'm needed, but I'm
              most comfortable in the client-side world. I love creating subtle
              animations and gorgeous user interfaces. I'm known amongst the
              designers I've worked with for creating pixel-perfect pages and
              for being a great collaborator. I have an eye for visual design
              and derive a ridiculous amount of joy from a site with slick hover
              states.
              <br />I play well with others - in my past life I worked in client
              relations so I am as comfortable with a crowd as I am with a
              friend. I like to bond with my teammates and to mentor more junior
              developers. I'm happiest when I'm working with smart, friendly,
              and curious people.
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
              I love learning - I speak French and I'm trying to learn Spanish.
            </p>
            <p>Coffee is my love language.</p>
            <p>
              Side project: <a href="http://urbanipsum.com">Urban Ipsum</a>
            </p>
            <p>I'm left handed.</p>
            <p>I love watching Dateline.</p>
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

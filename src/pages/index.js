import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/justin2.jpg'
import pic04 from '../assets/images/slothtask.jpg'
import pic05 from '../assets/images/team.jpg'
import pic06 from '../assets/images/satabdipresent.jpg'
import pic07 from '../assets/images/nsflogo.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="C2STEM" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Synergistic STEM+CT Learning</h2>
                </header>
                <p>Exploiting the synergies of science and computational modeling has the potential
                  to bring about a fundamental change in the way that science learning occurs. Computing knowledge and
                  skills provide the foundation for modern competency in a multitude of STEM-related fields, offering
                  us a unique and timely opportunity to develop computer-based learning environments that
                  leverage the synergies between STEM and computing education, and bring a learning by modeling and
                  problem-solving approach to support learning with understanding that is active and engaging.</p>

              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="about" className="main special">
            <div className="major">
              <div className="content">
                <header className="major">
                  <h2>Our C2STEM Environment</h2>
                </header>
                  <span className="image main"><img src={pic04} alt="" /></span>
                <p>C2STEM is a multi-institutional project that employs Evidence-Centered Design (ECD) Principles to
                    design and develop a Collaborative, Computational STEM (C2STEM) learning environment. C2STEM
                    employs a novel learning-by-modeling paradigm that combines visual programming with domain specific
                    modeling languages (DSMLs) to promote disciplinary (e.g., Physics, Earth Science) computational
                    modeling, while providing synergistic learning of discipline-specific and CS (CT) concepts and practices.</p>
              </div>
                <footer className="major">
                    <ul className="actions">
                        <li><Link to="/about" className="button special">Learn More</Link></li>
                        <li><a href="https://drive.google.com/file/d/1wYn6S0SESKlTRzdjCtjYhJ9O1Fh-vtQH/view?usp=sharing" target="_blank" className="button">Download Flyer</a></li>
                    </ul>
                </footer>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Our Current STEM Domains</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-rocket"></span>
                <h3>Physics</h3>
                <p>Our current curriculum mostly covers Newton’s first and second laws of motion, including units in
                    Kinematics: 1D motion (with acceleration), 2D motion with constant velocity, and 2D motion with
                    gravitational forces, and one in mechanics: an introductory unit on 1D Force. </p>
                  <Link to="/physics-demo" className="button">Demo Models</Link>
              </li>
              <li>
                <span className="icon major style3 fa-tint"></span>
                <h3>Marine Biology</h3>
                <p>Our Marine Biology curriculum introduces students to the impact of climate change on coral reefs.
                    Students learn about symbiotic relationships and ecosystem changes through units on the impact of
                    increasing ocean temperatures and changes in pH levels.</p>
                  <Link to="/mb-demo" className="button">Demo Models</Link>
              </li>
              <li>
                <span className="icon major style5 fa-globe"></span>
                <h3>Earth Science</h3>
                <p>Our Earth Science computational models are created in coordination with the SPICE project, an NSF project
                    integrating science, engineering, and CT to teach earth science through models to elementary school
                    students via the WISE software and C2STEM.</p>
                  <Link to="/earth-demo" className="button">Demo Models</Link>
              </li>
            </ul>
          </section>

            <section id="second" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">
                            <h2>Bring C2STEM to Your School</h2>
                        </header>
                        <p>We work closely with teachers and administrators to design curriculum and assessments that
                            not only support national frameworks, but are designed for each classroom. We would love your input!
                            To learn more about our models, curriculum, and assessments, and to review expert code,
                            please register for or log in to our dashboard, below!</p>
                    </div>
                    <span className="image"><img src={pic06} alt="" /></span>
                </div>
                <footer className="major">
                    <ul className="actions">
                        <li><a href="https://expert.c2stem.org/login" target="_blank" className="button">Login</a></li>
                        <li><a href="https://goo.gl/forms/9XjHDCfupvhlch0L2" target="_blank" className="button special">Register</a></li>
                    </ul>
                </footer>
            </section>

            <section id="team" className="main special">
                <div className="major">
                    <div className="content">
                        <header className="major">
                            <h2>Our Team</h2>
                            <p>Our diverse team is made up of researchers, teachers and<br />
                                software engineers from institutions across the United States.</p>
                        </header>
                        <span className="image main"><img src={pic05} alt="" /></span>
                    </div>
                    <footer className="major">
                        <ul className="actions">
                            <li><Link to="/team" className="button special">Learn More</Link></li>
                        </ul>
                    </footer>
                </div>
            </section>

          <section id="sponsor" className="main special">
            <header className="major">
              <h2>Our Sponsor</h2>
            </header>
              <p>This material is based in part upon work supported by the National Science Foundation under NSF Award DRL-1640199. Any opinions, findings, and conclusions
                  or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.</p>
              <span className="image"><img src={pic07} alt="" /></span>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index

import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/banner2.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="About C2STEM" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
              <div id="main" className="alt">
                  <section id="one">
                      <div className="inner">
                          <p>C2STEM is a multi-institutional project that employs Evidence-Centered Design (ECD) Principles to design and develop a Collaborative, Computational STEM (C2STEM) learning environment. C2STEM employs a novel learning-by-modeling paradigm that combines visual programming with domain specific modeling languages (DSMLs) to promote disciplinary (e.g., Physics, Earth Science) computational modeling, while providing synergistic learning of discipline-specific and CS (CT) concepts and practices.</p>
                          <ul>
                              <li><strong>Challenge-based, ECD of STEM curricula</strong> to meet NGSS & state science standards.</li>
                              <li><strong>Low threshold, wide walls, high ceiling:</strong> accomplished through domain-specific block structured languages to support learning.</li>
                              <li><strong>Coupled multi-level representations to support learning:</strong> conceptual modeling & inquiry components offer new forms of decomposing & exploring STEM domain.</li>
                              <li><strong>Synergistic Learning:</strong> emphasis on integrating CT with existing science curricula - complementary approach to CSforAll!</li>
                              <li><strong>Integrated assessment of STEM & CT:</strong> Utilize ECD & Preparation for Future Learning assessments for measuring learning gains & characterizing learning processes.</li>
                              <li><strong>Collaborative model building</strong> for enhancing interpersonal & problem-solving skills.</li>
                              <li><strong>Teacher collaboration</strong> to align with classroom curricula & activities.</li>
                          </ul>
                      </div>
                  </section>
                  <footer className="major">
                      <ul className="actions">
                          <li><a href="https://drive.google.com/file/d/1wYn6S0SESKlTRzdjCtjYhJ9O1Fh-vtQH/view?usp=sharing" className="button">Download Flyer</a></li>
                      </ul>
                      <p>Website Design: <a href="https://html5up.net">HTML5 UP</a></p>
                  </footer>
              </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

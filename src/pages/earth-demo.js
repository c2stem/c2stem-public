import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderEarth from '../components/HeaderEarth'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Earth Science Curriculum Demo" />
        <HeaderEarth />
        <div id="main">
          <section id="content" className="main">
            <p>The Earth Science curricula are contextualized in a real-world problem in an elementary school: every
                time it rains heavily, water runoff takes a lot of sediment to the stream and homes downhill from the
                school. Runoff also affects the school itself, as the areas get very muddy and as a result recess can
                get moved inside, or even canceled. To address these problems, the students will make design proposals
                of the school's playground to: (1) Reduce water runoff during heavy rain; (2) Make outside areas
                accessible to students in wheelchairs; (3) Stay within the budget; and (4) Contain evidence that
                your designs will work for heavy rain.</p>
              <p>Students can implement and test their playground design ideas in C2STEM. They can interact with a
                  computational model by simulating rainfall and the resulting runoff under different conditions
                  (different rainfall intensities and durations) and with different playground designs (selecting
                  different surface materials for each grid in a 4x4 playground grid). By testing their engineering
                  design proposal, students can also systematically explore a vast solution space.</p>
              <iframe src="https://earth.c2stem.org/#present:Username=nzhang_es&ProjectName=SPICE-ES-BYPG-V5" height="600" width="100%"></iframe>
              <p></p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

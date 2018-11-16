import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderMB from '../components/HeaderMB'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Marine Biology Tasks" />
        <HeaderMB />
        <div id="main">
          <section id="content" className="main">

              <p>The devastating impact of climate change on coral reefs has reinforced our need to better understand
                  their causes, especially the ones related to  humans. Simultaneously, we need to raise awareness about
                  the significance of reefs, both as an ecological host to twenty-five percent of marine life and as a
                  key economic resource for millions of people. Opportunities afforded through coral reef research
                  coupled with advances in computational modeling platforms may provide a unique opportunity to introduce
                  the study of corals into K-12 STEM curricula by combining computational thinking (CT) constructs to build
                  computational models that allow students to explore and systematically study the effects of climate change
                  on the reefs.</p>
              <p>In our C2STEM Marine Biology curriculum, students are introduced to this issue, in addition to key biology
                  concepts such as symbiotic relationships and ecosystem carrying capacity through the programming of
                  computational models of the impact of climate change on coral reefs. In addition, students receive
                  an introduction on how Artificial Intelligence research is helping scientist better understand coral
                  reef damage due to climate change. As such, the curriculum is divided into: Increasing Ocean
                  Temperatures, Changes in Ocean pH Levels, and Computer Science in Climate Change Research</p>

              <h3>Increasing Ocean Temperatures:</h3>
              <ul className="actions">
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M2-Inquiry%20(temperature)&editMode&noRun" target="_blank" className="button">Inquiry</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M2-Instructional%20(temperature)&editMode&noRun" target="_blank" className="button">Instructional</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M2-Model%20Building%20(temperature)&editMode&noRun" target="_blank" className="button">Model Building</a></li>
              </ul>
              <h3>Changes in Ocean pH Levels:</h3>
              <ul className="actions">
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M3-Inquiry%20(CO%5E2)&editMode&noRun" target="_blank" className="button">Inquiry</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M3-Inquiry%20(pH)&editMode&noRun" target="_blank" className="button">Inquiry</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M3-Instructional%20(pH)&editMode&noRun" target="_blank" className="button">Instructional</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M3-MB-pH&editMode&noRun" target="_blank" className="button">Model Building</a></li>
              </ul>
              <h3>Computer Science in Climate Change Research</h3>
              <ul className="actions">
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=Photo%20Recognition%20Level%201%20Inquiry&editMode&noRun" target="_blank" className="button">Inquiry Level One</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=Photo%20Recognition%20Level%201%20Activity&editMode&noRun" target="_blank" className="button">Model Building Level One</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=Photo%20Recognition%20Level%202%20Inquiry&editMode&noRun" target="_blank" className="button">Inquiry Level Two</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=Photo%20Recognition%20Level%202%20Activity&editMode&noRun" target="_blank" className="button">Model Building Level Two</a></li>
              </ul>

              <iframe src="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M2-Model%20Building%20(temperature)&editMode&noRun" height="600" width="100%"></iframe>
              <p></p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

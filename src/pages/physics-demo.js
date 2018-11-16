import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderPhysics from '../components/HeaderPhysics'
import pic04 from '../assets/images/the-challenges.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Physics Curriculum Demo" />
        <HeaderPhysics />
        <div id="main">
          <section id="content" className="main">
            <p>Below you will find example curriculum tasks for a high school introductory kinematics unit. Our curriculum
                tasks are differentiated into Inquiry, Instructional, Model Building and Challenges based on objectives
                and difficulties. In addition, we embed formative assessments throughout to measure STEM and CT learning gains.</p>
              <span className="image main"><img src={pic04} alt="" /></span>
              <h2>Curriculum Overview</h2>
              <p>Non-profit organizations are limited in their ability to provide medical assistance to persons in remote
                  areas due to financial constraints. In this scenario, we need to transport medicine to a remote tribe in
                  the Amazon rainforest. Currently, the needed medicine is in the port city of Fortaleza, the capital of
                  the Brazilian state of Ceara. In order to conserve cost, the medicine will first be driven to Macapa.
                  It will then take a boat to Manaus, where it will then be flown by drone over the tribe’s location and safely dropped.</p>

              <h2>Module One: 1D Velocity</h2>
              <p>For the first part of the journey, students are responsible for modeling the velocity, acceleration, and
                  position of your medical truck accurately as it travels to the Amazon River. To begin, students complete
                  inquiry and instructional tasks (including the Sloth instructional task, below) in order to focus their
                  learning on needed kinematics and CT concepts and practices needed for the more difficult modeling tasks.</p>
              <h3>Example 1D Kinematics Tasks:</h3>
              <ul className="actions">
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M1-MB1&editMode&noRun" target="_blank" className="button">Constant Velocity Model Building</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M1-Inq3&editMode&noRun" target="_blank" className="button">Acceleration Inquiry</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M1-MB2&editMode&noRun" target="_blank" className="button">Acceleration Model Building</a></li>
              </ul>

              <p>Try it for yourself! Using the environment provided below, program the sloth to change its position with
                  a velocity of 1 m/s. The program should update the sloth’s position at 1 second intervals. Prompts have
                  been provided in the build environment!</p>

              <iframe src="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M1-Inst1&editMode&noRun" height="600" width="100%"></iframe>
              <p></p>

              <h2>Module Two: 2D Velocity</h2>
              <p>The second part of our journey requires us to use a boat to deliver the medicine to the airstrip. The
                  boat will travel with and against the river's current and you will be required to cross the river
                  throughout this journey. Let's take a look at the programming concepts involved!</p>
              <h3>Example 2D Velocity Tasks:</h3>
              <ul className="actions">
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M2-Inst1&editMode&noRun" target="_blank" className="button">2D Constant Velocity Instructional</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M2-MB1&editMode&noRun" target="_blank" className="button">2D Constant Velocity Model Building</a></li>
              </ul>

              <h2>Module Three: 2D Acceleration (with Gravity)</h2>
              <p>The medicine is now ready for the final air transport to the Amazonian tribe. As we prepare to program
                  Rey to make the final delivery, let’s take a look at a few physics concepts Rey needs to take into
                  account in order to accurately delivery the package!</p>
              <h3>Example 2D Acceleration Tasks:</h3>
              <ul className="actions">
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M3-Inst1&editMode&noRun" target="_blank" className="button">2D Gravity Instructional</a></li>
                  <li><a href="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M3-MovingDrop&editMode&noRun" target="_blank" className="button">2D Gravity Model Building</a></li>
              </ul>
              <p>Try out a challenge for yourself! Using the environment provided below, program the drone and both packages,
                  so that package 1 lands at target 1 and package 2 lands on the tower given the instructions provided.</p>

              <iframe src="https://editor.c2stem.org/?action=present&Username=nicole&ProjectName=M3-MB1&editMode&noRun" height="600" width="100%"></iframe>
              <p></p>

              <h2>Looking for the Expert Models?</h2>
              <p>Please be sure to register or login to our Educator Dashboard to find our curriculum resources!</p>
              <ul className="actions">
                  <li><a href="https://expert.c2stem.org/login" className="button special">Login</a></li>
                  <li><a href="https://goo.gl/forms/kQI2DVp27LaxU5u63" className="button special">Register</a></li>
              </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

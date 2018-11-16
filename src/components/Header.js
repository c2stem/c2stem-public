import React from 'react'

import logo from '../assets/images/c2stem-white-small.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        {/*<h1>C2STEM</h1>*/}
        <p>A SYNERGISTIC LEARNING ENVIRONMENT FOR<br />
            STEM + COMPUTATIONAL THINKING CLASSROOMS</p>
    </header>
)

export default Header

import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>About C2STEM</h2>
            <p>C2STEM aims to leverage the synergies between STEM and computing education to support learning with
                understanding that is active and engaging. Learn more about our environment and see if we are a fit
                for your classroom!</p>
            <ul className="actions">
                <li><Link to="/about" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact Us</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Vanderbilt University &bull; Nashville, TN &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(615) 322-8756</dd>
                <dt>Email</dt>
                <dd><a href="#">gautam.biswas@vanderbilt.edu</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://github.com/c2stem" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; 2018 C2STEM. All Rights Reserved.</p>
    </footer>
)

export default Footer

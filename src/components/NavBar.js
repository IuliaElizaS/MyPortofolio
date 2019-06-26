import React from 'react';
import '../style/App.css';
import '../style/responsive.css';
import AboutMe from './AboutMe';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

class NavBar extends React.Component {
  render (){
    return (
      <nav className="navBar">
        <div className="navItem" id="home"> Home </div>
        <div className="navItem" id="me"> AboutMe </div>
        <div className="navItem" id="projects"> Projects </div>
        <div className="navItem" id="contact"> Contact </div>
      </nav>
    )
  }
}

export default NavBar;

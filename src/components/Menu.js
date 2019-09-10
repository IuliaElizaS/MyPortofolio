import React from 'react';
import {Link} from 'react-router-dom';
import '../style/App.css';
import '../style/responsive.css';

class Menu extends React.Component {
  render (){
    return (
      <nav className="menu">
        <div className="navItem" id="home">
          <Link to='/'>Home</Link>
        </div>
        <div className="navItem" id="me">
          <Link to='/about'>About me</Link>
        </div>
        <div className="navItem" id="projects">
          <Link to='/projects'>Projects</Link>
        </div>
        <div className="navItem" id="contact">
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    )
  }
}

export default Menu;

import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import '../style/App.css';
import '../style/responsive.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import NoMatch from './NoMatch';

class NavBar extends React.Component {
  render (){
    return (
      <nav className="navBar">
        <Switch>
          {/* Switch implemetation method from https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
          <Route exact path='/' render={() => (
            <div className="navItem" id="home">
              <Home/>
              <Link to='/'>Home</Link>
              </div>
          )}/>
          <Route path='/about' render={() => (
            <div className="navItem" id="me">
              <AboutMe/>
              <Link to='/about'>About me</Link>
            </div>
          )}/>
          <Route path='/projects' render={() => (
            <div className="navItem" id="projects">
              <Projects/>
              <Link to='/projects'>Projects</Link>
            </div>
          )}/>
          <Route path='/contact' render={() => (
            <div className="navItem" id="contact">
              <Contact/>
              <Link to='/contact'>Contact</Link>
            </div>
          )}/>
          <Route component={NoMatch}/>
        </Switch>
      </nav>
    )
  }
}

export default NavBar;

import React from 'react';
import '../style/App.css';
import '../style/responsive.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

class Main extends React.Component {
  render (){
    return (
      <main className="mainContainer">
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </main>
    )
  }
}

export default Main;


<Home/>
<AboutMe/>
<Projects/>
<Contact/>

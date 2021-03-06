import React from 'react';
import Menu from './Menu';
import '../style/App.css';
import '../style/responsive.css';

class AboutMe extends React.Component {
  render (){
    return (
      <div>
        <Menu/>
        <div className="about">
          <img className="picture" src="/img/Iulia.jpg" alt="portraite of Iulia"></img>
          <h2 className="title"> A few words about me </h2>
          <p className="content">
            I am Iulia, a junior front-end developer located in Obernburg am Main, Germany.
          </p>
          <p className="content">
            I am a creative, communicative, well organised and dynamic person. I believe that regardless of age, we can always learn new things and acquire new skills.
          </p>
          <p className="content">
            After working for more than 7 years in travel industry I've decided to make a career change. Wanting to learn more about web development and to improve my skills gained during my jobs, I enrolled in the "EMEA Google Developer Scholarship Program" created by Udacity and Google.
            During 10 months of intense learning I've developed skills needed for front-end web development. Now I want to improve them and also to learn new things related to this field.
          </p>
          <a href="/documents/IuliaElizaSabadasResume.pdf" target="_blank">
            <button id="openResume">View my Resume</button>
          </a>
        </div>
      </div>
    )
  }
}

export default AboutMe;

import React from 'react';
import '../style/App.css';
import '../style/responsive.css';
import Project from './Project';


class Projects extends React.Component {
  render (){
    return (
      <div className="projectsContainer">
        <h2 className="title"> Some of my Projects </h2>
        <p className="content">
          Here you can see a few of the projects I've enjoyed working on. With one click you can check out the live version or the repository.
          <br></br>
          For more projects please visit my GitHub account.
        </p>
        <ul className="list">
          <Project/>
        </ul>
        <p className="content"> ... and more to come </p>
      </div>
    )
  }
}

export default Projects;

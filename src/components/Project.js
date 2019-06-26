import React from 'react';
import '../style/App.css';
import '../style/responsive.css';
import ProjectFront from './ProjectFront';
import ProjectBack from './ProjectBack';

class Project extends React.Component {
  render (){
    return (
      <div className="project">
        <h3 className="projectTitle"></h3>
        <ProjectFront/>
        <ProjectBack/>
      </div>
    )
  }
}

export default Project;

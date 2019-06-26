import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class ProjectFront extends React.Component {
  render (){
    return (
      <div className="front">
        <img className="preview" src="../img/preview.jpg">
        <a href="https://github.com/IuliaElizaS/Animal-Trading-Card">Live version</a>
      </div>
    )
  }
}

export default Project;

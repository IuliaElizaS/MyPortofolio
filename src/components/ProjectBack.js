import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class ProjectBack extends React.Component {
  render (){
    return (
      <div className="back">
        <p className="description">
          a simple app that ....
          <br>
          Created using HTML, JS, CSS
        </p>
        <a href="https://github.com/IuliaElizaS/Animal-Trading-Card">See repository</a>
      </div>
    )
  }
}

export default ProjectBack;

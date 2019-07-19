import React from 'react';
import '../style/App.css';
import '../style/responsive.css';
import Front from './Front';
import Back from './Back';

class Project extends React.Component {
  render (){
    return (
      <div className="project">
        <h3 className="projectTitle">{this.props.name}</h3>
        <Front
          preview={this.props.preview}
          livePage={this.props.livePage}
        />
        <Back
          description={this.props.description}
          usedTech={this.props.usedTech}
          repo={this.props.repo}
        />
        {/* Front and Back components are fliped using CSS
          animation obtained by following the tutorials from
          https://www.w3schools.com/howto/howto_css_flip_image.asp and
          https://www.w3schools.com/css/css3_animations.asp  */ }
      </div>
    )
  }
}

export default Project;

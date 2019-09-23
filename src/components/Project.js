import React from 'react';
import Front from './Front';
import Back from './Back';
import '../style/App.css';
import '../style/responsive.css';


class Project extends React.Component {
  // flips the project's card
  flipCard = (target) => {
    //gets clicked button's grandparent div in order to change grandparent's class
    const grandParentDiv = target.parentNode.parentNode;
    grandParentDiv.classList.toggle('flipped');
  }

  render (){
    return (
      <div className="project">
        <Front
          name={this.props.name}
          preview={this.props.preview}
          livePage={this.props.livePage}
          flipCard={this.flipCard}
        />
        <Back
          name={this.props.name}
          description={this.props.description}
          usedTech={this.props.usedTech}
          repo={this.props.repo}
          flipCard={this.flipCard}
        />
      </div>
    )
  }
}

export default Project;

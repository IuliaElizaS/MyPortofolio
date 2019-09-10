import React from 'react';
import Front from './Front';
import Back from './Back';
import '../style/App.css';
import '../style/responsive.css';

class Project extends React.Component {
  // flips the project card
  flipCard = () => {
    const cards = document.getElementsByClassName('project');
    for (const card of cards) {
      card.classList.toggle('flipped');
    };
  }

  //calls the flipCard function every 7 seconds
  repeatFlip = () => {
    setInterval(this.flipCard, 7000);
  }

  componentDidMount () {
    this.repeatFlip();
  }

  render (){
    return (
      <div className="project">
        <Front
          name={this.props.name}
          preview={this.props.preview}
          livePage={this.props.livePage}
        />
        <Back
          name={this.props.name}
          description={this.props.description}
          usedTech={this.props.usedTech}
          repo={this.props.repo}
        />
      </div>
    )
  }
}

export default Project;

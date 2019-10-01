import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Front extends React.Component {
  render (){
    return (
      <div className="front">
        <button className="right" onClick={(event) => this.props.flipCard(event.target)}></button>
        <h3 className="projectTitle">{this.props.name}</h3>
        <img className="preview" src={this.props.preview} alt="printscreen of the live page"></img>
        <a href={this.props.livePage} target="_blank">Live version</a>
      </div>
    )
  }
}

export default Front;

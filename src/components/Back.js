import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Back extends React.Component {
  render (){
    return (
      <div className="back">
        <button className="left" onClick={(event) => this.props.flipCard(event.target)}></button>
        <h3 className="projectTitle">{this.props.name}</h3>
        <p className="description">
          {this.props.description}
        </p>
        <p className="description">
          Created using: <span>{this.props.usedTech}</span>
        </p>
        <a href={this.props.repo}>See repository</a>
      </div>
    )
  }
}

export default Back;

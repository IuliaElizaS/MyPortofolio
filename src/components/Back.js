import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Back extends React.Component {
  render (){
    return (
      <div className="back">
        <p className="description">
          {this.props.description}
          <br></br>
          Created using <span>{this.props.usedTech}</span>
        </p>
        <a href={this.props.repo}>See repository</a>
      </div>
    )
  }
}

export default Back;

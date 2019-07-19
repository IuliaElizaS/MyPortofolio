import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Front extends React.Component {
  render (){
    return (
      <div className="front">
        <img className="preview" src={this.props.preview} alt="printscreen of the live page"></img>
        <a href={this.props.livePage}>Live version</a>
      </div>
    )
  }
}

export default Front;

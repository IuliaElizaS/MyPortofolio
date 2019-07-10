import React from 'react';
import Sound from './Sound'
import '../style/App.css';
import '../style/responsive.css';

class Header extends React.Component {
  render (){
    return (
      <div className="header">
        <img className="logo" src="/img/logo.png" alt="2 letter logo"></img>
        <div className="name">
          <h1> Iulia Eliza Sabadas </h1>
          <h2> junior front-end developer </h2>
        </div>
        <Sound /*sound={this.state.sound} status={this.state.status} change={this.changeSound}*//>
      </div>
    )
  }
};

export default Header;

import React from 'react';
import Sound from './Sound'
import '../style/App.css';
import '../style/responsive.css';

class Header extends React.Component {
  render (){
    return (
      <div className="header">
        <div className="name">
          <h1> Iulia Eliza Sabadas </h1>
          <h2> junior front-end developer </h2>
        </div>
        <Sound/>
      </div>
    )
  }
};

export default Header;

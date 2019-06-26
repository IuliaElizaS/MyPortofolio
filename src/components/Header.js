import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Header extends React.Component {
  render (){
    return (
      <div className="header">
        <img class="logo" src="../img/logo.png" alt="2 letter logo">
        <h1> Iulia Eliza Sabadas </h1>
        <sound>
        <button className="sound"> sound Off </button>
      </div>
    )
  }
  }

export default Header;

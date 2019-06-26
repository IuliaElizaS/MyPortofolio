import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Home extends React.Component {
  render (){
    return (
      <div className="home">
        <img className="picture" src="../img/picture.jpg" alt="picture of Iulia">
        <h2 className="title"> Wellcome! I am Iulia, <span className="content">a junior front-end developer who loves to code </span> </h2>
      </div>
    )
  }
}

export default Home;

import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Home extends React.Component {
  render (){
    return (
      <div className="home">
        <img className="picture" src="../img/myPicture.jpg" alt="portrait of Iulia"></img>
        <h2 className="title"> Hello & Wellcome! </h2>
        <p className="content"> I am Iulia, a junior front-end developer.
          I love to code and I try to continuously learn new things and develop my skils.
        </p>
      </div>
    )
  }
}

export default Home;

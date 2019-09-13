import React from 'react';
import {Link} from 'react-router-dom';
import '../style/App.css';
import '../style/responsive.css';

class Carousel extends React.Component {
  render (){
    return (
      <div className="box">
        <div className="carousel">
          <div className="slide one">
            <img className="picture" src="../img/myPicture.jpg" alt="portrait of Iulia"></img>
            <h2 className="title"> Hello & Wellcome!</h2>
            <p> Here you can find a few things
            <Link to='/about'>about me</Link>
          </div>
          <div className="slide two">
            <img className="picture" src="" alt="projects"></img>
            <h2 className="title"> Projects </h2>
            <Link to='/projects'></Link>
          </div>
          <div className="slide three">
            <img className="picture" src="" alt="icon"></img>
            <h2 className="title"> Contact </h2>
            <Link to='/contact'></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel;
/* inspired by https://codepen.io/edmundojr/pen/qdLWWx */

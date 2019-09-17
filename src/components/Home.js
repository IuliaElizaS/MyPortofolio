import React from 'react';
import {Link} from 'react-router-dom';
import '../style/App.css';
import '../style/responsive.css';

class Home extends React.Component {
  render (){
    return (
      <div className="box">
        <div className="carousel">
          <div className="slide one">
            <h2 className="title"> Hello & Wellcome</h2>
            <p> Here you will find a few things
            <Link to='/about'>about me ...</Link>              </p>
          </div>
          <div className="slide two">
            <p> ... you can take a look at some of
              <Link to='/projects'>my projects </Link>
            </p>
          </div>
          <div className="slide three">
            <p> ... or you can
              <Link to='/contact'>contact me </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

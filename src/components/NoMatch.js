import React from 'react'
import '../style/App.css';
import '../style/responsive.css';

class NoMatch extends React.Component {
  render (){
    return (
      <div className="page-error">
        <h1> Error 404</h1>
        <p>We can not find the page you are looking for</p>
        <img src="/img/icons8-sad.png" alt="a sad face"></img>
        {/* icon source https://icons8.com/icon/677/sad */}
      </div>
    )
  }
}

export default NoMatch;

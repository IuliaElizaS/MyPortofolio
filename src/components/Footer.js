import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Footer extends React.Component {
  render (){
    return (
      <div className="footer">
        <div clasName="item">
          <a href="https://www.linkedin.com/in/iulia-eliza-sabadas-4083b015b/">
            <img className="logo" src="img/Linkedinlogo.png"
              srcset="img/Linkedinlogosmall.png 100w, img/Linkedinlogo.png 400w"
              alt="linkedin logo">
              { img source https://www.linkedin.com }
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/IuliaElizaS">
            <img className="logo" src="img/GitHubLogomedium.png"
              srcset="img/GitHubLogosmall.png 100w, img/GitHubLogomedium.png 400w, img/GitHubLogolarge.png, 800w"
              alt="github logo">
            {img source https://www.github.com }
          </a>
        </div>
      </div>
    )
  }

export default Footer;

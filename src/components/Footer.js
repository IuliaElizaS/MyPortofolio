import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Footer extends React.Component {
  render (){
    return (
      <div className="footer">
        <div className="item">
          <a href="https://de.linkedin.com/in/iuliaelizasabadas">
            <picture className="socialLogo">
              <source media="(max-width: 450px)" srcSet="/img/LI-In-Bug.png"></source>
              <source media="(min-width: 451px)" srcSet="/img/LI-Logo.png"></source>
              <img src="/img/LI-Logo.png" alt="logo for Linkedin"></img>
              {/* img source https://www.linkedin.com */}
            </picture>
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/IuliaElizaS">
            <picture className="socialLogo">
              <source media="(max-width: 450px)" srcSet="/img/Octocat.png"></source>
              <source media="(min-width: 451px)" srcSet="/img/GitHub_Logo.png"></source>
              <img src="/img/Octocat.png" alt="logo for GitHub"></img>
              {/* img source https://www.github.com */ }
            </picture>
          </a>
          {/* method for "art direction" from https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images */ }
        </div>
        <div className="item">
          <a href="mailto: iuliaelizamts@gmail.com">
            <img src="/img/icons8-email-64.png" alt="a brief"></img>
            {/* icon source https://www.icons8.com */}
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;

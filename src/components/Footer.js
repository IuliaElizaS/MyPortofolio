import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Footer extends React.Component {
  render (){
    return (
      <div className="footer">
      <div className="logos">
          <div className="item">
            <a href="https://github.com/IuliaElizaS" target="_blank">
              <picture className="socialLogo">
                <source media="(max-width: 450px)" srcSet="/img/Octocat.png"></source>
                <source media="(min-width: 451px)" srcSet="/img/GitHub_Logo.png"></source>
                <img className="socialLogo" src="/img/Octocat.png" alt="logo for GitHub"></img>
                {/* img source https://www.github.com */ }
              </picture>
            </a>
            {/* method for "art direction" from https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images */ }
          </div>
          <div className="item">
            <a href="https://de.linkedin.com/in/iuliaelizasabadas" target="_blank">
              <picture className="socialLogo">
                <source media="(max-width: 450px)" srcSet="/img/LI-In-Bug.png"></source>
                <source media="(min-width: 451px)" srcSet="/img/LI-Logo.png"></source>
                <img className="socialLogo" src="/img/LI-Logo.png" alt="logo for Linkedin"></img>
                {/* img source https://www.linkedin.com */}
              </picture>
            </a>
          </div>
          <div className="item">
            <a href="mailto: iuliaelizamts@gmail.com" target="_top">
              <img className="email" src="/img/icons8-secured-letter-64.png" alt="a brief"></img>
              {/* icon source https://www.icons8.com */}
            </a>
          </div>
        </div>
        <p className="signiture"> &#169; IuliaElizaS 2019</p>
      </div>
    )
  }
}

export default Footer;

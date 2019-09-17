import React from 'react';
import Menu from './Menu';
import '../style/App.css';
import '../style/responsive.css';

class Contact extends React.Component {
  render (){
    return (
      <div>
        <Menu/>
        <div className="contact">
          <p className="content">
            I'm opened for questions, sugestions, new oportunities.
            Please feel free to contact me using the form below or by Linkedin
          </p>
          <form className="contactForm"></form>
        </div>
      </div>
    )
  }
}

export default Contact;

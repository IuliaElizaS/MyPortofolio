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
            I am opened for questions, sugestions, new oportunities.
            Please feel free to contact me by<a href="https://de.linkedin.com/in/iuliaelizasabadas" target="_blank">Linkedin</a>or use the form below
          </p>
          <form className="contactForm" name="contact" data-netlify="true" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p className="formRubric">
              <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p className="formRubric">
              <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p className="formRubric">
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <button type="submit">Send message</button>
          </form>
          {/* Netlify's contact form handling implementation from https://www.netlify.com/docs/form-handling/
            and https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/ */}
        </div>
      </div>
    )
  }
}

export default Contact;

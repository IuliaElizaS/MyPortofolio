import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

class Modal extends React.Component {

  //closes the modal window when user clicks on X button
  closeModal = () => {
    const resumeModal = document.getElementById('resume');
    resumeModal.style.display ="none";
  }

  render (){
    return (
      <div id="resume">
        <div className="modalContainer">
          <button id="close" onClick={this.closeModal}>X</button>
          <object name="resume" type="application/pdf" data="/documents/IuliaElizaSabadasResume.pdf"></object>
        </div>
      </div>
    )
  }
}

export default Modal;

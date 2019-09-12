import React from 'react';
import '../style/App.css';
import '../style/responsive.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render (){
    return (
      <div className="app">
        <Header/>
        <Main/>
        <Footer/>        
      </div>
    )
  }
}

export default App;

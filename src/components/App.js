import React from 'react';
import '../style/App.css';
import '../style/responsive.css';
import Header from './Header';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render (){
    return (
      <div className="app">
        <Header/>
        <NavBar/>
        <Main/>
        <Footer/>
        <p className="signiture"> &#169; IuliaElizaS 2019</p>
      </div>
    )
  }
}

export default App;

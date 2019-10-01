import React from 'react';
import '../style/App.css';
import '../style/responsive.css';
import {Helmet} from "react-helmet";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render (){
    return (
      <div className="app">
        <Helmet>
          <meta name="description" content="junior front-end developer Iulia Eliza Sabadas's portofolio " ></meta>
          <meta name="keywords" content="front end developer, portofolio, Iulia Eliza Sabadas"></meta>
          <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Josefin+Sans|Marck+Script&display=swap" rel="stylesheet"></link>
          <title>IuliaElizaS' Portofolio</title>
        {/* Helmet component and it's implementation from https://github.com/nfl/react-helmet*/}
        </Helmet>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;

import React from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import NoMatch from './NoMatch';
import '../style/App.css';
import '../style/responsive.css';


class Main extends React.Component {
  render (){
    return (
      <main className="mainContainer">
        <Switch>
          {/* Switch implemetation method from https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={AboutMe}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
          <Route component={NoMatch}/>
        </Switch>
      </main>
    )
  }
}

export default Main;

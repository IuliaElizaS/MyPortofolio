import React from 'react';
import Project from './Project';
import Menu from './Menu';
import '../style/App.css';
import '../style/responsive.css';

class Projects extends React.Component {
  render (){
    return (
      <div>
        <Menu/>
        <div className="projectsContainer">
          <h2 className="title"> Some of my Projects </h2>
          <p className="content">
            Here you can see a few of the projects I enjoyed working on. With one click you can check out the live version or the repository.
          </p>
          <p className="content">
            For more projects please visit my
            <a href="https://github.com/IuliaElizaS" target="_blank">GitHub</a>
            account.
          </p>
          <div className="list">
            {
              /* maps over the projects array and renders the project's card*/
              projects.map((project, index) => {
                return(
                  <div className="card" key={index}>
                    <Project name={project.name}
                             description={project.description}
                             usedTech={project.tech}
                             repo={project.repo}
                             preview={project.preview}
                             livePage={project.live}
                    />
                  </div>
                )
              })
            }
          </div>
          <p className="content"> ... and more will come. </p>
        </div>
      </div>
    )
  }
}

//array containing infos about some of my projects
 const projects = [
  {name:'My TO DO List',
   description:'A simple responsive app that shows a list of tasks and their deadlines. It allows the user to add, edit and delete tasks.',
   tech:'HTML5, CSS3 and ES6',
   preview:'/img/toDo.png',
   repo:'https://github.com/IuliaElizaS/My-TO-DO-List',
   live: 'https://iuliaelizas.github.io/My-TO-DO-List/'},

  {name:'My Reads',
   description:'A bookshelf app that allows the user to select and categorize books they have read, are currently reading, or want to read. There is also a search page, where the user can search for new books and add them to the existing library, on the proper shelf.',
   tech:'HTML5, CSS3, ES6 and ReactJs',
   preview:'/img/reads.png',
   repo:'https://github.com/IuliaElizaS/reactnd-project-myreads',
   live:'myreads-mylibrary.netlify.com'},

  {name:'Matching game',
   description:'It is a Memory game app. The game board consists of sixteen cards (eight different pairs), each with different symbols on one side. The player has to match all the cards by flipping them one by one. The game includes a time and a moves counter and also a star rating.',
   tech:'HTML5, CSS3 and ES6',
   preview:'/img/memo.png',
   repo:'https://github.com/IuliaElizaS/Matching-Game',
   live:'https://iuliaelizas.github.io/Matching-Game/'},

  {name:'Pixel Art',
   description:'This is a simple app that provides a canvas on which the user can create art by changing the color of the "pixels". The user can choose the size of the canvas and the colors he uses.',
   tech:'HTML5, CSS3, JavaScript and JQuery',
   preview:'/img/pixel.png',
   repo:'https://github.com/IuliaElizaS/Pixel-Art-Maker',
   live:'https://iuliaelizas.github.io/Pixel-Art-Maker/'},

  {name:'Time-around-the-World',
   description:'This is a simple responsive app that shows the time around the globe and also the current time for the place the user is located in.',
   tech:'HTML5, CSS3 and ES6',
   preview:'/img/time.png',
   repo:'https://github.com/IuliaElizaS/Time-around-the-World',
   live:'https://iuliaelizas.github.io/Time-around-the-World/'},

  {name:'Frogger Arcade Game',
   description:'This is a small game adapted after the classic Frogger game. The goal of the player is to reach the earth, without colliding into any one of the enemies and to collect as many collectables as possible. Can be played only on devices with keyboard',
   tech:'HTML5, CSS3 and ES6',
   preview:'/img/frogger.png',
   repo:'https://github.com/IuliaElizaS/Frogger-Arcade-Game-',
   live:'https://iuliaelizas.github.io/Frogger-Arcade-Game-/'},

  {name:'Neighborhood Map',
   description:'A single page application featuring a map of Baia Mare city. The map highlights a few locations where people can spend their free time. Includes third-party data about those locations and various ways to browse the content',
   tech:'HTML5, CSS3, ES6, ReactJs and APIs',
   preview:'/img/map.jpg',
   repo:'https://github.com/IuliaElizaS/Neighborhood-Map-v2',
   live:'https://my-neighborhood-map-v2.netlify.com'}];

export default Projects;

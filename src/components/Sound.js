import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

//songs source
const sourceArr=[
  "/sound/music_zapsplat_above_the_clouds_100.mp3",
  "/sound/a_short_walk.mp3",
  "/sound/music_david_gwyn_jones_the_moonpool_instrumental.mp3"
];
let i=0;

class Sound extends React.Component {
  state={
    'sound': sourceArr[0], //source for the sound
    'status': false // boolean for the autoplay property
  }

  //when a song finished playing, jumps to the next one
  changeSound = (event) => {
    i=i+1;
    if (i >= sourceArr.length) {
      i=0;
    };
    this.setState (state => ({
      'sound': sourceArr[i],
      'status': true
      })
    );

    //just for debugging
    console.log (this.state.sound, this.state.status, i);
  }

  render (){
    return (
      <div className="music">
        <audio controls autoPlay={this.state.status} onEnded={this.changeSound}>
        {/* "controls" proprety adds the default browser's audio controls */}
          <source src={this.state.sound} type="audio/mp3"></source>
          <p>your browser doesn't support audio tag or this file</p>
          {/* music source: https://www.zapsplat.com/sound-effect-category/royalty-free-music/ */}
        </audio>
      </div>
    )
  }
};

export default Sound;

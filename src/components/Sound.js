import React from 'react';
import '../style/App.css';
import '../style/responsive.css';

//songs array
const sourceArr=[
  "/sound/music_zapsplat_above_the_clouds_100.mp3",
  "/sound/a_short_walk.mp3",
  "/sound/music_david_gwyn_jones_the_moonpool_instrumental.mp3"
];
/* music source: https://www.zapsplat.com/sound-effect-category/royalty-free-music/ */
let i=0;

class Sound extends React.Component {
  //when a song finished playing, jumps to the next one
  playNext = (event) => {
    i < sourceArr.length-1 ? i=i+1 : i=0;
    let myPlayer = document.getElementById('player');
    myPlayer.src = sourceArr[i];
    myPlayer.play(); //plays the new song
  }

  render (){
    return (
      <div className="music">
        <audio id="player" controls="controls" autoPlay={false} onEnded={this.playNext}>
        {/* "controls" proprety adds the default browser's audio controls */}
          <source src="/sound/music_zapsplat_above_the_clouds_100.mp3" type="audio/mp3"></source>
          <p>your browser doesn't support audio tag or this file</p>
        </audio>
      </div>
    )
  }
};

export default Sound;

import React from 'react';
import Ticker from 'react-ticker';
import "./VideoFooter.css"
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
     <div className="videoFooter__text">
        <h3>@shonda</h3>
        <p> This is a description</p>
        <MusicNoteIcon/>
        <Ticker mode="smooth">
          {({index})=>(
            <>
            <h1>YOOOO whats up guys</h1>
            </>

          )}
        </Ticker>
     </div>
     <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt=""></img>
    </div>
  );
}

export default VideoFooter;

import React from "react";
import Video from "./Video";
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <MusicNoteIcon className="videoFooter_icon" />
                <div className="videoFooter_song">
                    <p>{song}</p>
                </div>
            </div>
            <img 
            className="videoFooter_record"
            src="https://static.thenounproject.com/png/934821-200.png"
             alt="" />
        </div>
    )
}

export default VideoFooter;
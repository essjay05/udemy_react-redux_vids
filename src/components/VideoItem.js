import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return <div onClick={() =>onVideoSelect(video)} className="vid-item item">
            <img className="ui image" src={ video.snippet.thumbnails.medium.url } />
            <div className="content">
                <div className="header">{ video.snippet.title }</div>
                {/* <p>{ video.snippet.description }</p> */}
            </div>
        </div>
};

export default VideoItem;
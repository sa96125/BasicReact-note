import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onSelectVideo }) => {
    return (
        <div className="video-item item" onClick={() => onSelectVideo(video)}>
            <img className="ui image" alt='thumbnails' src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>

            </div>
        </div>
    );
}

export default VideoItem;
import React from 'react';


const VideoDetail = ({ video }) => {
    if (video == null) {
        return <div>Loading...</div>
    }

    const youtubeLink = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="youtube video" src={youtubeLink}></iframe>
            </div>
            <div className="ui segment">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;
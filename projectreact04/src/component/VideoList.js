import React from 'react';
import VideoItem from './VideoItem';

// 요청한 데이터를 정리하는 구간
const VideoList = ({ videos, onSelectVideo }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onSelectVideo={onSelectVideo} />;
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );

}

export default VideoList;
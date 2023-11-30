import React, { useState } from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

function MusicPlayer() {
  const [videoId, setVideoId] = useState('');

  const onVideoReady = (event) => {
    // Do something when the video is ready (optional)
  };

  const onVideoEnd = () => {
    // Reset the video ID when it ends
    setVideoId('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      {videoId && (
        <>
          <YouTube videoId={videoId} onReady={onVideoReady} />
          <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} playing onEnded={onVideoEnd} />
        </>
      )}
    </div>
  );
}

export default MusicPlayer;

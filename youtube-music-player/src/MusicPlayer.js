// src/MusicPlayer.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import SearchBar from './SearchBar'; // Import the new SearchBar component
import './MusicPlayer.css'; // Import the CSS file

function MusicPlayer() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleSearch = (url) => {
    setVideoUrl(url);
  };

  const onVideoEnd = () => {
    setVideoUrl('');
  };

  return (
    <div className="player-container">
      <SearchBar onSearch={handleSearch} />
      {videoUrl && (
        <ReactPlayer
          className="react-player"
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          onEnded={onVideoEnd}
        />
      )}
    </div>
  );
}

export default MusicPlayer;

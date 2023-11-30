import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'; // Import the YouTube component from react-player

function MusicPlayer() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Trigger the video playback when Enter key is pressed
      setVideoUrl(event.target.value);
    }
  };

  const onVideoEnd = () => {
    // Reset the video URL when the video ends
    setVideoUrl('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        onKeyPress={handleKeyPress}
      />
      {videoUrl && (
        <ReactPlayer
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

import React, { useState, useEffect } from 'react';

function Intro({ onIntroEnd }) {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Function to handle video end
  const handleVideoEnd = () => {
    // Call the onIntroEnd function passed from App.js
    onIntroEnd();
  };

  // Function to handle play button click
  const handlePlayButtonClick = () => {
    setVideoPlayed(true);
  };

  useEffect(() => {
    // After the intro video is played, start the fade-out animation
    if (videoPlayed) {
      const fadeOutTimer = setTimeout(() => {
        setShowIntro(false);
      }, 10000); // Adjust the delay as needed

      // Clear the timeout to avoid memory leaks
      return () => clearTimeout(fadeOutTimer);
    }
  }, [videoPlayed]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full overflow-hidden z-50 flex justify-center items-center bg-black transition-opacity ${showIntro ? 'opacity-100 transition-opacity duration-800 ease-in' : 'opacity-0'}`}>
      {/* Video */}
      <video
        className={`w-full h-full object-cover ${videoPlayed ? 'block' : 'hidden'}`}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        onPlay={() => setVideoPlayed(true)} // Set videoPlayed to true when video starts playing
      >
        <source src="/Images/introWebsite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play button */}
      {!videoPlayed && (
        <button
          className="bg-white text-black font-bold py-4 px-4 rounded"
          onClick={handlePlayButtonClick}
        >
          PLAY
        </button>
      )}
    </div>
  );
}

export default Intro;

import React from "react";

const VideoSection = () => {
  return (
    <div className="bg-black w-full relative" style={{ paddingTop: "56.25%" }}> 
      <iframe
        src="https://player.vimeo.com/video/1061278031?h=e4c90ceb40&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        title="RECAP VERANO 2025"
      ></iframe>
    </div>
  );
};

export default VideoSection;

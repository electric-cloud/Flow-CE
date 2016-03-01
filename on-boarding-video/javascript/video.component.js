'use strict';

import React from 'react';


let VideoComponent = ({title, description, videoUrl, helpcenterUrl}) => {
  return (
    <div className="ec-videos__video">
      <div className="ec-videos__video-header" title={title}>{title}</div>
      <div className="ec-videos__video-player">
        <iframe width="100%" height="100%" src={videoUrl} allowFullScreen={true}></iframe>
      </div>
      <div className="ec-videos__video-description">{description}</div>
      <div className="ec-videos__video-link">
        <a href={helpcenterUrl} target="_blank">Full tutorial &gt;</a>
      </div>
    </div>
  );
};

export default VideoComponent;
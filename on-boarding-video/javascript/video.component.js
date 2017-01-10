'use strict';

import React from 'react';


let VideoComponent = ({title, description, videoUrl, helpcenterUrl}) => {
  let userId = document.location.hash.match(/user_id=(.+)/);
  if (userId && userId.length) {
    userId = userId[1];
  }

  return (
    <div className="ec-videos__video">
      <div className="ec-videos__video-header" title={title}>{title}</div>
      <div className="ec-videos__video-player">
        <iframe width="100%" height="100%" src={videoUrl} allowFullScreen={true}></iframe>
      </div>
      <div className="ec-videos__video-description">
        {description} - <a href={`${helpcenterUrl}#user_id=${userId}`} target="_blank">Full tutorial &gt;</a>
      </div>
    </div>
  );
};

export default VideoComponent;

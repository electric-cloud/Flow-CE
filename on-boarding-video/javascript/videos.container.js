'use strict';

import React, { Component } from 'react';
import VideoComponent from './video.component';
import VideosData from './videos-data';
import Cookie from 'js-cookie';


export default class VideosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: Cookie.get('flow-ce__last-video') || 0
    };
  }

  onNextVideo() {

  }

  onPrevVideo() {

  }

  render() {
    return (
      <div>
        <h1>pages</h1>
        <VideoComponent />
      </div>
    );
  }
}
VideosContainer.displayName = 'Videos Container';

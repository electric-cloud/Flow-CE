'use strict';

import React, { Component } from 'react';
import VideoComponent from './video.component';
import VideosData from './videos-data';
import cn from 'classnames';
import Cookie from 'js-cookie';
import ButtonNext from '../images/button-view-next.svg';
import ButtonPrev from '../images/button-view-previous.svg';


export default class VideosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: parseInt(Cookie.get('flow-ce__last-video'), 10) || 0
    };
    this.onNextVideo = this.onNextVideo.bind(this);
    this.onPrevVideo = this.onPrevVideo.bind(this);
  }

  onNextVideo() {
    let activeVideo = this.state.activeVideo + 1;
    this.setState({activeVideo});
    Cookie.set('flow-ce__last-video', activeVideo);
  }

  onPrevVideo() {
    let activeVideo = this.state.activeVideo - 1;
    this.setState({activeVideo: this.state.activeVideo - 1});
    Cookie.set('flow-ce__last-video', activeVideo);
  }

  render() {
    let activeVideoOffset = this.state.activeVideo * (560 + 50) * -1,
        canGoPrev = this.state.activeVideo !== 0,
        canGoNext = this.state.activeVideo !== VideosData.length - 1;

    let prevBtnCls = cn('ec-videos__navigation-icon', {disabled: !canGoPrev});
    let nextBtnCls = cn('ec-videos__navigation-icon', {disabled: !canGoNext});

    return (
      <div className="ec-videos">
        <div className="ec-videos__wrapper-container" style={{marginLeft: activeVideoOffset}}>
          {VideosData.map((item) => <VideoComponent key={item.id} {...item} /> )}
        </div>
        <div className="ec-videos__navigation">
          <div className="ec-videos__navigation-right">
            <div className={prevBtnCls} onClick={canGoPrev ? this.onPrevVideo : null}>
              <svg className="sds-svg-icon"><use xlinkHref={ButtonPrev} /></svg>
            </div>
            <div className={nextBtnCls} onClick={canGoNext ? this.onNextVideo : null}>
              <svg className="sds-svg-icon"><use xlinkHref={ButtonNext} /></svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
VideosContainer.displayName = 'Videos Container';

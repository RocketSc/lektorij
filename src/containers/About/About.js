import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import VideoBackground from '../../components/VideoBackground/VideoBackground';
import video from '../../assets/video/background.mp4';
import RepeatedElements from '../../components/RepeatedElements/RepeatsElements';
import LogoLektorij from '../../components/LogoLektorij/LogoLektorij';
import AboutTop from '../../components/AboutTop/AboutTop';
import AboutBottom from '../../components/AboutBottom/AboutBottom';
import classes from './About.css';

class About extends Component {
  render() {
    return (
      <Aux>
        <VideoBackground
          autoplay={null}
          loop="true"
          muted={null}
          source={video}
          page="About"
          classNameVisible={classes.AboutWrapper}
          classNameHidden={classes.AboutWrapperHidden}
        />
        <div className={classes.AboutWrapper}>
          <RepeatedElements />
          <LogoLektorij />
          <AboutTop />
          <AboutBottom />
        </div>
      </Aux>
    );
  }
}

export default About;
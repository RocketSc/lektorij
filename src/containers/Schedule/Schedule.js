import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import RepeatsElements from '../../components/RepeatedElements/RepeatsElements';
import LogoLektorij from '../../components/LogoLektorij/LogoLektorij';
import Navigation from '../../components/Navigation/Navigation';
import classes from './Schedule.css';
import Speakers from '../../components/Speakers/Speakers';

class Schedule extends Component {
  render() {
    return (
      <Aux>
        <LogoLektorij />
        <RepeatsElements dark />
        <Navigation dark />
        <div className={classes.Container}>
          <div className={classes.TitleWrapper}>
            <h2>Выступающие</h2>
            <a href="/">Все выступающие</a>
          </div>
          <Speakers />
          <div className={classes.TitleWrapper}>
            <h2>Программа</h2>
            {/* <a href="/">Скачать pdf</a> */}
          </div>
        </div>
      </Aux>
    );
  }
}

export default Schedule;

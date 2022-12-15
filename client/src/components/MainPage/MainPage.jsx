/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import dota2 from './images/dota2.jpeg';
import wow from './images/wow.jpeg';
import csgo from './images/csgo.jpeg';
import videoWow from './Video/Ролик World of Warcraft_ Shadowlands (online-video-cutter.com).mp4';
import videoDota from './Video/Dota 2 Gamescom Trailer (online-video-cutter.com).mp4';
import videoCsGo from './Video/CSGO.mp4';

import styles from './mainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.h2main}>
       <h3 className={styles.h3}> Добро пожаловать!</h3>
       <p className={styles.pMain}>Выбери свою игру</p>
    </div>
    <div className={styles.wrapper}>
    <div className={styles.videoDiv}>
      <Link to="/dota2">
     {/* <img className={styles.imgCard} src="http://localhost:3001/public/images/dota-2girl.jpeg" alt="dota2" /> */}
     <video
       className={styles.videoWow}
       src={videoDota}
       onMouseOver={(event) => event.target.play()}
       onMouseOut={(event) => event.target.pause()}
       muted
       loop
     />
      </Link>
    </div>
    <div className={styles.videoDiv}>
    <Link to="/csgo">
      {/* <img className={styles.imgCard} src={csgo} alt="csgo" /> */}
      {/* <video className={styles.videoWow} src={videoCsGo} autoPlay loop muted /> */}
      <video
        className={styles.videoWow}
        src={videoCsGo}
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        muted
      />
    </Link>
    </div>
    <div className={styles.videoDiv}>
      <Link to="/wow">
      {/* <img className={styles.imgCard} src={wow} alt="Word of Warcraft" /> */}
      <div className={styles.containerVideo}>
      <video
        className={styles.videoWow}
        src={videoWow}
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        muted
      />
      </div>

      </Link>
    </div>
    </div>
    </div>
  );
}

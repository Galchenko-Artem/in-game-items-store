import React from 'react';
import { Link } from 'react-router-dom';
import dota2 from './images/dota2.jpeg';
import wow from './images/wow.jpeg';
import csgo from './images/csgo.jpeg';

import styles from './mainPage.module.css';

export default function MainPage() {
  return (
    <>
    <div className={styles.mainContainer}>
    <div className={styles.h2main}>
       <h3 className={styles.h3}> Добро пожаловать!</h3>
       <p className={styles.pMain}>Выбери свою игру</p>
    </div>
    <div className={styles.wrapper}>
    <div className={styles.card}>
      <h2 className={styles.h2}>DOTA 2</h2>
      <Link to="/dota2">
     <img className={styles.imgCard} src="http://localhost:3001/public/images/dota-2girl.jpeg" alt="dota2" />
      </Link>
      <p className={styles.description}>ММОРПГ</p>
    </div>
    <div className={styles.card}>
    <h2 className={styles.h2}>CS GO</h2>
    <Link to="/csgo">
      <img className={styles.imgCard} src={csgo} alt="csgo" />
    </Link>
    <p className={styles.description}>Шутер</p>
    </div>
    <div className={styles.card}>
    <h2 className={styles.h2}>WoW</h2>
      <Link to="/wow">
      <img className={styles.imgCard} src={wow} alt="Word of Warcraft" />
      </Link>
      <p className={styles.description}>ММОРПГ</p>
    </div>
    </div>
    </div>
    <div className={styles.mainContainer2}>
    <div className={styles.wrapper} />
    </div>
    </>
  );
}

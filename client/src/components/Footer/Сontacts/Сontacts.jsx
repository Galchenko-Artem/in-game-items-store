import React from 'react';
import Maps from './Map/Map';
import styles from '../styleFooter.module.css';

export default function Сontacts() {
  return (
  <div className={styles.containerCont}>
      <div className={styles.conatainerCreator}>
         <h1>Создатели проекта:</h1>
      </div>
    <div>
        <Maps />
    </div>
  </div>

  );
}

import React from 'react';
// import Maps from './Map/Map';
import { Link } from 'react-router-dom';
import styles from './styleFooter.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <hr />
      <Link to="/teleg"><img className={styles.imgTeleg} src="https://w7.pngwing.com/pngs/12/974/png-transparent-social-telegram-chat-messenger-social-network-icon.png" alt="telega" /></Link>
        <Link to="/contacts"> Контакты </Link>
    </footer>
  );
}

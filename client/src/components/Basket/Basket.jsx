import React from 'react';
import styles from './Basket.module.css';

export default function Basket() {
  return (
    <div className={styles.containerItems}>
        Basket
        <div className={styles.containerBasket}>
            <div className={styles.mainItems}>
              ТОВАРЫ
                <div className="boxAccount">
                    <div className={styles}> img</div>
                        <div>
                           Name
                        </div>
                                <div>Price</div>
                                    <div>
                                        <button type="button">Удалить</button>
                                    </div>
                </div>
              <div className={styles.arrange}>
              <div>
                Сумма
              </div>
                <button type="button">Оформить заказ</button>
              </div>
            </div>
        </div>
    </div>
  );
}

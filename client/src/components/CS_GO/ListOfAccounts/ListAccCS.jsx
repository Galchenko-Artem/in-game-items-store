/* eslint-disable react/button-has-type */
import React from 'react';
import './StyleAccounts.css';

export default function ListAccCS() {
  return (
    <div className="containerItems">
        ListOfAccounts
        <div className="containerAccount">
            <div className="filtr">
                <div>SortPrise</div>
                <button>Poisk</button>
            </div>
            <div className="mainItems">
                <div className="boxAccount">
                    <div className="containerImg"> img</div>
                        <div>
                            <button>Info</button>
                        </div>
                                <div>Price</div>
                                    <div>
                                        <button>Корзина</button>
                                    </div>
                </div>

            </div>

        </div>

    </div>
  );
}

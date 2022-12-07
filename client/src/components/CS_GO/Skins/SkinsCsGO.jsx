/* eslint-disable react/button-has-type */
import React from 'react';
import './StyleSkins.css';

export default function SkinsCsGO() {
  return (
    <div className="containerItems">
    Skins
    <div className="containerAccount">
        <div className="filtr">
            <div>SortPrise</div>
            <button>Poisk</button>
        </div>
        <div className="mainItems">

            <div className="boxItems">
                <div className="containerImgItems">
                        img
                </div>
                <div className="containerBtn">
                    <div>Название</div>
                        <div>Price</div>
                            <div>
                                <button>Info</button>
                            </div>
                                <div>
                                    <button>Корзина</button>
                                </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

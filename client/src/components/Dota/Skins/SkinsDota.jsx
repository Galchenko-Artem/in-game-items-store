/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './StyleSkins.css';

export default function SkinsDota() {
  const [skins, setSkins] = useState();
  useEffect(() => {
    fetch('http://localhost:3001/dota2/services', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSkins(data.filter((el) => el.CategoryId === 2 && el.GameId === 3));
      })
      .catch(console.log);
  }, []);
  return (
    <div className="containerItems">
    Skins
    <div className="containerAccount">
        <div className="filtr">
            <div>SortPrise</div>
            <button>Poisk</button>
        </div>
        <div className="mainItems">
            {skins && skins.map((el) => (
            <div key={el.id} className="boxItems">
                <div className="containerImgItems">
                <img className="ImgAcc" src={`http://localhost:3001/${el.image}`} alt="img" />
                </div>
                <div className="containerBtn">
                    <div>{el.name}</div>
                        <div>{el.price}$</div>
                            <div>
                                <button>Info</button>
                            </div>
                                <div>
                                    <button>Корзина</button>
                                </div>
                </div>
            </div>
            )) }

        </div>
    </div>

    </div>
  );
}

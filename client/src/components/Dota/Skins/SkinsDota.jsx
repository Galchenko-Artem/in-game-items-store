/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StyleSkins.css';
import { useDispatch } from 'react-redux';
import { basketAdd } from '../../../store/actions/basketAction';

export default function SkinsDota() {
  const [skins, setSkins] = useState();
  const dispatch = useDispatch();
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

  const addToBasket = (el) => {
    dispatch(basketAdd(el));
    fetch('http://localhost:3001/basket', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(el),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

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
                    <div className="element">{el.name}</div>
                        <div className="element">{el.price}$</div>
                            <div className="element">
                            <Link to={`${el.id}`}><button>Info</button></Link>
                            </div>
                                <div className="element">
       <button onClick={() => addToBasket(el)} id={el.id}>Корзина</button>
                                </div>
                </div>
                              <div className="descriptionDotaSkins">
                                  {el.description}
                              </div>

            </div>

            )) }

        </div>
    </div>

    </div>
  );
}

/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StyleItems.css';
import { useDispatch } from 'react-redux';
import { basketAdd } from '../../../store/actions/basketAction';

export default function Items() {
  const [items, setItems] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3001/dota2/services', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.filter((el) => el.CategoryId === 4 && el.GameId === 2));
      })
      .catch(console.log);
  }, []);

  const addToBasket = (el) => {
    dispatch(basketAdd(el));
    // fetch('http://localhost:3001/basket', {
    //   credentials: 'include',
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(el),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  };

  return (
    <div className="containerItems">
    Items
    <div className="containerAccount">
        <div className="filtr">
            <div>SortPrise</div>
            <button>Poisk</button>
        </div>
        <div className="mainItems">
        {items && items.map((el) => (
            <div key={el.id} className="boxItems">
                <div className="containerImgItems">
                <img className="ImgAcc" src={`http://localhost:3001/${el.image}`} alt="img" />
                </div>
                <div className="containerBtn">
                    <div>{el.name}</div>
                        <div>{el.price}$</div>
                            <div>
                            <Link to={`${el.id}`}><button>Info</button></Link>
                            </div>
                                <div>
    <button onClick={() => addToBasket(el)} id={el.id}>Корзина</button>
                                </div>
                </div>
            </div>
        )) }

        </div>
    </div>

    </div>
  );
}

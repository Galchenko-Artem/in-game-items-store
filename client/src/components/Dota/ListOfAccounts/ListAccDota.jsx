import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './StyleAccounts.css';
import { useDispatch, useSelector } from 'react-redux';
import { basketAdd, basketDel } from '../../../store/actions/basketAction';

export default function ListAccDota() {
  const [acc, setAcc] = useState();
  const basket = useSelector((store) => store.basketStore);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3001/dota2/listOfAccounts', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAcc(data.filter((el) => el.CategoryId === 1 && el.GameId === 3));
      })
      .catch(console.log);
  }, []);

  const addToBasket = (el) => {
    const isInBasket = basket.some((item) => item.id === el.id);
    if (!isInBasket) {
      dispatch(basketAdd(el));
      console.log('Добавляем в редакс так как его нет в корзине');
    }
    fetch('http://localhost:3001/basket', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(el),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const removeFromBasket = (el) => {
    dispatch(basketDel(el.id));
    fetch('http://localhost:3001/basket', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        el,
      ),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch();
  };

  return (
    <div className="containerItems">
        ListOfAccounts
        <div className="containerAccount">
            <div className="filtr">
                <div>SortPrise</div>
                <button>Poisk</button>
            </div>
            <div className="mainItems">
            {acc && acc.map((el) => (

              <div key={el.id} className="boxAccount">
                  <div key={el.id} className="containerImg">
                    <img className="ImgAcc" src={`http://localhost:3001/${el.image}`} alt="" />
                    <p>{el.description}</p>
                  </div>
                      <div>
                      <Link to={`${el.id}`}><button>Info</button></Link>
                      </div>
                              <div>{el.price} $</div>
                                  <div>
                                  {basket.some((item) => item.id === el.id) ? (
                                    <button className="inBasket" onClick={() => removeFromBasket(el)}>В корзине</button>
                                  ) : (
                                    <button onClick={(e) => addToBasket(el)}>В корзину</button>
                                  )}
                                  </div>
              </div>

            ))}
            </div>
        </div>

    </div>
  );
}

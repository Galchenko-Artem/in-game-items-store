/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { basketAdd } from '../../../store/actions/basketAction';

export default function ServicesDota() {
  const [services, setServices] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3001/dota2/services', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data.filter((el) => el.CategoryId === 3 && el.GameId === 3));
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
        Services
        <div className="containerAccount">
            <div className="filtr">
                <div>SortPrise</div>
                <button>Poisk</button>
            </div>
            <div className="mainItems">
                {services && services.map((el) => (
                <div key={el.id} className="boxAccount">
                <div className="containerImg">
                    <img className="ImgAcc" src={`http://localhost:3001/${el.image}`} alt="img" />
                </div>
                    <div>
                    <Link to={`${el.id}`}><button>Info</button></Link>
                    </div>
                            <div>{el.price}$</div>
                                <div>
   <button onClick={() => addToBasket(el)} id={el.id}>Корзина</button>
                                </div>
                </div>
                ))}

            </div>

        </div>

    </div>
  );
}

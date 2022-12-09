/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './StyleAccounts.css';
import { useDispatch } from 'react-redux';
import { basketAdd } from '../../../store/actions/basketAction';

export default function ListAccCS() {
  const [acc, setAcc] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3001/csgo/listOfAccounts', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAcc(data.filter((el) => el.CategoryId === 1 && el.GameId === 1));
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
      .then((res) => console.log(res));
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
                     <div className="containerImg">
                     <img className="ImgAcc" src={`http://localhost:3001/${el.image}`} alt="" />
                     </div>
                         <div>
                             <button>Info</button>
                         </div>
                                 <div id="id" className="price">{el.price}$</div>
                                  <p>{el.description}</p>
                                     <p>
                     <button onClick={() => addToBasket(el)} id={el.id}>Корзина</button>
                                     </p>
                     </div>
                ))}

            </div>

        </div>

    </div>
  );
}

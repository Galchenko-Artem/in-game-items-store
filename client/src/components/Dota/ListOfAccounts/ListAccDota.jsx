/* eslint-disable import/no-duplicates */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';

import './StyleAccounts.css';

export default function ListAccDota() {
  const [acc, setAcc] = useState();
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
                  </div>
                      <div>
                          <button>Info</button>
                      </div>
                              <div>$:{el.price}</div>
                                  <div>
                                      <button>Корзина</button>
                                  </div>
              </div>

            ))}
            </div>
        </div>

    </div>
  );
}

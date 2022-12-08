/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';

export default function ServicesCS() {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('http://localhost:3001/csgo/services', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data.filter((el) => el.CategoryId === 3 && el.GameId === 1));
      })
      .catch(console.log);
  }, []);
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
                        <img className="ImgAcc" src={el.image} alt="img" />
                    </div>
                        <div>
                            <button>Info</button>
                        </div>
                                <div>{el.price}$</div>
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

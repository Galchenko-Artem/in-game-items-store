/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StyleSkins.css';
import { useDispatch, useSelector } from 'react-redux';
import { basketAdd, basketDel } from '../../../store/actions/basketAction';
import Select from '../../Filtr/Select';

export default function SkinsDota() {
  const [skins, setSkins] = useState();
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const basket = useSelector((store) => store.basketStore);

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
  const sortPrice = (el) => {
    setSort(el);
    setSkins([...skins].sort((a, b) => a[el] - b[el]));
  };

  const filterSkins = skins?.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="containerItems">
    Skins
    <div className="containerAccount">
        <div className="filtr">
        <input
          placeholder="Поиск...."
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
         <Select
           value={sort}
           onChange={sortPrice}
           defaultValue="Сортировка"
           options={[
             { value: 'price', name: 'По цене(по возрастанию)' },
           ]}
         />
        </div>
        <div className="mainItems">
            {filterSkins && filterSkins.map((el) => (
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
                                {basket.some((item) => item.id === el.id) ? (
                                    <button className="inBasket" onClick={() => removeFromBasket(el)}>В корзине</button>
                                ) : (
                                    <button onClick={(e) => addToBasket(el)}>В корзину</button>
                                )}
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

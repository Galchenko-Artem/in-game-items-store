import React, { useEffect, useState } from 'react';
import './StyleAccounts.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { basketAdd, basketDel } from '../../../store/actions/basketAction';
import Select from '../../Filtr/Select';

export default function ListAccCS() {
  const [acc, setAcc] = useState();
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const basket = useSelector((store) => store.basketStore);
  const user = useSelector((state) => state.userStore);
  console.log('===>>> 👉👉👉 file: ListAccCS.jsx:14 👉👉👉 user', user.user);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3001/csgo/listOfAccounts', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setAcc(data.filter((el) => el.CategoryId === 1 && el.GameId === 1));
      })
      .catch(console.log);
  }, []);

  const addToBasket = (el) => {
    // const isInBasket = basket.some((item) => item.id === el.id);
    // if (!isInBasket) {
    //   dispatch(basketAdd(el));
    //   console.log('Добавляем в редакс так как его нет в корзине');
    // }
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
        if (res.status === 'success') {
          dispatch(basketAdd(el));
        }
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
    setAcc([...acc].sort((a, b) => a[el] - b[el]));
  };
  const filterAcc = acc?.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="containerItems">
        ListOfAccounts
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
                {filterAcc && filterAcc.map((el) => (
                     <div key={el.id} className="boxAccount">
                      <div className="containerImg">
                        <img className="ImgAcc" src={`http://localhost:3001/${el.image}`} alt="" />
                      </div>
                         <div>
                         <Link to={`${el.id}`}><button>Info</button></Link>
                         </div>
                                 <div id="id" className="price">{el.price}$</div>
                                  <p>{el.name}</p>

                                {user.user ? (
                        <div>
                          {basket.some((item) => item.id === el.id) ? (
                          <button className="inBasket" onClick={() => removeFromBasket(el)}>В корзине</button>
                          ) : (
                          <button onClick={(e) => addToBasket(el)}>В корзину</button>
                          )}
                        </div>
                                ) : (
                                  null
                                )}
                     </div>
                ))}
            </div>
        </div>
    </div>
  );
}

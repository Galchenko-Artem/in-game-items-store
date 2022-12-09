import React, { useEffect, useState } from 'react';
import './supportpage.css';

export default function SupportPage() {
  const [pleas, setPleas] = useState([]);
  const [classForm, setClassForm] = useState('formClassNone');
  const [adminMsg, setAdminMsg] = useState({ adminAnswer: '', userPleaId: '' });

  useEffect(() => {
    console.log('useeffect');
    fetch('http://localhost:3001/admin', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPleas(res.allPleasData);
      })
      .catch();
  }, []);

  const showAnwerForm = (el) => {
    setClassForm('formAnswerPleas');
    console.log(el);
    setAdminMsg({ adminAnswer: '', userPleaId: el.id });
  };
  console.log(adminMsg);

  const textAreaMsg = (e) => {
    setAdminMsg({ ...adminMsg, adminAnswer: e.target.value });
  };

  const sendAnswer = () => {
    fetch('http://localhost:3001/admin', {
      credentials: 'include',
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(adminMsg),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
    <h2>Запросы пользователей</h2>
    {!pleas.length ? (
      <p>Запросов на данный момент нет</p>
    ) : (
      <div className="wrapperUserPleas">
      {pleas.map((el) => (
      <div key={el.id} className="plea">
       <p> {el.question}</p>
        <button onClick={() => showAnwerForm(el)} type="button">Ответить</button>
      </div>
      ))}
      </div>
    )}
  <form className={classForm} action="">
        <textarea onChange={textAreaMsg} className="formElement inputPleaAnswer" placeholder="Ответ" type="text" name="adminAnswer" value={adminMsg.adminAnswer} id="" />
        <button onClick={sendAnswer} className="formElement" type="button">Отправить</button>
  </form>
    </>
  );
}

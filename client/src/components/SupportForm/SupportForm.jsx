import React, { useState } from 'react';

export default function SupportForm() {
  const [form, setForm] = useState({
    text: '',
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/request', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="supportForm">
      <form onSubmit={handleSubmit}>
      <div className="inputSupport">
      <label className="labeSupport">Опишите вашу проблему</label>
      <input className="inputSupport" type="text" value={form.text} name="text" onChange={handleInput} placeholder="..." autoComplete="on" />
      </div>

      <div className="supportBtnSubmitDiv">
      <button className="SubmitBtnSupport" type="submit">Отправить</button>
      </div>
      <div className="answerSupport" />
      </form>
    </div>
  );
}

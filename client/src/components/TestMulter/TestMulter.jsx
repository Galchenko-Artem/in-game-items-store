import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './testMulter.css';

export default function testMulter() {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const sendFile = useCallback(async () => {
    try {
      const data = new FormData();
      data.append('avatar', img);

      await axios.post('http://localhost:3001/upload', data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
        .then((res) => {
          console.log(res.data.path);
          setAvatar(res.data.path);
        });
    } catch (error) {
      console.log('===>>> 👉👉👉 file: testMulter.jsx:19 👉👉👉 error', error);
    }
  }, [img]);

  return (
    <div className="wrapper">
      <div className="avatar">
        {
          avatar
            ? <img className="logo" src={`http://localhost:3001/${avatar}`} alt="avatar" />
            : <img className="logo" src="https://img1.freepng.ru/20180624/ivq/kisspng-business-organization-computer-software-tom-clancy-unknown-person-5b2f72c6649235.833799281529836230412.jpg" alt="avatar" />
        }
      </div>
    <input type="file" onChange={(e) => setImg(e.target.files[0])} />
    <button type="button" onClick={sendFile} className="btnChangeAvatar">Изменить аватар</button>
    </div>
  );
}

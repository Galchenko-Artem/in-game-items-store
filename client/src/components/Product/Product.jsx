import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const params = useParams();

  useEffect(() => {
    fetch('http://localhost:3001/product', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>Страничка продукта</div>
  );
}

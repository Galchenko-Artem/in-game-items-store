import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './app.css';
import Reg from './components/Reg';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
    <Link className="nav-main" to="/">Главная</Link>
    <Link className="nav-main" to="/reg">Регистрация</Link>

    <Routes>

      <Route path="/" element={<div>Главная страница</div>} />
      <Route path="/reg" element={<Reg />} />

    </Routes>
    </>
  );
}

export default App;

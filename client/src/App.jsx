import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './app.css';
import Reg from './components/Reg/Reg';
import Nav from './components/Nav/Nav';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001/user', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('user=>>>>>>>>', res);
        setUser(res);
      });

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
    <Nav user={user} setUser={setUser} />
    <Routes>

      <Route path="/" element={<div>Главная страница</div>} />
      <Route path="/reg" element={<Reg setUser={setUser} />} />

    </Routes>
    </>
  );
}

export default App;

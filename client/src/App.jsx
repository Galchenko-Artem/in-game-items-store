import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './app.css';
import Reg from './components/Reg/Reg';
import Nav from './components/Nav/Nav';
import MainPage from './components/MainPage/MainPage';
import Auth from './components/Auth/Auth';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';
import ProtectedAllPages from './components/ProtectedAllPages/ProtectedAllPages';
import SupportForm from './components/SupportForm/SupportForm';

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

      <Route path="/" element={<MainPage />} />
      <Route path="/support" element={<SupportForm setUser={setUser} />} />

      <Route element={<ProtectedRouter user={!user} />}>
        <Route path="/reg" element={<Reg setUser={setUser} />} />
        <Route path="/auth" element={<Auth setUser={setUser} />} />
      </Route>

      <Route element={<ProtectedAllPages />}>
      <Route path="*" />
      </Route>

    </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './app.css';
import { useSelector, useDispatch } from 'react-redux';
import Reg from './components/Reg/Reg';
import Nav from './components/Nav/Nav';
import MainPage from './components/MainPage/MainPage';
import Auth from './components/Auth/Auth';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';
import ProtectedAllPages from './components/ProtectedAllPages/ProtectedAllPages';
import SupportForm from './components/SupportForm/SupportForm';
import { userAuth } from './store/actions/userAction';

function App() {
  const user = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001/user', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(userAuth(res));
      });

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
    <Nav />
    <Routes>

      <Route path="/" element={<MainPage />} />
      <Route path="/support" element={<SupportForm />} />

      <Route element={<ProtectedRouter />}>
        <Route path="/reg" element={<Reg />} />
        <Route path="/auth" element={<Auth />} />
      </Route>

      <Route element={<ProtectedAllPages />}>
      <Route path="*" />
      </Route>

    </Routes>
    </>
  );
}

export default App;

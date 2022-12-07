/* eslint-disable no-console */
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './app.css';
import { useSelector, useDispatch } from 'react-redux';
import Reg from './components/Reg/Reg';
import Nav from './components/Nav/Nav';
import WOW from './components/WOW/WOW';
import ListOfAccounts from './components/WOW/ListOfAccounts/ListOfAccounts';
import Items from './components/WOW/Items/Items';
import Services from './components/WOW/ServiceWOW/Services';
import Dota from './components/Dota/Dota';
import ListAccDota from './components/Dota/ListOfAccounts/ListAccDota';
import SkinsDota from './components/Dota/Skins/SkinsDota';
import ServicesDota from './components/Dota/ServiceDota/ServicesDota';
import CsGo from './components/CS_GO/CsGo';
import ListAccCS from './components/CS_GO/ListOfAccounts/ListAccCS';
import SkinsCsGO from './components/CS_GO/Skins/SkinsCsGO';
import ServicesCS from './components/CS_GO/ServiceDota/ServicesCS';
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

      <Route path="/wow" element={<WOW />}>
          <Route index element={<div />} />
          <Route path="listOfAccounts" element={<ListOfAccounts />} />
          <Route path="items" element={<Items />} />
          <Route path="services" element={<Services />} />
      </Route>

      <Route path="/dota" element={<Dota />}>
        <Route index element={<div />} />
        <Route path="listOfAccounts" element={<ListAccDota />} />
        <Route path="skins" element={<SkinsDota />} />
        <Route path="services" element={<ServicesDota />} />
      </Route>

      <Route path="/csGo" element={<CsGo />}>
        <Route index element={<div />} />
        <Route path="listOfAccounts" element={<ListAccCS />} />
        <Route path="skins" element={<SkinsCsGO />} />
        <Route path="services" element={<ServicesCS />} />
      </Route>

    </Routes>
    </>
  );
}

export default App;

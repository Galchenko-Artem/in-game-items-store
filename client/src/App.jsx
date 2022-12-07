/* eslint-disable no-console */
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './app.css';
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

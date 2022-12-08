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
import ServicesCS from './components/CS_GO/ServiceCS/ServicesCS';
import MainPage from './components/MainPage/MainPage';
import Auth from './components/Auth/Auth';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';
import ProtectedAllPages from './components/ProtectedAllPages/ProtectedAllPages';
import SupportForm from './components/SupportForm/SupportForm';
import Account from './components/Account/Account';
import Lots from './components/Account/Lots/Lots';
import Sales from './components/Account/Sales/Sales';
import Product from './components/Product/Product';
import { userAuth } from './store/actions/userAction';

import NewLot from './components/LotForSale/NewLot';
import CsGoLotCreate from './components/LotForSale/CsGoLotCreate/CsGoLotCreate';
import ListAccCscreate from './components/LotForSale/CsGoLotCreate/ListOfAccounts/ListAccCscreate';
import SkinsCs from './components/LotForSale/CsGoLotCreate/Skins/SkinsCs';
import ServicesCs from './components/LotForSale/CsGoLotCreate/ServicesCS/ServicesCs';
import WowLotCreate from './components/LotForSale/WowLotCreate/WowLotCreate';
import ListAccWowCreate from './components/LotForSale/WowLotCreate/ListOfAccounts/ListAccWowCreate';
import ServicesWow from './components/LotForSale/WowLotCreate/ServicesWOW/ServicesWow';
import DotaLotCreate from './components/LotForSale/DotaLotCreate/DotaLotCreate';
import ListAccDotaCreate from './components/LotForSale/DotaLotCreate/ListOfAccounts/ListAccDotaCreate';
import SkinsDotaCreate from './components/LotForSale/DotaLotCreate/Skins/SkinsDotaCreate';
import ItemsWowCreate from './components/LotForSale/WowLotCreate/Items/ItemsWowCreate';
import Basket from './components/Basket/Basket';
import TestMulter from './components/TestMulter/TestMulter';
import ServicesDotaCreate from './components/LotForSale/DotaLotCreate/ServicesDota/ServicesDotaCreate';

function App() {
  const user = useSelector((state) => state.userStore);
  console.log('===>>> 👉👉👉 file: App.jsx:30 👉👉👉 user', user);
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

      <Route path="/account" element={<Account />}>
        <Route path="lots" element={<Lots />} />
        <Route path="sales" element={<Sales />} />
        <Route path="newLot" element={<NewLot />}>
          <Route path="csgo" element={<CsGoLotCreate />}>
            <Route path="createAcc" element={<ListAccCscreate />} />
            <Route path="skinsCreate" element={<SkinsCs />} />
            <Route path="servicesCreate" element={<ServicesCs />} />
          </Route>
              <Route path="wow" element={<WowLotCreate />}>
                <Route path="createAcc" element={<ListAccWowCreate />} />
                <Route path="skinsCreate" element={<ItemsWowCreate />} />
                <Route path="servicesCreate" element={<ServicesWow />} />
              </Route>
                      <Route path="dota" element={<DotaLotCreate />}>
                        <Route path="createAcc" element={<ListAccDotaCreate />} />
                        <Route path="skinsCreate" element={<SkinsDotaCreate />} />
                        <Route path="servicesCreate" element={<ServicesDotaCreate />} />
                      </Route>
        </Route>
      </Route>

      <Route path="/basket" element={<Basket />} />
      <Route path="/multer" element={<TestMulter />} />

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

      <Route path="/dota2" element={<Dota />}>
        <Route index element={<div />} />
        <Route path="listOfAccounts" element={<ListAccDota />} />
        <Route path="skins" element={<SkinsDota />} />
        <Route path="services" element={<ServicesDota />} />
      </Route>

      <Route path="/csgo" element={<CsGo />}>
        <Route index element={<div />} />
        <Route path="listOfAccounts" element={<ListAccCS />} />
        <Route path="skins" element={<SkinsCsGO />} />
        <Route path="services" element={<ServicesCS />} />
      </Route>

      <Route path="/product/:id" element={<Product />} />

    </Routes>
    </>
  );
}

export default App;

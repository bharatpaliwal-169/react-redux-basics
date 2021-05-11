import React from 'react';
import './App.css'
import Card from './components/CakeContainer';
import HookCake from './components/HookCake';
import IceCream from './components/IceCream';
import HookIceCream from './components/HookIceCream';
import NewCake from './components/NewCake';
import Item from './components/ItemContainer';

import Users from './components/users';

const App = () => {
  return (
    <div className="app">
      <Card />

      <HookCake />

      <IceCream />
      <HookIceCream />

      <NewCake />

      <Item cake />
      <Item />

      <Users />
      
    </div>
  );
}

export default App;

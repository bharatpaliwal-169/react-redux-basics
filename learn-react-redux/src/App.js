import React from 'react';
import Card from './components/CakeContainer';
import HookCake from './components/HookCake';
import IceCream from './components/IceCream';
import HookIceCream from './components/HookIceCream';

function App() {
  return (
    <div>
      <Card />

      with hooks

      <HookCake />

      <IceCream />
      <HookIceCream />
    </div>
  );
}

export default App;

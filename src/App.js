import React, { useState } from 'react';
import { VelInput, Slider } from './components';

const App = () => {
  const [vel, setVel] = useState(0.0);
  return (
    <div>
      <VelInput vel={vel} setVel={setVel} />
      <Slider vel={vel} setVel={setVel} />
    </div>
  );
};

export default App;

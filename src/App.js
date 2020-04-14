import React, { useState } from 'react';
import { VelInput, Slider } from './components';

const App = () => {
  const [vel, setVel] = useState(0.0);
  return (
    <div>
      <VelInput vel={vel} setVel={setVel} />
      <Slider vel={vel} />
    </div>
  );
};

export default App;

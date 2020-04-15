import React, { useState } from 'react';
import { VelInput, Slider, Image } from './components';
import star from './assets/images/star-small.png';

const App = () => {
  const [vel, setVel] = useState(0.0);
  return (
    <div>
      <Image src={star} vel={vel} />
      <VelInput vel={vel} setVel={setVel} />
      <Slider vel={vel} setVel={setVel} />
    </div>
  );
};

export default App;

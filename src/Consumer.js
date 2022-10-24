import { useEffect } from 'react';
import { useState } from './store';

function Consumer() {
  const age = useState((state) => state.age);
  const updateState = useState((state) => state.updateState);

  useEffect(() => {
    console.log('consumer rerender', Date.now());
  });

  useEffect(() => {
    updateState('age', 5);

    setTimeout(() => {
      updateState('age', NaN);
    }, 2500);
  }, []);

  return <h1>{age}</h1>;
}

export default Consumer;

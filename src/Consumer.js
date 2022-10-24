import { useEffect } from 'react';
import { useState } from './store';

function Consumer() {
  const age = useState((state) => state.age);
  const updateState = useState((state) => state.updateState);

  useEffect(() => {
    console.log('consumer rerender', Date.now());
  });

  function handleClick() {
    updateState('age', NaN);
  }

  return (
    <div>
      <h1>Age: {age}</h1>
      <button type="button" onClick={handleClick}>
        Set age to NaN
      </button>
    </div>
  );
}

export default Consumer;

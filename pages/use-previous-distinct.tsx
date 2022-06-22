import { useState } from 'react';
import { usePrevious, usePreviousDistinct } from 'react-power-ups';

export default function Demo() {
  const [randomNumber, setRandomNumber] = useState(3);
  const updateRandomNumber = () => setRandomNumber(Math.floor(Math.random() * 100 + 1));

  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  const prevCountA = usePrevious(count);
  const prevCountB = usePreviousDistinct(count);

  return (
    <>
      <div>
        <div>Random number: {randomNumber}</div>
        <button onClick={updateRandomNumber}>Update random number</button>
      </div>
      <br />

      <div>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
      </div>
      <hr />

      <div>
        Based on previous render (usePrevious)
        <br />
        Prev count: {prevCountA ?? <i>undefined</i>}
      </div>
      <br />

      <div style={{ fontWeight: 'bold' }}>
        Based on previous value (usePreviousDistinct)
        <br />
        Prev count: {prevCountB ?? <i>undefined</i>}
      </div>
    </>
  );
}

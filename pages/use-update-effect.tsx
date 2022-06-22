import { useEffect, useState } from 'react';
import { useUpdateEffect } from 'react-power-ups';

export default function Demo() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  useEffect(() => {
    console.log('Hello from useEffect');
  }, [count]);

  useUpdateEffect(() => {
    // This only called when count updated
    console.log('Hello from useUpdateEffect');
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <hr />
      <div>ℹ️ Check console</div>
    </>
  );
}

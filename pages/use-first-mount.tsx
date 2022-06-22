import { useState } from 'react';
import { useFirstMount } from 'react-power-ups';

export default function Demo() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  const isFirstMount = useFirstMount();

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment (trigger re-render)</button>
      <hr />
      <div>First mount: {isFirstMount ? 'Yes' : 'No'}</div>
    </>
  );
}

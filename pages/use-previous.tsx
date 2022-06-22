import Link from 'next/link';
import { useState } from 'react';
import { usePrevious } from 'react-power-ups';

export default function Demo() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  const prevCount = usePrevious(count);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <hr />

      <div>Previous count state: {prevCount ?? <i>undefined</i>}</div>
      <AnotherComponent count={count} />

      <br />
      <Link href="/use-previous-distinct">
        <a>See the difference with usePreviousDistinct hook</a>
      </Link>
    </>
  );
}

function AnotherComponent({ count }: { count: number }) {
  const prevCount = usePrevious(count);
  return <div>Previous count prop: {prevCount ?? <i>undefined</i>}</div>;
}

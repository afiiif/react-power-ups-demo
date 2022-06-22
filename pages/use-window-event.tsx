import { useState } from 'react';
import { useWindowEvent } from 'react-power-ups';

export default function Demo() {
  const [coord, setCoord] = useState<number[]>();
  const [key, setKey] = useState('');

  useWindowEvent('click', (ev) => {
    setCoord([ev.clientX, ev.clientY]);
  });

  useWindowEvent('keyup', (ev) => {
    setKey(ev.key);
  });

  return (
    <>
      <div>ℹ️ Click anywhere or type anything</div>
      <hr />

      <div>Last click coordinate: {String(coord)}</div>
      <div>Last pressed key: &quot;{key}&quot;</div>
    </>
  );
}

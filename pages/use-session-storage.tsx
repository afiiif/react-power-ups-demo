import { useSessionStorage } from 'react-power-ups';

export default function Demo() {
  const [value, setValue] = useSessionStorage<number>('blue');

  return (
    <>
      <div>Value: {String(value)}</div>
      <button onClick={() => alert(sessionStorage.getItem('blue'))}>Check sessionStorage</button>
      <button onClick={() => location.reload()}>Reload window</button>
      <hr />

      <button onClick={() => setValue(3)}>Set</button>
      <button onClick={() => setValue((prev) => prev && prev + 3)}>Update</button>
      <button onClick={() => setValue(null)}>Remove</button>
    </>
  );
}

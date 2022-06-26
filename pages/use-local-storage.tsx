import { useLocalStorage } from 'react-power-ups';

export default function Demo() {
  const [value, setValue] = useLocalStorage<number>('red');

  return (
    <>
      <div>Value: {String(value)}</div>
      <button onClick={() => alert(localStorage.getItem('red'))}>Check localStorage</button>
      <button onClick={() => location.reload()}>Reload window</button>
      <hr />

      <button onClick={() => setValue(3)}>Set</button>
      <button onClick={() => setValue((prev) => prev && prev + 3)}>Update</button>
      <button onClick={() => setValue(null)}>Remove</button>
    </>
  );
}

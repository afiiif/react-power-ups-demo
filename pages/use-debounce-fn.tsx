import { useDebounceFn } from 'react-power-ups';

export default function Demo() {
  const [fetchData, cancel] = useDebounceFn((value: string) => {
    console.info(`Fetch data for keyword "${value}" ⏳`);
  }, 1000);

  return (
    <>
      <input type="text" onChange={(e) => fetchData(e.target.value)} />
      <button onClick={cancel}>Cancel</button>

      <div>ℹ️ Check console</div>
    </>
  );
}

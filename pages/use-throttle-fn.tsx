import { useDebounceFn, useThrottleFn } from 'react-power-ups';

export default function Demo() {
  const [fetchData, cancel] = useThrottleFn((value: string) => {
    console.info(`Fetch data for keyword "${value}" ⏳`);
  }, 1_000);

  return (
    <>
      <h2>Throttle</h2>
      <input type="text" onChange={(e) => fetchData(e.target.value)} />
      <button onClick={cancel}>Cancel</button>

      <div>ℹ️ Check console</div>

      <hr />
      <DemoDebounce />
    </>
  );
}

function DemoDebounce() {
  const [fetchData, cancel] = useDebounceFn((value: string) => {
    console.info(`Fetch data for keyword "${value}" ⏳`);
  }, 1_000);

  return (
    <>
      <h2>Debounce</h2>
      <input type="text" onChange={(e) => fetchData(e.target.value)} />
      <button onClick={cancel}>Cancel</button>

      <div>ℹ️ Check console</div>
    </>
  );
}

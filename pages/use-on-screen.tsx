import { useIntersection, useOnScreen } from 'react-power-ups';

export default function Demo() {
  const [ref, isOnScreen] = useOnScreen(false);

  return (
    <>
      <div style={{ position: 'fixed' }}>isOnScreen: {isOnScreen ? 'Yes' : 'No'}</div>

      <div style={{ height: 2000 }} />

      <div ref={ref} style={{ background: 'DeepSkyBlue', padding: 32 }}>
        Hello
      </div>

      <div style={{ height: 2000 }} />
    </>
  );
}

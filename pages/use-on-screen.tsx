import Head from 'next/head';
import Link from 'next/link';
import { useOnScreen } from 'react-power-ups';

export default function Demo() {
  const [ref, isOnScreen] = useOnScreen(false);

  return (
    <>
      <div style={{ position: 'fixed' }}>
        <div>
          This hook is deprecated, use{' '}
          <Link href="/use-in-view">
            <a>useInView</a>
          </Link>{' '}
          instead
        </div>
        <h2>{isOnScreen ? 'Day' : 'Night'}</h2>
        <div>ℹ️ Scroll down</div>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  background: ${isOnScreen ? 'lightskyblue' : 'darkslategray'};
                  ${isOnScreen ? '' : 'color: #fff !important;'}
                }  
              `,
            }}
          />
        </Head>
      </div>

      <div style={{ height: 2000 }} />

      <div ref={ref} style={{ background: 'yellow', width: 80, height: 80, borderRadius: 80 }}>
        Sun
      </div>

      <div style={{ height: 2000 }} />
    </>
  );
}

import Head from 'next/head';
import { useInView } from 'react-power-ups';

export default function Demo() {
  const [ref, isOnScreen] = useInView(false);

  return (
    <>
      <div style={{ position: 'fixed' }}>
        <h2>{isOnScreen ? 'Day' : 'Night'}</h2>
        <div>ℹ️ Scroll down</div>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  background: ${isOnScreen ? 'lightskyblue' : 'midnightblue'};
                  ${isOnScreen ? '' : 'color: #fff !important;'}
                  transition: all .5s ease;
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

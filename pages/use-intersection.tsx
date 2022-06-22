import Link from 'next/link';
import { useIntersection } from 'react-power-ups';

export default function Demo() {
  const refA = useIntersection({
    onEnter: () => console.log('[A] appear in page'),
    onLeave: () => console.log('[A] dissappear from page'),
  });

  const refB = useIntersection<HTMLAnchorElement>({
    onIntersect: (isIntersecting) => console.log('[B] onIntersect triggered', isIntersecting),
    rootMargin: '320px',
  });

  return (
    <>
      <div style={{ position: 'fixed' }}>ℹ️ Scroll and check console</div>

      <div style={{ height: 2000 }} />

      <div ref={refA} style={{ background: 'DeepSkyBlue', padding: 32 }}>
        A
      </div>

      <div style={{ height: 2000 }} />

      <a ref={refB} style={{ background: 'MediumSpringGreen', display: 'block', padding: 16 }}>
        B (with rootMargin)
      </a>

      <div style={{ height: 2000 }} />

      <Link href="/use-on-screen">
        <a>
          For some cases, you might need <b>useOnScreen</b> hook which is simpler
        </a>
      </Link>
    </>
  );
}

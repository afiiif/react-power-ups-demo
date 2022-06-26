import Head from 'next/head';
import Link from 'next/link';

const PAGES = [
  { href: '/use-toggle', title: 'useToggle' },
  { href: '/use-debounce', title: 'useDebounce' },
  { href: '/use-debounce-fn', title: 'useDebounceFn' },
  { href: '/use-throttle', title: 'useThrottle' },
  { href: '/use-throttle-fn', title: 'useThrottleFn' },
  { href: '/use-intersection', title: 'useIntersection' },
  { href: '/use-in-view', title: 'useInView' },
  { href: '/use-window-event', title: 'useWindowEvent' },
  { href: '/use-count-down', title: 'useCountDown' },
  { href: '/use-local-storage', title: 'useLocalStorage' },
  { href: '/use-session-storage', title: 'useSessionStorage' },
  { href: '/use-first-mount', title: 'useFirstMount' },
  { href: '/use-update-effect', title: 'useUpdateEffect' },
  { href: '/use-previous', title: 'usePrevious' },
  { href: '/use-previous-distinct', title: 'usePreviousDistinct' },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>React Power-Ups Demo on Next.js App</title>
      </Head>

      <h1>
        React Power-Ups Demo
        <br />
        on Next.js App
      </h1>

      <ol>
        {PAGES.map(({ href, title }) => (
          <li key={title}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ol>

      <hr />
      <div>
        📦 NPM:{' '}
        <a href="https://www.npmjs.com/package/react-power-ups">
          https://www.npmjs.com/package/react-power-ups
        </a>
      </div>
    </>
  );
}

import { useState } from 'react';
import { useDebounce, useThrottle } from 'react-power-ups';

export default function Demo() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useThrottle(keyword, 500);

  const [keyword2, setKeyword2] = useState('hello');
  const debouncedKeyword2 = useThrottle(keyword2, 1_500, (value) => {
    console.log('useThrottle callback fn', value);
  });

  return (
    <>
      <h2>Throttle</h2>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <div>Keyword: {keyword}</div>
      <div>Throttled keyword: {debouncedKeyword}</div>

      <br />
      <input type="text" value={keyword2} onChange={(e) => setKeyword2(e.target.value)} />
      <span> 👈 With callback, check console</span>
      <div>Keyword: {keyword2}</div>
      <div>Throttled keyword: {debouncedKeyword2}</div>

      <hr />
      <DemoDebounce />
    </>
  );
}

function DemoDebounce() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 500);

  const [keyword2, setKeyword2] = useState('world');
  const debouncedKeyword2 = useDebounce(keyword2, 1_500, (value) => {
    console.log('useDebounce callback fn', value);
  });

  return (
    <>
      <h2>Debounce</h2>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <div>Keyword: {keyword}</div>
      <div>Debounced keyword: {debouncedKeyword}</div>

      <br />
      <input type="text" value={keyword2} onChange={(e) => setKeyword2(e.target.value)} />
      <span> 👈 With callback, check console</span>
      <div>Keyword: {keyword2}</div>
      <div>Debounced keyword: {debouncedKeyword2}</div>
    </>
  );
}

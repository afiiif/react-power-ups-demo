import { useState } from 'react';
import { useDebounce } from 'react-power-ups';

export default function Demo() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 500);

  const [keyword2, setKeyword2] = useState('hello');
  const debouncedKeyword2 = useDebounce(keyword2, 1000, (value) => {
    console.log('Callback fn', value);
  });

  return (
    <>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <div>Keyword: {keyword}</div>
      <div>Debounced Keyword: {debouncedKeyword}</div>

      <hr />

      <h2>With callback:</h2>
      <input type="text" value={keyword2} onChange={(e) => setKeyword2(e.target.value)} />
      <div>Keyword: {keyword2}</div>
      <div>Debounced Keyword: {debouncedKeyword2}</div>
      <div>ℹ️ Check console</div>
    </>
  );
}

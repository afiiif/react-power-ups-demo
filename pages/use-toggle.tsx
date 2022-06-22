import { useToggle } from 'react-power-ups';

export default function Demo() {
  const [showPassword, toggleShowPassword] = useToggle();

  return (
    <>
      <input type={showPassword ? 'text' : 'password'} defaultValue="abc123" />
      <br />

      <button onClick={toggleShowPassword}>Toggle Show/Hide Password</button>
      <br />
      <button onClick={() => toggleShowPassword(true)}>Show Password</button>
      <button onClick={() => toggleShowPassword(false)}>Hide Password</button>
    </>
  );
}

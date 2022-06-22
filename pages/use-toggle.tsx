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

      <hr />
      <DemoPopUp />
    </>
  );
}

function DemoPopUp() {
  const [isOpen, toggleModal] = useToggle();

  return (
    <>
      <h2>Demo on modal:</h2>
      <button onClick={toggleModal}>Click Me</button>

      <div
        style={{
          display: isOpen ? 'block' : 'none',
          position: 'fixed',
          top: '5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#fff',
          padding: '1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 0 0 100vmax rgba(0,0,0,.5)',
        }}
      >
        <div>Hello 👋</div>
        <br />
        <button onClick={toggleModal}>Close</button>
      </div>
    </>
  );
}

import { useCountDown } from 'react-power-ups';

export default function Demo() {
  const [timeLeft, actions] = useCountDown({ defaultDuration: 10_000, interval: 100 });

  return (
    <>
      <h1>{(timeLeft / 1000).toFixed(2)}</h1>
      <button onClick={() => actions.start()}>Start</button>
      <button onClick={() => actions.start(4_200)}>Start for 4.2s</button>
      <button onClick={() => actions.pause()}>Pause</button>
      <button onClick={() => actions.resume()}>Resume</button>
      <button onClick={() => actions.reset()}>Reset</button>

      <hr />
      <DemoOTPUseCase />
    </>
  );
}

function DemoOTPUseCase() {
  const [timeLeft, actions] = useCountDown({ defaultDuration: 10_000 });
  const sendOTP = () => {
    console.info('Sending OTP...');
    actions.start();
  };

  return (
    <>
      <button onClick={sendOTP} disabled={!!timeLeft}>
        {timeLeft ? '🚫' : '🟢'} Send OTP
      </button>
      {timeLeft > 0 && <span> Resend OTP in {timeLeft / 1000}s</span>}
    </>
  );
}

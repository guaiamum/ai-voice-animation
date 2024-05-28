import './App.css';
import { useAudio } from './hooks/audio';

function App() {
  // Get user audio
  const { amplitude } = useAudio();

  console.log(amplitude)

  return (
    <section style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {Math.floor(amplitude)}
    </section>
  );
}

export default App;

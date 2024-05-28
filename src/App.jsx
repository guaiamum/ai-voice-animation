import './App.css';
import Bar from './components/bars';
import { useAudio } from './hooks/audio';

function App() {
  // Get user audio
  const { startRecording, amplitude } = useAudio();


  return (
    <>
    <button type="button" onClick={startRecording} className="absolute bottom-0 left-0 m-2 w-6 h-6 rounded-full bg-red-600">🎤</button>
    <section className="flex items-center gap-2">
      <Bar amplitude={amplitude} multiplier={.4}/>
      <Bar amplitude={amplitude} multiplier={1}/>
      <Bar amplitude={amplitude} multiplier={1}/>
      <Bar amplitude={amplitude} multiplier={.4}/>
    </section>
    </>
  );
}

export default App;

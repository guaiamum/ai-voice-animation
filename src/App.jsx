import './App.css';
import Bar from './components/bars';
import StartRecordingButton from './components/start-recording';
import { useAudio } from './hooks/audio';

function App() {
  // Get user audio
  const { startRecording, amplitude } = useAudio();

  return (
    <>
    <StartRecordingButton startRecording={startRecording} />
    <section className="flex items-center gap-2">
      <Bar amplitude={amplitude} multiplier={.4} delay={0}/>
      <Bar amplitude={amplitude} multiplier={1} delay={20}/>
      <Bar amplitude={amplitude} multiplier={1} delay={40}/>
      <Bar amplitude={amplitude} multiplier={.4} delay={60}/>
    </section>
    </>
  );
}

export default App;

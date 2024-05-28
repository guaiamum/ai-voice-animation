import { useEffect, useState } from 'react';

export const useAudio = () => {
  const [amplitude, setAmplitude] = useState(0);

  useEffect(() => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const getMicrophoneInput = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
      } catch (err) {
        alert(`Error accessing microphone ${err}`);
      }
    };

    getMicrophoneInput();

    const updateAmplitude = () => {
      analyser.getByteFrequencyData(dataArray);
      const avgAmplitude = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
      setAmplitude(avgAmplitude);
      requestAnimationFrame(updateAmplitude);
    };

    updateAmplitude();

    return () => {
      audioContext.close();
    };
  }, []);

  return { amplitude };
};

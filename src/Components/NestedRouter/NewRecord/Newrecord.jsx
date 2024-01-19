import React, { useState, useEffect } from 'react';
import img1 from "../../../image/record.png"
import img2 from "../../../image/setRecord.png"

import "./NewRecord.css"

const Newrecord = () => {
  const [recording, setRecording] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);
      setRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (audioStream) {
      audioStream.getTracks().forEach(track => track.stop());
    }
    setRecording(false);
    URL.revokeObjectURL(audioUrl)
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioChunks((prevChunks) => [...prevChunks, event.data]);
    }
  };

  useEffect(() => {
    if (recording) {
      const mediaRecorder = new MediaRecorder(audioStream);
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorder.start();
      return () => {
        mediaRecorder.stop();
        setAudioChunks([]);
        URL.revokeObjectURL(audioUrl);
      };
    }
  }, [recording, audioStream, audioChunks]);
  return (
    <div className='parent-record d-flex flex-column align-items-center justify-content-around'>
      <h4 className='sub-title'>Click the button to start recording or import an audio</h4>
      <div>
        <img src={img1} onClick={recording ? stopRecording : startRecording} className='record' />
        <img src={img2} className='record' />
      </div>
      <div>
        <button onClick={recording ? stopRecording : startRecording}>
          {recording ? 'Stop Recording' : 'Start Recording'}
        </button>
        {audioUrl && (
          <div>
            <audio controls src={audioUrl} />
          </div>
        )}
      </div>
      <button className="btn-f-page btn-record"> Show Result</button>
    </div>
  )
}

export default Newrecord
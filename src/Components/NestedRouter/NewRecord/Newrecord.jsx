import React, { useState, useEffect } from 'react';
import "./NewRecord.css"

const Newrecord = () => {
  const [recording, setRecording] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [error, setError] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  // select audio
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleUpload = () => {
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    }
  };


  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);
      setRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setError("Connect the microphone or allow the browser to play the sound")
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
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
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
      <div className='d-flex align-items-center justify-content-center'>
        {/* <img src={img1} onClick={recording ? stopRecording : startRecording} className='record' /> */}
        <div onClick={recording ? stopRecording : startRecording} className='record' ></div>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
      </div>

      <div>
        <div className='text-center text-danger'>
          {error}
        </div>
        <div className='text-center'>
          <button onClick={recording ? stopRecording : startRecording}>
            {recording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
        {audioUrl && (
          <div>
            <audio controls src={audioUrl} />
          </div>
        )}
        {selectedFile && (
          <div className='text-center py-2 mt-3 sub-title'>
            {selectedFile.name}
          </div>
        )}
      </div>
      <button onClick={handleUpload} className="btn-f-page btn-record"> Show Result</button>
    </div>
  )
}

export default Newrecord
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SpeechContextProvider from './Components/Context/Store'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <SpeechContextProvider>
      <App />
    </SpeechContextProvider>
  </React.StrictMode>,


)

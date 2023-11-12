import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

let name = 'Bhoomi'
function App() {
  const [mode, setMode] = useState('light');

  const [alter, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message, type: type 
    });

  function toggleMode() {
    if(mode === 'light') { 
      (setMode('dark'));
      document.body.style.backgroundColor = '#495057' 
      showAlert("Dark Mode has been enabled", "success")
    }else{
      (setMode('light'));
      document.body.style.backgroundColor = '#ffffff' 
      showAlert("Dark Mode has been disabled", "success")

  }
  }
  return (
    <>
      <Navbar title="Text Utils" about="About Text" mode={mode} toggleMode={toggleMode} />
      <Alert />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analize" mode={mode}/>
      </div>
      <About />

    </>
  );
}
}

export default App;

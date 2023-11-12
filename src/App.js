import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

let name = 'Bhoomi'
function App() {

  const [state, setState] = useState({
    darkMode: false,
    alert: null
  });

  useEffect(() => {
    if (state.darkMode) {
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
    }
  }, [state.darkMode]);

  function showAlert(message, type) {
    setState(prev => ({
      ...prev,
      alert: { msg: message, type: type }
    }));

    setTimeout(() => {
      setState(prev => ({
        ...prev,
        alert: null
      }))
    }, 1000);

  }

  function toggleMode(e) {
    if (state.darkMode) {
      setState(prev => ({
        ...prev,
        darkMode: false,
      }));
    } else {
      setState(prev => ({
        ...prev,
        darkMode: true,
      }));
    }
  }
  return (
    <>
      <Navbar title="Text Utils" about="About Text" darkMode={state.darkMode} toggleMode={toggleMode} />
      <Alert />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analize" showAlert={showAlert} />
      </div>
      <About />

    </>
  );
}

export default App;

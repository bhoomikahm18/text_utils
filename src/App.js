import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = 'Bhoomi'
function App() {
  const [mode, setMode] = useState('light');

  function toggleMode() {
    if(mode === 'light') { 
      (setMode('dark'));
      document.body.style.backgroundColor = '#495057' 
    }else{
      (setMode('light'));
      document.body.style.backgroundColor = '#ffffff' 

  }
  }
  return (
    <>
      <Navbar title="Text Utils" about="About Text" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analize" mode={mode}/>
      </div>
      <About />

    </>
  );
}

export default App;

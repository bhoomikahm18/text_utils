import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = 'Bhoomi'
function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
      <Navbar title="Text Utils" about="About Text" mode={mode}/>
      <div className='container my-3'>
        <TextForm heading="Enter the text to analize"/>
      </div>
      <About />
      
    </>
  );
}

export default App;

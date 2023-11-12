import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = 'Bhoomi'
function App() {
  return (
    <>
      <Navbar title="Text Utils" about="About Text" />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analize"/>
      </div>
      
    </>
  );
}

export default App;

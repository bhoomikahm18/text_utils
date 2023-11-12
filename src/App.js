import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = 'Bhoomi'
function App() {
  return (
    <>
      <Navbar about="About Text" />
      <div className='container'>
        <TextForm />
      </div>
    </>
  );
}

export default App;

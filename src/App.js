import './App.css';
import Navbar from './components/Navbar';

let name = 'Bhoomi'
function App() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum facilis facere maiores distinctio quibusdam officia officiis praesentium magni nostrum, quas, magnam exercitationem quidem ipsum, nulla provident aperiam atque. Cupiditate, beatae?</p>
      </div>
    </>
  );
}

export default App;

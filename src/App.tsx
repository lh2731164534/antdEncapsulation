import './App.css'
import ImgPre from './components/ImgPre';
import img from 'asset/logo512.png'
function App() {
  return (
    <ImgPre src={img} licenceEncode={'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'} />
  );
}

export default App;

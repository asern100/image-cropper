import './App.css';
import ImageCropper from './components/ImageCropper';
import img from "./me.jpg"

function App() {
  return (
    <div className="App">
      <ImageCropper src={img} />
    </div>
  );
}

export default App;

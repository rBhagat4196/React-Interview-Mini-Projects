
import './App.css';
import Accordian from './components/accordian/Accordian';
import Slider from './components/image-slider';
import LoadData from './components/load-more';
import QrCodeGenerator from './components/qr-code';
import RandomColor from './components/radom-color';
import Rating from './components/star-rating/Rating';
import TreeView from './components/tree-view';

function App() {
  return (
    <div className="mt-[10px] mb-[10px] flex flex-col gap-4">
      <Accordian/>
      <RandomColor/>
      <Rating
      stars={10}
      />
      <Slider/>
      <LoadData/>
      <TreeView/>
      <QrCodeGenerator/>
    </div>
  );
}

export default App;


import './App.css';
import Accordian from './components/accordian/Accordian';
import Slider from './components/image-slider';
import LoadData from './components/load-more';
import RandomColor from './components/radom-color';
import Rating from './components/star-rating/Rating';

function App() {
  return (
    <div className="mt-[10px] mb-[10px] flex flex-col gap-4">
      <Accordian/>
      <RandomColor/>
      <Rating
      stars={7}
      />
      <Slider/>
      <LoadData/>
    </div>
  );
}

export default App;

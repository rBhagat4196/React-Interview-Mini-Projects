
import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/radom-color';

function App() {
  return (
    <div className="mt-[10px] flex flex-col gap-4">
      <Accordian/>
      <RandomColor/>
    </div>
  );
}

export default App;


import './App.css';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';
import RadarChart from './Components/RadarChart';
import Dough from './Components/Dough';
import PieChart from './Components/PieChart';
import BubbleChart from './Components/BubbleChart';

function App() {
  
  return (
    <div className="App">
      
      <div className="chart">
        <LineChart/>
        <BarChart/>
        <RadarChart/>
        <Dough/>
        <PieChart/>
        <BubbleChart/>
      </div>
    </div>
  );
}

export default App;

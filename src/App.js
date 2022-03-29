import './App.css';
import Lottery from './Lottery/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery title="Mega Lotto" balls="6" maxNum="40" />
    </div>
  );
}

export default App;

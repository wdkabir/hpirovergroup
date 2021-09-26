import './App.css';
import Header from './components/Header/Header';
import Members from './components/Members/Members';


function App() {
  return (
    <div className="App">
      {/* Imported Header and Members Component */}
      <Header></Header>
      <Members></Members>
    </div>
  );
}

export default App;

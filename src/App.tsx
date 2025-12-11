import './App.css'
import AnalogClock from './components/AnalogClock'
import DateWidget from './components/DateWidget'

function App() {
  return (
    <div id="app-root">
      <div className="clock-container">
        <div className="left">
          <AnalogClock />
        </div>
        <div className="right">
          <DateWidget />
        </div>
      </div>
    </div>
  )
}

export default App

import './App.css'
import AnalogClock from './components/AnalogClock'
import DateWidget from './components/DateWidget'

function App () {
  return (
    <div id='app-root'>
      <div className='clock-container'>
        <div className='left'>
          <AnalogClock />
        </div>
        <div className='right'>
          <div className='right-top'>
            <DateWidget />
          </div>
          <div className='right-bottom'>
            <div className='placeholder'>
              <p>Placeholder text — replace me with content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

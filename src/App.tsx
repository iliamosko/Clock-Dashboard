import { useEffect } from 'react'
import './App.css'
import AnalogClock from './components/AnalogClock'
import DateWidget from './components/DateWidget'
import QuoteGenerator from './components/QuoteGenerator'
import { determineDimColor } from './utils/colorPickerService'

function App () {
  useEffect(() => {
    let dimColor = determineDimColor()

    let divRoot = document.getElementById('app-root');

    if (divRoot) {
      divRoot.style.backgroundColor = dimColor;
    }

    // Determine the background color every hour
    const hourInterval = setInterval(() => {
      dimColor = determineDimColor()
      if (divRoot) {
        divRoot.style.backgroundColor = dimColor;
      }
    }, 3600000) // 1 hour in milliseconds = 60 * 60 * 1000

    return () => clearInterval(hourInterval);
  }, [])


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
            <QuoteGenerator />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

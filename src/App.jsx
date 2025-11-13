import { useState } from 'react'
import logo from '/foresight-logo.png'

function App() {
  const [isBrightMode, setIsBrightMode] = useState(false)

  const toggleMode = () => {
    setIsBrightMode(!isBrightMode)
  }

  return (
    <div className={`min-h-screen flex items-center justify-center 
    ${isBrightMode ? 'bg-white' : 'bg-black'}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleMode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isBrightMode ? 'Dark Mode' : 'Bright Mode'}
        </button>
      </div>
      <div className={`w-120 h-120 bg-indigo-500 rounded-full 
      ${isBrightMode ? 'blur-[150px]' : 'blur-[200px]'} `}></div>

      <h1 className='absolute top-65 text-indigo-300 text-shadow-white
 text-4xl font-bold '>Welcome to Foresight</h1>
      <img src={logo} alt="Foresight Logo" className="absolute top-6/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-100 drop-shadow-2xl" />
    </div>
  )
}

export default App

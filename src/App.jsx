import { useState } from 'react'

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
      <div className={`w-120 h-120 bg-blue-500 rounded-full 
      ${isBrightMode ? 'blur-[150px]' : 'blur-[200px]'} `}></div>
    </div>
  )
}

export default App

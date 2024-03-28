import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Auth/>
    </div>
  )
}

export default App
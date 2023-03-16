import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
import TimelineColor from './components/timeline/Timeline'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Home />
      <Courses />
     <TimelineColor />
      
      
      
    </div>
  )
}

export default App

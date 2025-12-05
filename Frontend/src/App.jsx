import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from '../components/Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Student Management System</h1>

      
                 <Table/>
    </>
  )
}

export default App

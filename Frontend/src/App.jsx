import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{Routes,Route} from "react-router-dom"
import Table from '../components/Table'
import CreateStudent from '../components/CreateStudent'
import EditStudent from '../components/EditStudent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

      <Routes>
        <Route path="/" element={<Table/>}/>
        <Route path="/create-student" element={<CreateStudent/>}/>
        <Route path="/edit-student" element={<EditStudent/>}/>
      </Routes>
                 
    </>
  )
}

export default App

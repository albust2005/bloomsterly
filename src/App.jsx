import './App.css'

import { LandingPage } from './components/Index'
import { Registrar } from './components/registro'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Registrar/>}></Route>
      </Routes>
    </div>
  )
}

export default App

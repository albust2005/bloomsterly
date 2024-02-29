import './App.css'

import { LandingPage } from './components/Index'
import { Route, Routes } from 'react-router'
import { ThemeColor } from './components/buttons/buttonThemeColor'
import { Login } from './components/Login'

function App() {
  return (
    <div>
      <ThemeColor></ThemeColor>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App

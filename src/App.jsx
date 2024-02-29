import './App.css'

import { LandingPage } from './components/Index'
import { Route, Routes } from 'react-router'
import { ThemeColor } from './components/buttons/buttonThemeColor'
import { Login } from './components/Login'
import { Servicios } from './components/Servicios'
import { Pedidos } from './components/Pedidos'

function App() {
  return (
    <div>
      <ThemeColor></ThemeColor>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        <Route path='/servicios' element={<Servicios/>}>

        </Route>

        <Route path='/pedidos' element={<Pedidos/>}>

        </Route>
      </Routes>
    </div>
  )
}

export default App

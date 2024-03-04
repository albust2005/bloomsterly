import './App.css'


import { Route, Routes } from 'react-router'

import { LandingPage } from './components/Index'
import { ThemeColor } from './components/buttons/buttonThemeColor'
import { Login } from './components/Login'
import { Servicios } from './components/Servicios'
import { Pedidos } from './components/Pedidos'
import { ServicioEspecifico } from './components/ServicioEspecifico'




function App() {
  return (
    <div>
      <ThemeColor></ThemeColor>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        <Route path='/servicios' element={<Servicios/>}></Route>
        <Route path='/servicio/:name' element={<ServicioEspecifico/>}>
          
        </Route>

        <Route path='/pedidos' element={<Pedidos/>}>

        </Route>
      </Routes>
    </div>
  )
}

export default App

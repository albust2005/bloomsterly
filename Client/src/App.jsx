import './App.css'


import { Route, Routes } from 'react-router'

import { LandingPage } from './pages/Index'
import { ThemeColor } from './components/buttons/buttonThemeColor'
import { Login } from './pages/Login'
import { Servicios } from './pages/usuario/Servicios'
import { Pedidos } from './pages/usuario/Pedidos'
import { ServicioEspecifico } from './pages/usuario/ServicioEspecifico'
import { Administrador } from './pages/administrador/administrador'  
import { EmpresaInfo } from './pages/usuario/EmpresaInfo'


function App() {
  return (
    <div>
      <ThemeColor></ThemeColor>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Administrador' element={<Administrador/>}></Route>
        
        <Route path='/servicios' element={<Servicios/>}></Route>
        <Route path='/servicios/:categoriaName' element={<ServicioEspecifico/>}></Route>
        <Route path='/servicios/:categoriaName/:empresa' element={<EmpresaInfo/>}></Route>

        <Route path='/pedidos' element={<Pedidos/>}>

        </Route>
      </Routes>
    </div>
  )
}

export default App

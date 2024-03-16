import './App.css'

import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'

import { LandingPage } from './pages/Index'
import { ThemeColor } from './components/buttons/buttonThemeColor'
import { Login } from './pages/Login'
import { Servicios } from './pages/usuario/Servicios'
import { Pedidos } from './pages/usuario/Pedidos'
import { ServicioEspecifico } from './pages/usuario/ServicioEspecifico'
import { Administrador } from './pages/administrador/administrador'
import { EmpresaInfo } from './pages/usuario/EmpresaInfo'
import { Layaout } from './components/templates/Layaout'
import { Header } from './components/templates/Header'
import { Footer } from './components/templates/Footer'


function App() {
  // Cambio al tema dep la config del sistema
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  })

  //Cambio de tema dep de la persona
  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  }, [theme])

  //boton dark_theme
  const handleChangeDark = () => {
    setTheme(prevTheme => prevTheme == "dark" ? "dark" : "dark")
  }

  //boton light_theme
  const handleChangeLight = () => {
    setTheme(prevTheme => prevTheme == "light" ? "light" : "light")
  }

  return (
    <Layaout>
      <Header theme={theme}/>

      <ThemeColor
        handleChangeDark={handleChangeDark}
        handleChangeLight={handleChangeLight}
      />

      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Administrador' element={<Administrador />}></Route>

        <Route path='/servicios' element={<Servicios />}></Route>
        <Route path='/servicios/:categoriaName' element={<ServicioEspecifico />}></Route>
        <Route path='/servicios/:categoriaName/:empresa' element={<EmpresaInfo />}></Route>

        <Route path='/pedidos' element={<Pedidos />} />
      </Routes>

      <Footer theme={theme} />
    </Layaout>
  )
}

export default App

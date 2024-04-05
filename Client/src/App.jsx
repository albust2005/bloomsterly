import './App.css'

import { Route, Routes } from 'react-router'

import { Layaout } from './components/templates/Layaout'
import { Header } from './components/templates/Header'
import { Footer } from './components/templates/Footer'
import { LandingPage } from './pages/Index'

import { ThemeColor } from './components/buttons/buttonThemeColor'
import { Login } from './pages/Login'
import { Pedidos } from './pages/usuario/Pedidos'

import { Administrador } from './pages/administrador/administrador'

//INTERFAZ USUARIO
import { Categorias } from './pages/usuario/Categorias'
import { SubCategorias } from './pages/usuario/subCategorias'
import { EmpresasRelacionadas } from './pages/usuario/EmpresasRelacionadas'

import { ThemeProvider } from './components/providers/themeProvider'

import { Empresa } from './pages/empresa/empresa'
import { ConoceMasEmpresa } from './pages/conocemasEmpresa'

import { UserProvider } from './components/providers/userProvider'
import { CategoriaProvider } from './components/providers/categoriaProvider'
import { SubCategoriaProvider } from './components/providers/subCategoriaProvider'


//import { Empresa } from './pages/empresa/empresa'



function App() {

  return (
    <UserProvider>
      <Layaout>

        <ThemeProvider>

          <Header />
          <ThemeColor />


          <CategoriaProvider>
            <SubCategoriaProvider>
              <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/Administrador/*' element={<Administrador />}></Route>
                <Route path='/empresa/*' element={<Empresa />}></Route>


                <Route path='/categorias' element={<Categorias />}></Route>
                <Route path='/categorias/:categoria' element={<SubCategorias />}></Route>
                <Route path='/subCategorias/:subCategorias' element={<EmpresasRelacionadas/>}/>

                <Route path='/reservas' element={<Pedidos />} />

                <Route path="/conocemasEmpresa" element={<ConoceMasEmpresa></ConoceMasEmpresa>}></Route>
              </Routes>
            </SubCategoriaProvider>
          </CategoriaProvider>



          <Footer />
        </ThemeProvider>

      </Layaout>
    </UserProvider>
  )
}

export default App

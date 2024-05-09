import "./App.css";

import { Route, Routes } from "react-router";

import { Layaout } from "./components/templates/Layaout";
import { Header } from "./components/templates/Header";
import { Footer } from "./components/templates/Footer";
import { LandingPage } from "./pages/Index";

import { ThemeColor } from "./components/buttons/buttonThemeColor";
import { Login } from "./pages/Login";
import { ReservasUser } from "./pages/usuario/ReservasUser";

import { Administrador } from "./pages/administrador/administrador";

//INTERFAZ USUARIO
import { Categorias } from "./pages/usuario/Categorias";
import { SubCategorias } from "./pages/usuario/subCategorias";
import { Servicios } from "./pages/usuario/Servicios";
import { EmpresasRelacionadas } from "./pages/usuario/EmpresasRelacionadas";

import { ThemeProvider } from "./components/providers/themeProvider";

import { Empresa } from "./pages/empresa/empresa";

import {
  UserProvider,
  useUserContext,
} from "./components/providers/userProvider";
import { CategoriaProvider } from "./components/providers/categoriaProvider";
import { SubCategoriaProvider } from "./components/providers/subCategoriaProvider";
import { ServiciosProvider } from "./components/providers/serviciosProvider";
import { EmpresaProvider } from "./components/providers/empresaProvider";

import { ProtectedRoute } from "./components/providers/ProtectedRoute";
import { NotFound } from "./components/templates/NotFound";

import { ToastContainer } from "react-toastify";
import { ReservaActual } from "./pages/usuario/ReservaActual";
import { ReservasUserProvider } from "./components/providers/reservasUserProvider";
import { RegistroEmpresa } from "./pages/empresa/registroEmpresa";
import { PerfilEmpresa } from "./pages/empresa/perfilEmpresa";

//import { Empresa } from './pages/empresa/empresa'

function App() {
  return (
      <UserProvider>
        <ThemeProvider>
          <ThemeColor />

          {/* Providers y contextos para poder acceder a los valores de cada uno*/}
          <CategoriaProvider>
            <SubCategoriaProvider>
              <ServiciosProvider>
                <EmpresaProvider>
                  <ReservasUserProvider>
                    <Layaout>
                      <Header />
                      <RoutesPage></RoutesPage>
                      <Footer />
                    </Layaout>
                  </ReservasUserProvider>
                </EmpresaProvider>
              </ServiciosProvider>
            </SubCategoriaProvider>
          </CategoriaProvider>
        </ThemeProvider>
        <ToastContainer position="top-center" />
      </UserProvider>
  );
}

function RoutesPage() {
  const { sesionUser } = useUserContext();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/categorias" element={<Categorias />}></Route>

      <Route path="/categorias/:categoria?" element={<SubCategorias />}></Route>
      <Route
        path="/subCategorias/:subCategoria"
        element={<EmpresasRelacionadas />}
      />
      <Route
        path="/registroEmpresa"
        element={<RegistroEmpresa></RegistroEmpresa>}
      ></Route>
      <Route
        element={
          <ProtectedRoute
            isAuth={!!sesionUser && sesionUser.Rol === "Cliente"}
          />
        }
      >
        <Route
          path="/servicio/:subCategoria/:empresa"
          element={<Servicios></Servicios>}
        ></Route>
        <Route path="/reservas" element={<ReservasUser />} />
        <Route path="/reserva/crear" element={<ReservaActual />}></Route>
      </Route>

      <Route
        path="*"
        element={<NotFound razon={"resultados"}></NotFound>}
      ></Route>

      <Route path="/perfil" element={<PerfilEmpresa></PerfilEmpresa>}></Route>

      <Route
        element={
          <ProtectedRoute
            isAuth={!!sesionUser && sesionUser.Rol === "Empresa"}
          />
        }
      >
        <Route path="/empresa/*" element={<Empresa />}></Route>
      </Route>

      <Route
        element={
          <ProtectedRoute
            isAuth={!!sesionUser && sesionUser.Rol === "Administrador"}
          />
        }
      >
        <Route path="/administrador/*" element={<Administrador />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

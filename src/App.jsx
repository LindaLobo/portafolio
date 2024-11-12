import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './componentes/Navigation'
import Footer from './componentes/Footer';
import Inicio from './vistas/Inicio';
import Curriculum from './vistas/Curriculum';
import Proyectos from './vistas/Proyectos';
import Contacto from './vistas/Contacto';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
              <Route path="/" element={<Inicio />}></Route>
              <Route path="/curriculum" element={<Curriculum />}></Route>
              <Route path="/proyectos" element={<Proyectos />}></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

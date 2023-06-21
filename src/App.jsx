import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Menu from "./components/common/Menu"
import Inicio from "./components/views/Inicio" 
import Error404 from "./components/views/Error404";
import Administrador from "../src/components/views/Administrador"
import CrearReceta from "./components/views/producto/CrearReceta";
import EditarReceta from "./components/views/producto/EditarReceta";
import Footer from "./components/common/Footer";
import DetalleReceta from "./components/views/DetalleReceta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutasAdministrador from "./components/routes/RutasAdministrador";



function App() {

  return (
  <BrowserRouter>
    <Menu></Menu>
    <Routes>
    <Route exact path="/" element={<Inicio></Inicio>}></Route>
    <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
    <Route exact path="/administrador/crear-receta" element={<CrearReceta></CrearReceta>}></Route>
    <Route exact path="/administrador/editar-receta" element={<EditarReceta></EditarReceta>}></Route>
    <Route exact path="/detalle" element={<DetalleReceta></DetalleReceta>}></Route>
    <Route path="/administrador/*" element={
      <RutasAdministrador></RutasAdministrador>
    }></Route>
    <Route exact path="*" element={<Error404></Error404>}></Route>



    </Routes>
  
  <Footer></Footer>
  </BrowserRouter>
  )
  
}

export default App;

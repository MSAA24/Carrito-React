import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Catalogo from './components/Catalogo';


function App() {
    //hook url gatito
    /* const [urlGatito, editar] = useState (""); */
    
    //funcion para consultar api gatito
    //invocaciones rest
    /* const consultarAPIGatitos = async() => {
      try{
        const api = await fetch("https://api.thecatapi.com/v1/images/search")
        const resultado =  await api.json();
        editar(resultado[0].url)
      } catch(error){
        console.log(error)
      }
    } */
    
    //lista productos 
    const [productos, guardarProductos] = useState([
      {id: 0, articulo: "Logitech G Pro", precio: 20000, imagen : "logitech-G-pro.png"},
      {id: 1, articulo: "Razer Blackwidow", precio: 32000, imagen : "blackwidow.png"},
      {id: 2, articulo: "Micrófono HyperX", precio: 40000, imagen : "microHyperX.png"},
      {id: 3, articulo: "Logitech G332", precio: 17000, imagen : "g332.png"},
      {id: 4, articulo: "Razer Abyssus", precio: 20000, imagen : "abyssus.png"},
      {id: 5, articulo: "HyperX Fury", precio: 7500, imagen : "hyperXFury.png"},
      {id: 6, articulo: "Logitech g502", precio: 25000, imagen : "g502.png"},
      {id: 7, articulo: "Logitech g815", precio: 7500, imagen : "g815.png"},
    ]) 

  const [changuito, agregarProducto] = useState([]);

  return (
    <>
      <Header changuito={changuito} agregarProducto={agregarProducto}>
        titulo = "Tienda Periféricos - Carrito compras"
      </Header>      
      <Catalogo
        productos={productos}
        changuito={changuito}
        agregarProducto={agregarProducto}
      />      
      <Footer/>

      {/* <button
        onClick={consultarAPIGatitos}
        >traer gatito</button>
        <br/>
        <img src= {urlGatito}></img> */}
      </>
  );
}

export default App;

import React from 'react';
import Producto from './Producto';
import "../estilo/catalogo.css";

const Catalogo = ({ productos, changuito, agregarProducto }) => {
  return (
    <div className="catalogo">
        <h1 className="catalogo-titulo">Productos</h1> 
      <div className="grid-container">        
        {productos.map((producto) => (       
          <Producto
            producto={producto}
            productos={productos}
            key={producto.id}
            changuito={changuito}
            agregarProducto={agregarProducto}
          />
        ))}
      </div>
    </div>
    
  );
};

export default Catalogo;
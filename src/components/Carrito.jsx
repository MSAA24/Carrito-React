import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "../estilo/catalogo.css";
const Carrito = ({ changuito }) => {
    
    const calcularPrecioTotal = (changuito) => {
        let precioTotal = 0;
        changuito.forEach((producto) => {
          const { cantidad, precio } = producto;
          precioTotal += cantidad * precio;
        });
        return precioTotal;
      };
    const precioTotalCarrito = calcularPrecioTotal(changuito);
    return (
    <div className = "carrito">
        <Dropdown>
        <Dropdown.Toggle /* variant="Secondary" */ id="dropdown-basic">
            Mi Carrito {/* ({changuito.length}) */}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {changuito.length === 0 ? (
            <Dropdown.Item disabled>No hay productos en el carrito</Dropdown.Item>
            ) : (
            changuito.map((producto) => (
                <Dropdown.Item key={producto.id}>
                x{producto.cantidad} {producto.articulo} ${producto.precio}
                </Dropdown.Item>
            ))
            )}
            <div className ="carrito-container">
                <div>
                    Total: ${precioTotalCarrito}
                </div>
                <div >
                    <Button
                    variant = "primary"
                    >Comprar</Button>
                </div>
            </div>
            
             
        </Dropdown.Menu>
        </Dropdown>
    </div>
        
  );
};

export default Carrito;
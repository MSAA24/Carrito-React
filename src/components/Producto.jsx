import React from 'react';
import Button from 'react-bootstrap/Button';
import "../estilo/producto.css";

const Producto = ({producto, productos, changuito, agregarProducto}) => {
    
    //Extraigo valores producto
    const {id, articulo,precio} = producto;
    
    //función para comprar producto
    /* const seleccionarProducto = (id) =>{        
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto]);
        console.log(changuito);
    }; */
    const seleccionarProducto = (id) => {
        const producto = productos.find((producto) => producto.id === id);
        const nuevoChanguito = actualizarCantidadProducto(changuito, producto);
        agregarProducto(nuevoChanguito);
      };


    const eliminarProducto = (id) => {
        const productos = changuito.filter(producto => producto.id !== id);
        agregarProducto(productos)
    }

    const actualizarCantidadProducto = (changuito, producto) => {
        const hayProducto = changuito.find((item) => item.id === producto.id);
        if (hayProducto) {
          // Si ya existe el producto en el changuito, cantidad +1
          return changuito.map((item) =>
            item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
          );
        } else {
          // El producto no existe en el carrito, agrega el producto con cantidad inicial de 1
          return [...changuito, {...producto, cantidad: 1 }];
        }
      };

    return ( 
        <div className  ="producto" >
        <>
            <div>
                <img src={producto.imagen} alt={producto.articulo} />
            </div>
            <div className= "producto-dato" style={{ fontFamily: 'Barlow-thin'}}>
              {articulo} ${precio} 
            </div>
            {
                productos
                ?
                    <Button
                        variant = "primary"
                        onClick = {() => seleccionarProducto(id)}
                    >Agregar Al Carrito</Button>
                :
                    <Button
                        variant = "primary"
                        onClick = {() => eliminarProducto(id)}
                    >Eliminar</Button>
            }
            <br/>
           
        </>
        </div>

     );
}
 
export default Producto;
import React, { Fragment } from 'react';
import "../estilo/header.css";
import Carrito from './Carrito';

const Header = ({changuito, agregarProducto}) => {
    return (         
      /* <Fragment>
            <div>
                <h2>{titulo}</h2>
                <h4>menu</h4>
            </div>
        </Fragment> */
        <>
      <div className="header">
        <ul >
          <li>
            <p>Tienda Online </p>
          </li>
          <li >
            <Carrito changuito={changuito} />
          </li>
        </ul>
      </div>
    </>
    );
}
 
export default Header;
import React from 'react';
import "../estilo/footer.css";

const Footer = () => {
    return ( 
        <div className = "footer">

            <div class="footer-redes">
                        <div>
                            <h4>Nuestras Redes</h4>
                        </div>
                        <div class="redes-links">
                            <div>
                                <a class="icono" href="https://facebook.com/"><img src="https://drive.google.com/uc?export=view&id=1P1rqBIUeFGIcA7ykBUtsYXsAtyz2mNV0" alt="logo" /></a>
                            </div>
                            <div>
                                <a class="icono" href="https://instagram.com/" ><img src="https://drive.google.com/uc?export=view&id=1q-q9sK4tMy69tJYHH-EJdsdR08yNYemG" alt="logo" /></a>
                            </div>
                            <div>
                                <a class="icono" href="https://linkedin.com/" ><img src="https://drive.google.com/uc?export=view&id=1N7siIF_T_MGUuy2-SCejZNc6EC0Q9mGp" alt="logo" /></a>
                            </div>
                        </div>                           
            </div>
            <h4>tiendaReal@gmail.com</h4>
            <h4>© 2023 Tienda Online</h4>          
       </div>     
     );
}
 
export default Footer;
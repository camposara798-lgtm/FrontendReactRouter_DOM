import { Link } from "react-router-dom";
function Contacto(){
    return(
        <div>
            <h1>Contacto</h1>
            <p>Administracion de inventario</p>
            <p>Esta pagina contiene la informacion de contacto de la empresa</p>

            <Link to="/dashboard">Volver al Dashboard</Link>
        </div>
    )
}
export default Contacto;
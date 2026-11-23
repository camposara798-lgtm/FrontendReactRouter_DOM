import { Link } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <h1>Bienvenido al sistema de inventario</h1>

            <p><Link to="/productos">Administrar productos</Link></p>
            <p><Link to="/contacto">Informacion de contacto</Link></p>
            <p><Link to="/">Cerrar</Link></p>
        </div>
    )
}
export default Dashboard;
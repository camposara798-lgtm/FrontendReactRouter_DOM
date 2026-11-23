import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/">Registro</Link></li>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/">Productos</Link></li>
                <li><Link to="/">Contacto</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;
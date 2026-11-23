import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Registro(){
    const navigate=useNavigate()
    function llevarLogin(){
        navigate("/")
    }
    return(
        <div>
            <h1>Registrarse</h1>
            <input type="text" placeholder="Escribe tu nombre completo"></input>
            <input type="email" placeholder="Escribe tu correo"></input>
            <input type="password" placeholder="Escribe tu contraseña"></input>

            <button onClick={llevarLogin}>Registrarse</button>

            <p>¿Ya tienes cuenta? <Link to="/">Iniciar sesion</Link></p>
        </div>
    )
}
export default Registro;
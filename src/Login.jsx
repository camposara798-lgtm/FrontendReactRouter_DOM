import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    function llevarDash(){
        navigate("/dashboard")
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Escribe tu correo"></input>
            <input type="password" placeholder="Escribe tu contraseña"></input>

            <button onClick={llevarDash}>Aceptar</button>
            <p>¿No tienes cuenta? <Link to="/registro">Registrate aqui</Link></p>
        </div>
    )
}
export default Login;
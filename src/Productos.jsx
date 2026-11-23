import { useState } from "react";
import { Link } from "react-router-dom";

function Productos(){
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [productos, setProductos] = useState([]);

    async function guardar(){
        let respuesta = await fetch("http://localhost:5000/productos",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                categoria: categoria,
                precio: precio,
                cantidad: cantidad
            })
        });
        let datos = await respuesta.json();
        alert(datos.mensaje);
        consultar(); 
    }

    async function consultar(){
        let respuesta = await fetch("http://localhost:5000/productos");
        let datos = await respuesta.json();
        setProductos(datos.productos);
    }

    return(
        <div>
            <h1>Administracion de productos</h1>
            <input type="text" placeholder="Escriba el nombre del producto" onChange={(e)=>setNombre(e.target.value)}></input>
            <input type="text" placeholder="Escriba categoria" onChange={(e)=>setCategoria(e.target.value)}></input>
            <input type="text" placeholder="Escriba precio" onChange={(e)=>setPrecio(e.target.value)}></input>
            <input type="text" placeholder="Escriba cantidad" onChange={(e)=>setCantidad(e.target.value)}></input>

            <button onClick={guardar}>Registrar producto</button>
            <button onClick={consultar}>Consultar productos</button>

            <h1>Lista de productos</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nombre}</td>
                            <td>{p.categoria}</td>
                            <td>{p.precio}</td>
                            <td>{p.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p><Link to="/dashboard">Volver a la Dashboard</Link></p>
        </div>
    );
}
export default Productos;
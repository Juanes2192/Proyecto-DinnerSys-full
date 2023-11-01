import {useState, useEffect} from 'react';
import "./ListadoProductoAdmin.css";
import { BASE_API } from '../../../../../../utils/constants';
import axios from 'axios';

export function ListadoProductoAdmin() {

  const [lstProductos, setLstProductos] = useState([]);

  useEffect(()=>{
    axios.get(`${BASE_API}/Productos/MostrarProductos`)
      .then((response)=>{
        console.log(response.data);
        setLstProductos(response.data);
      })
      .catch((error)=>{
        console.error("Error al traer los productos: ",error);
      })
  },[])

  return (
    <div>
        <h1>Listado Productos</h1>
        <ul>
          {lstProductos.map((producto)=>
            <div key={producto.id}> 
              <ul> 
                <li> {producto.Nombre} <br/> {producto.Descripcion} <br/> {producto.Precio} </li>
                <br/>
              </ul>
            </div>
          )}
        </ul>

    </div>
  )
}

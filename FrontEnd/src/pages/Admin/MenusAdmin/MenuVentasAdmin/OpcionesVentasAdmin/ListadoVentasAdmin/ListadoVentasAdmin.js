import {useState, useEffect} from 'react';
import "./ListadoVentasAdmin.css";
import { BASE_API } from '../../../../../../utils/constants';
import axios from 'axios';

export function ListadoVentasAdmin() {
  const [lstVentas, setLstVentas] = useState([]);

  useEffect(()=>{
    axios.get(`${BASE_API}/Ventas/MostrarVentas`)
      .then((response)=>{
        console.log(response.data);
        setLstVentas(response.data);
      })
      .catch((error)=>{
        console.error("Error al traer las ventas: ", error);
      })
  },[]);

  return (
    <div>
        <h1> Listado Ventas </h1>
        <ul>
          {lstVentas.map((venta)=> 
          <div key={venta.id}>
            <li> {venta.IdMesero} <br/> {venta.ProductosIds} </li>
          </div>
          )}
        </ul>
    </div>
  )
}

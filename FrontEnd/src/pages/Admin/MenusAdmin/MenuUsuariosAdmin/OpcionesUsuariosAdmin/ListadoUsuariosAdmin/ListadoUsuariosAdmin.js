import {useState, useEffect} from 'react';
import "./ListadoUsuariosAdmin.css"
import axios from 'axios';
import { BASE_API } from '../../../../../../utils/constants';

export function ListadoUsuariosAdmin() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get(`${BASE_API}/Usuarios/MostrarUsuarios`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error)=>{
        console.error("Error al traer datos: ", error);
      })
  },[])

  return (
    <div>
        <h1>ListadoUsuariosAdmin</h1>
        <ul>
          {data.map((user)=>
            <div key={user.id}> 
              <ul> 
                <li> {user.Nombre} <br/> {user.Rol} </li>
                <br/>
              </ul>
            </div>
          )}
        </ul>

    </div>
  )
}


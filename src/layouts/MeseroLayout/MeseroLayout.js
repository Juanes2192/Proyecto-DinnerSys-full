import React from 'react';
import "./MeseroLayout.css";
import { Login } from '../../pages/Login';



export function MeseroLayout(props) {
    const {children} =props;
    /*Esto es para saber que el usuario no esta log*/
    const auth = "agustin";

    if (!auth) return <Login />;

  return (
    <div>
        <p>MeseroLayout</p>
        {children}
    </div>
  )
}

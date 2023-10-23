import React from 'react';
import "./GlobalLayout.css";
import { Login } from '../../pages/Login';



export function GlobalLayout(props) {
    const {children} =props;
    /*Esto es para saber que el usuario no esta log*/
    const auth = null;

    if (!auth) return <Login />;

  return (
    <div>
        <p>AdminLayout</p>
        {children}
    </div>
  )
}

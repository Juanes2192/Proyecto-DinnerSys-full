import React from 'react';
import "./GlobalLayout.css";
import { Login } from '../../pages/Login';
import {MenuEstatico} from "../../components/Admin/MenuEstatico/MenuEstatico"



export function GlobalLayout(props) {
    const {children} =props;
    /*Esto es para saber que el usuario no esta log*/
    const auth = "agustin";

    if (!auth) return <Login />;

  return (
    <div>
        {children}
    </div>
  )
}

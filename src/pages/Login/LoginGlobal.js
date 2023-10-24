// Login.js
import React from 'react';
import "./LoginGlobal.css"; // Mantén tu archivo CSS original
import {LoginForm} from "../../components/LoginForm"

export function Login() {
  return (
    <div className="login-global">
      <div className="login-global__content">
        <h1>Entrar al panel</h1>
        <LoginForm />
        {/* Agregar aquí el formulario de inicio de sesión */}
      </div>
    </div>
  );
}

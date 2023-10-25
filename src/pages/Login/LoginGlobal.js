import React from 'react';
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginGlobal.css"; 
import { initial } from 'lodash';
import {LoginForm} from "../../components/LoginForm";
import fondologin from "../../components/img/fondologin.jpg";
import Logodinnersys from "../../components/img/Logodinnersys.png";

export function Login() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue)=>{
      console.log("Login ok");
      console.log(formValue)
    } 

  })
  return (
    <div className='login'>
    <img className='logo-image' src={Logodinnersys} alt="logo" />
    <img className='fondo-login' src={fondologin} alt='fondo' />
    <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
      <h1>Iniciar Sesion</h1>
      <Form.Input
        name="email"
        placeholder="Correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type='password'
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button
        type="submit"
        content="Iniciar sesion"
        primary
        fluid
      />
    </Form>
  </div>
  );

  function initialValues() {
    return {
      email: "juan.perdomo@gmail.com",
      password: "15161651"
    }
  }
  
  function validationSchema (){
    return{
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    }
  }
}



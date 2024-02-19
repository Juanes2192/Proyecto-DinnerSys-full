import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CrearUsuarioAdmin.css";
import "../../../../../../App.css";
import { NuevoUsuario } from '../../../../../../API/Usuarios/UsuariosAPI';
import { useNavigate } from 'react-router-dom';

export function CrearUsuarioAdmin() {

    const navigate = useNavigate();

    const formik = useFormik({

        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (usuario) => {
            console.log("Usuario ok");
            console.log(usuario);

            NuevoUsuario(usuario)
                .then((response) => {
                    if (response) {
                        alert("Se creo el usuario");
                        navigate('/admin/usuarios/listadousuarios'); //Navegamos a la lista de usuarios
                    } else {
                        alert("No fue posible crear el usuario");
                    }
                })
        }
    });

    return (
        <div className='form-usuarios'>
            <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
                <h1>Crear Usuario</h1>
                <Form.Field>
                    <label>Cedula</label>
                    <Input
                        name="Cedula"
                        placeholder="Cedula"
                        value={formik.values.Cedula}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.Cedula && <span className="error">{formik.errors.Cedula}</span>}
                </Form.Field>
                <Form.Field>
                    <label>Nombre usuario</label>
                    <Input
                        name="Nombres"
                        placeholder="Nombre usuario"
                        value={formik.values.Nombres}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.Nombres && <span className="error">{formik.errors.Nombres}</span>}
                </Form.Field>
                <Form.Field>
                    <label>Apellido usuario</label>
                    <Input
                        name="Apellidos"
                        placeholder="Apellido usuario"
                        value={formik.values.Apellidos}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.Apellidos && <span className="error">{formik.errors.Apellidos}</span>}
                </Form.Field>
                <Form.Field>
                    <label>Rol usuario</label>
                    <Input
                        name="TipoUsuario"
                        placeholder="Rol usuario"
                        value={formik.values.TipoUsuario}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.TipoUsuario && <span className="error">{formik.errors.TipoUsuario}</span>}
                </Form.Field>
                <Button type="submit">Registrar Usuario</Button>
            </Form>
        </div>
    );

    function initialValues() {
        return {
            Nombres: "",
            Apellidos: "",
            Cedula: "",
            TipoUsuario: ""
        };
    }

    function validationSchema() {
        return Yup.object({
            Nombres: Yup.string().required("El nombre es obligatorio"),
            Apellidos: Yup.string().required("El apellido es obligatorio"),
            Cedula: Yup.string().required("La cedula es obligatoria"),
            TipoUsuario: Yup.string().required("El rol es obligatorio")
        });
    }
}








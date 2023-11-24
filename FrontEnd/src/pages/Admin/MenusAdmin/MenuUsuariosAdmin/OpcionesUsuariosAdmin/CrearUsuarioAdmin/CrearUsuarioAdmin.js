import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { CrearUsuario } from "../../../../../../API/Usuarios/UsuariosAPI.js";
import "./CrearUsuarioAdmin.css";
import "../../../../../../App.css";

export function CrearUsuarioAdmin() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("Usuario ok");
            console.log(formValue);

            CrearUsuario(formValue).then((response) => {
                console.log(response);
                console.log("Usuario creado correctamente");
                alert("Usuario creado correctamente");
            }).catch((error) => {
                console.log("Error al crear el usuario", error);
            });   
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








import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CrearUsuarioAdmin.css";

export function CrearUsuarioAdmin() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("Usuario ok");
            console.log(formValue);
        }
    });

    return (
        <div className='form-usuarios'>
            <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
                <h1>Crear Usuario</h1>
                <Form.Field>
                    <label>Nombre usuario</label>
                    <Input
                        name="nombre"
                        placeholder="Nombre usuario"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.nombre && <div className="error">{formik.errors.nombre}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Apellido usuario</label>
                    <Input
                        name="apellido"
                        placeholder="Apellido usuario"
                        value={formik.values.apellido}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.apellido && <div className="error">{formik.errors.apellido}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Correo electrónico</label>
                    <Input
                        name="email"
                        placeholder="Correo electrónico"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <div className="error">{formik.errors.email}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Rol usuario</label>
                    <Input
                        name="rol"
                        placeholder="Rol usuario"
                        value={formik.values.rol}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.rol && <div className="error">{formik.errors.rol}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Contraseña</label>
                    <Input
                        name="password"
                        type='password'
                        placeholder="Contraseña"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && <div className="error">{formik.errors.password}</div>}
                </Form.Field>
                <Button type="submit">Registrar Usuario</Button>
            </Form>
        </div>
    );

    function initialValues() {
        return {
            nombre: "",
            apellido: "",
            email: "",
            rol: "",
            password: ""
        };
    }

    function validationSchema() {
        return Yup.object({
            nombre: Yup.string().required("El nombre es obligatorio"),
            apellido: Yup.string().required("El apellido es obligatorio"),
            email: Yup.string().email("Correo electrónico no válido").required("El correo electrónico es obligatorio"),
            rol: Yup.string().required("El rol es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria"),
        });
    }
}








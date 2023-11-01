import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CrearUsuarioAdmin.css";
import "../../../../../../App.css";
import axios  from 'axios';
import { BASE_API } from '../../../../../../utils/constants';

export function CrearUsuarioAdmin() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("Usuario ok");
            console.log(formValue);
            let data = {
                Nombre: formValue.nombre + " " + formValue.apellido,
                Rol: formValue.rol
            }
            // console.log(data);

            axios.post(`${BASE_API}/Usuarios/CrearUsuario`, data)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error)=>{
                    console.error('error: ', error);
                })
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
                    {formik.errors.nombre && <span className="error">{formik.errors.nombre}</span>}
                </Form.Field>
                <Form.Field>
                    <label>Apellido usuario</label>
                    <Input
                        name="apellido"
                        placeholder="Apellido usuario"
                        value={formik.values.apellido}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.apellido && <span className="error">{formik.errors.apellido}</span>}
                </Form.Field>
                <Form.Field>
                    <label>Correo electrónico</label>
                    <Input
                        name="email"
                        placeholder="Correo electrónico"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <span className="error">{formik.errors.email}</span>}
                </Form.Field>
                <Form.Field>
                    <label>Rol usuario</label>
                    <Input
                        name="rol"
                        placeholder="Rol usuario"
                        value={formik.values.rol}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.rol && <span className="error">{formik.errors.rol}</span>}
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
                    {formik.errors.password && <span className="error">{formik.errors.password}</span>}
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








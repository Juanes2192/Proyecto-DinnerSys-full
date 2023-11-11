import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CrearProductoAdmin.css";
import { useNavigate } from 'react-router-dom';
import { CrearProducto } from '../../../../../../API/DinnersysAPI';

export function CrearProductoAdmin() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("Producto creado");
            console.log(formValue);
            const newProducto = {
                Nombre: formValue.nombreProducto,
                Descripcion: formValue.descripcionProducto,
                Categoria: formValue.categoria,
                Precio: formValue.precio
            }
            CrearProducto(newProducto)
                .then((response) => {
                    alert("Producto creado");
                    console.log(response);
                    navigate('/admin'); //Navegamos a la pagina principal del admin
                }).catch((error) => {
                    alert("Error al crear el producto", error);
                    console.log("Error al crear el producto: ", error);
                });
        }
    });

    return (
        <div className='form-productos'>
            <Form className='create-product-form' onSubmit={formik.handleSubmit}>
                <h1>Crear Producto</h1>
                <Form.Field>
                    <label>Nombre del Producto</label>
                    <Input
                        name="nombreProducto"
                        placeholder="Nombre del Producto"
                        value={formik.values.nombreProducto}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.nombreProducto && <div className="error">{formik.errors.nombreProducto}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Descripción del Producto</label>
                    <Input
                        name="descripcionProducto"
                        placeholder="Descripcion del Producto"
                        value={formik.values.descripcionProducto}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.descripcionProducto && <div className="error">{formik.errors.descripcionProducto}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Categoría</label>
                    <select name="categoria"
                        placeholder="Categoría"
                        value={formik.values.categoria}
                        onChange={formik.handleChange}>
                        <option></option>
                        <option value={"Comida"}> Comidas </option>
                        <option value={"Bebida"}> Bebidas </option>
                    </select>
                    {formik.errors.categoria && <div className="error">{formik.errors.categoria}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <Input
                        name="precio"
                        type="number"
                        placeholder="Precio"
                        value={formik.values.precio}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.precio && <div className="error">{formik.errors.precio}</div>}
                </Form.Field>
                <Button type="submit">Crear Producto</Button>
            </Form>
        </div>
    );

    function initialValues() {
        return {
            nombreProducto: "",
            descripcionProducto: "",
            categoria: "",
            precio: 0,
        };
    }

    function validationSchema() {
        return Yup.object({
            nombreProducto: Yup.string().required("El nombre del producto es obligatorio"),
            descripcionProducto: Yup.string().required("La descripcion es obligatoria"),
            categoria: Yup.string().required("La categoría es obligatoria"),
            precio: Yup.number().required("El precio es obligatorio").min(1, "El precio debe ser mayor que cero"),
        });
    }
}





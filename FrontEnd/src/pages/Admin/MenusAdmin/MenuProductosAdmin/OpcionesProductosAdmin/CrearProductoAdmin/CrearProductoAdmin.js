import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CrearProductoAdmin.css";

export function CrearProductoAdmin() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("Producto creado");
            console.log(formValue);
        }
    });

    return (
        <div className='form-productos'>
            <Form className='create-product-form' onSubmit={formik.handleSubmit}>
                <h1>Crear Producto</h1>
                <Form.Field>
                    <label>Código del Producto</label>
                    <Input
                        name="codigoProducto"
                        placeholder="Código del Producto"
                        value={formik.values.codigoProducto}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.codigoProducto && <div className="error">{formik.errors.codigoProducto}</div>}
                </Form.Field>
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
                    <label>Categoría</label>
                    <Input
                        name="categoria"
                        placeholder="Categoría"
                        value={formik.values.categoria}
                        onChange={formik.handleChange}
                    />
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
            codigoProducto: "",
            nombreProducto: "",
            categoria: "",
            precio: 0,
        };
    }

    function validationSchema() {
      return Yup.object({
          codigoProducto: Yup.string().required("El código del producto es obligatorio"),
          nombreProducto: Yup.string().required("El nombre del producto es obligatorio"),
          categoria: Yup.string().required("La categoría es obligatoria"),
          precio: Yup.number().required("El precio es obligatorio").min(1, "El precio debe ser mayor que cero"),
      });
  }
    }
    
    
    


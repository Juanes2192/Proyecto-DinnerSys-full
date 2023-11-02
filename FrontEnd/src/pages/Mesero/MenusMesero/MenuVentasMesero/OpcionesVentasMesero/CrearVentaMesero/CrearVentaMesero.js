import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CrearVentaMesero.css";

export function CrearVentaMesero() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("Producto creado");
            console.log(formValue);
        }
    });

    const lstProductos = [ // Define tu lista de productos aquí o cárgala desde algún lugar.
        { id: 1, Producto: "Producto 1", Precio: 10 },
        { id: 2, Producto: "Producto 2", Precio: 15 },
        // ... Añade más productos aquí
    ];

    function getPrecioTotal(producto, isChecked) {
        // Realiza la lógica para calcular el precio total o realizar acciones relacionadas con los productos seleccionados.
    }

    return (
        <div className="container">
        <div className='form-ventas'>
            
            <Form className='create-ventas-form' onSubmit={formik.handleSubmit}>
                <h1>Crear Venta</h1>
                <Form.Field>
                    <label>Nombre del Cliente</label>
                    <Input
                        name="nombreCliente"
                        placeholder="Nombre del cliente"
                        value={formik.values.nombreCliente}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.nombreCliente && <div className="error">{formik.errors.nombreCliente}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Cantidad de Clientes</label>
                    <Input
                        name="cantidadCliente"
                        type="number"
                        placeholder="Cantidad de Clientes"
                        value={formik.values.cantidadCliente}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.cantidadCliente && <div className="error">{formik.errors.cantidadCliente}</div>}
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
                <Button type="submit">Crear Venta</Button>
            </Form>

            <Form className="formlstProductos">
                <h2 className="Linealh2">Listado Productos</h2>
                <div className="carrusel-pedidos">
                    {lstProductos && lstProductos.map(producto => (
                        <div key={producto.id}>
                            <label htmlFor={`producto${producto.id}`}>{producto.Producto + ': $'}<b> {producto.Precio} </b></label>
                            <input id={`producto${producto.id}`} type='checkbox' onClick={(ev) => getPrecioTotal(producto, ev.target.checked)} />
                            <br />
                        </div>
                    ))}
                </div>
            </Form>
        </div>
        </div>
    );

    function initialValues() {
        return {
            nombreCliente: "",
            cantidadCliente: 0,
            precio: 0,
        };
    }

    function validationSchema() {
        return Yup.object({
            nombreCliente: Yup.string().required("El nombre del cliente es obligatorio"),
            cantidadCliente: Yup.number().required("La cantidad es obligatoria").min(1, "La cantidad debe ser mayor que cero"),
            precio: Yup.number().required("El precio es obligatorio").min(1, "El precio debe ser mayor que cero"),
        });
    }
}

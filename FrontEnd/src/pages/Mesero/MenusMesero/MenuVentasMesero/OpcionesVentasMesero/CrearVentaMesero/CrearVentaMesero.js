import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CrearVentaMesero.css";
import axios from 'axios';
import { BASE_API } from '../../../../../../utils/constants';

export function CrearVentaMesero() {

    const [lstProductos, setLstProductos] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API}/Productos/MostrarProductos`)
            .then((response)=>{
                console.log(response.data);
                setLstProductos(response.data);
            })
            .catch((error)=>{
                console.log("Error al traer los productos: ", error);
            })
    }, []);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("Producto creado");
            console.log(formValue);
        }
    });



    // Creamos las variables para manipular el Precio y la lista de ids de los productos que se seleccionan
    const [PrecioTotal, setPrecioTotal] = useState(0);
    const [ProductoSeleccionado, setProductoSeleccionado] = useState([]);

    // Creamos esta funcion para obtener el precio y agregar a la lista los ids de los productos que se selecciones
    const getPrecioTotal = (producto, isChecked) => {
        if (isChecked) {
            setProductoSeleccionado([...ProductoSeleccionado, producto.id]);
            setPrecioTotal(PrecioTotal + producto.Precio);
        } else {
            setProductoSeleccionado(ProductoSeleccionado.filter((pId) => pId !== producto.id));
            setPrecioTotal(PrecioTotal - producto.Precio);
        }
    }

    return (
        <div className="container">

            <form className='formCrearVenta' onSubmit={formik.handleSubmit}>
                <h1>Crear Venta</h1>
                <Form.Field>
                    <label>Nombre del Cliente</label>
                    <input
                        name="nombreCliente"
                        placeholder="Nombre del cliente"
                        value={formik.values.nombreCliente}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.nombreCliente && <div className="error">{formik.errors.nombreCliente}</div>}
                </Form.Field>
                <Form.Field>
                    <label>Cantidad de Clientes</label>
                    <input
                        name="cantidadCliente"
                        type="number"
                        placeholder="Cantidad de Clientes"
                        value={formik.values.cantidadCliente}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.cantidadCliente && <div className="error">{formik.errors.cantidadCliente}</div>}
                </Form.Field>
                <Form.Field>
                    <label> Precio </label>
                    <input
                        name='precio'
                        value={`$ ${PrecioTotal}`}
                        readOnly
                    />
                </Form.Field>
                <br />
                <button type="submit">Crear Venta</button>
            </form>

            <form className="formlstProductos">
                <h1 >Listado Productos</h1>
                <div className="carrusel-pedidos">
                    {lstProductos && lstProductos.map(producto => (
                        <div className='contenedor-input-formProductos' key={producto.id}>
                            <input id={`producto${producto.id}`} type='checkbox' onClick={(ev) => getPrecioTotal(producto, ev.target.checked)} />
                            <label htmlFor={`producto${producto.id}`}>{producto.Nombre}: <span className='precio-producto'> ${producto.Precio} </span></label>
                            <br />
                        </div>
                    ))}
                </div>
            </form>
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

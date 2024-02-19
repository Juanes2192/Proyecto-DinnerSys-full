import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CrearProductoAdmin.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { CrearProducto, EditarProducto } from '../../../../../../API/Productos/ProductosAPI';


export function CrearProductoAdmin() {
    const Location = useLocation();
    const titulo = Location.state ? Location.state.titulo : "Crear Producto";
    const prop_producto = Location.state ? Location.state.data : null;
    //Esta variable llega desde el componente ListadoProductoAdmin que es donde se cargan todos los productos

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            // console.log("Producto creado");
            console.log(formValue);
            //Creamos un objeto que contendrá los datos del producto
            //Los nombres de los campos son iguales que en la base de datos
            const newProducto = {
                Nombre: formValue.nombreProducto,
                Descripcion: formValue.descripcionProducto,
                Categoria: formValue.categoria,
                Precio: formValue.precio
            }
            //Aqui va la llamada a la API para enviar el producto
            if (prop_producto === null) {
                // Si prop_producto es null, significa que no nos llega ningun producto, por lo que estamos creando un producto
                CrearProducto(newProducto)
                    .then((response) => {
                        if(response !== null){
                            alert("Producto creado");
                            console.log(response);
                            navigate('/admin/productos/listadoproductos'); //Navegamos a la pagina principal del admin
                        }else{
                            alert("Error al crear el producto");
                        }
                    })
            }else{
                // Si no, significa que nos llega un producto, por lo que estamos editando un producto
                EditarProducto(prop_producto.ProductoId, newProducto)
                    .then((response)=>{
                        if(response !== null){
                            alert("Producto editado");
                            console.log(response);
                            navigate('/admin/productos/listadoproductos'); //Navegamos a la pagina principal del admin
                        }else{
                            alert("Error al editar el producto");
                        }
                    
                    })
            
            }
        }
    });

    return (
        <div className='form-productos'>
            <Form className='create-product-form' onSubmit={formik.handleSubmit}>
                <h1> {titulo} </h1>
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
                <Button type="submit"> {titulo} </Button>
            </Form>
        </div>
    );

    function initialValues() {
        return {
            nombreProducto: prop_producto ? prop_producto.Nombre : "",
            descripcionProducto: prop_producto ? prop_producto.Descripcion : "",
            categoria: prop_producto ? prop_producto.Categoria : "",
            precio: prop_producto ? prop_producto.Precio : 0,
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





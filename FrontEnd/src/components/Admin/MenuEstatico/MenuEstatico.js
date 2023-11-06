import React, { useState } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import Logodinnersys from "../../img/Logodinnersys.png";
import { useNavigate, useLocation } from 'react-router-dom';
import "./MenuEstatico.css";

export function MenuEstatico() {
    const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(name);
  };

  const redirectToCrearUsuario = () => {
    navigate('/admin/usuarios/crearusuarios');
  };

  const redirectToListadoUsuarios = () => {
    navigate('/admin/usuarios/listadousuarios');
  };

  const redirectToCrearProductos = () => {
    navigate('/admin/productos/crearproductos');
  };

  const redirectToListadoProductos = () => {
    navigate('/admin/productos/listadoproductos');
  };

  const redirectToListadoVentas = () => {
    navigate('/admin/ventas/listadoventas');
  };

  return (
    <div className="admin-bar">
        <Menu stackable>
          <Menu.Item>
            <Image src={Logodinnersys} alt="logo" />
            <span style={{ marginLeft: '8px', fontSize: '20px', fontWeight: 'bold' }}>DINNERSYS</span>
          </Menu.Item>

          <Dropdown item text="Usuarios" icon={false}>
            <Dropdown.Menu>
              <Dropdown.Item
                name="/admin/usuarios/crearusuarios"
                active={activeItem === '/admin/usuarios/crearusuarios'}
                onClick={redirectToCrearUsuario}
              >
                Crear Usuario
              </Dropdown.Item>
              <Dropdown.Item
                name="/admin/usuarios/listadousuarios"
                active={activeItem === '/admin/usuarios/listadousuarios'}
                onClick={redirectToListadoUsuarios}
              >
                Listado de Usuarios
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text="Ventas" icon={false}>
            <Dropdown.Menu>
              <Dropdown.Item
                name="/admin/ventas/listadoventas"
                active={activeItem === '/admin/ventas/listadoventas'}
                onClick={redirectToListadoVentas}
              >
                Listado de Ventas
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text="Productos" icon={false}>
            <Dropdown.Menu>
              <Dropdown.Item
                name="/admin/productos/crearproductos"
                active={activeItem === '/admin/productos/crearproductos'}
                onClick={redirectToCrearProductos}
              >
                Crear Productos
              </Dropdown.Item>
              <Dropdown.Item
                name="/admin/productos/listadoproductos"
                active={activeItem === '/admin/productos/listadoproductos'}
                onClick={redirectToListadoProductos}
              >
                Listado de Productos
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Menu>
      </div>
  )
}

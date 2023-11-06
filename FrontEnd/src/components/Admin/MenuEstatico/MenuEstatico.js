import React, { useState } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import Logodinnersys from "../../img/Logodinnersys.png";
import { useNavigate, useLocation } from 'react-router-dom';
import "./MenuEstatico.css"; // Importa el archivo de CSS personalizado

export function MenuEstatico(props) {
  const { children } = props;
  return (
    <div className='menu-estatico-admin'>
      <MenuUpp />
      <div className='content'>{children}</div>
    </div>
  )
}

function MenuUpp(props) {
  const { children } = props;
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
            className={`custom-button ${activeItem === '/admin/usuarios/crearusuarios' ? 'active' : ''}`}
          >
            Crear Usuario
          </Dropdown.Item>
          <Dropdown.Item
            name="/admin/usuarios/listadousuarios"
            active={activeItem === '/admin/usuarios/listadousuarios'}
            onClick={redirectToListadoUsuarios}
            className={`custom-button ${activeItem === '/admin/usuarios/listadousuarios' ? 'active' : ''}`}
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
            className={`custom-button ${activeItem === '/admin/ventas/listadoventas' ? 'active' : ''}`}
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
            className={`custom-button ${activeItem === '/admin/productos/crearproductos' ? 'active' : ''}`}
          >
            Crear Productos
          </Dropdown.Item>
          <Dropdown.Item
            name="/admin/productos/listadoproductos"
            active={activeItem === '/admin/productos/listadoproductos'}
            onClick={redirectToListadoProductos}
            className={`custom-button ${activeItem === '/admin/productos/listadoproductos' ? 'active' : ''}`}
          >
            Listado de Productos
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  )
}

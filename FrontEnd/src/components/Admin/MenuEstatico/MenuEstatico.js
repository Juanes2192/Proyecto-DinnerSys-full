import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import Logodinnersys from "../../img/Logodinnersys.png";
import { useNavigate } from 'react-router-dom';
import "./MenuEstatico.css";

export function MenuEstatico(props) {
  const { children } = props;
  return (
    <div className='menu-estatico-admin'>
      <MenuUpp />
      <div className='content'>{children}</div>
    </div>
  )
}

function MenuUpp() {
  const navigate = useNavigate();

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
            onClick={redirectToCrearUsuario}
            className={`custom-button`}
          >
            Crear Usuario
          </Dropdown.Item>
          <Dropdown.Item
            onClick={redirectToListadoUsuarios}
            className={`custom-button`}
          >
            Listado de Usuarios
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Ventas" icon={false}>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={redirectToListadoVentas}
            className={`custom-button`}
          >
            Listado de Ventas
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Productos" icon={false}>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={redirectToCrearProductos}
            className={`custom-button`}
          >
            Crear Productos
          </Dropdown.Item>
          <Dropdown.Item
            onClick={redirectToListadoProductos}
            className={`custom-button`}
          >
            Listado de Productos
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  )
}

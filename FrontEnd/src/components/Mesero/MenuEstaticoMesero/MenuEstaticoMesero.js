import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import Logodinnersys from "../../img/Logodinnersys.png";
import { useNavigate } from 'react-router-dom';
import "./MenuEstaticoMesero.css";

export function MenuEstaticoMesero(props) {
  const { children } = props;
  return (
    <div className='menu-estatico-mesero'>
      <MenuUppMesero />
      <div className='content'>{children}</div>
    </div>
  )
}

function MenuUppMesero() {
  const navigate = useNavigate();

  const redirectToCrearVenta = () => {
    navigate('/mesero/ventas/crearventas');
  }

  const redirectToListadoVentas = () => {
    navigate('/mesero/ventas/listadoventas');
  };

  return (
    <Menu stackable>
      <Menu.Item>
        <Image src={Logodinnersys} alt="logo" />
        <span style={{ marginLeft: '8px', fontSize: '20px', fontWeight: 'bold' }}>DINNERSYS</span>
      </Menu.Item>

      <Dropdown item text="Ventas" icon={false}>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={redirectToCrearVenta}
            className={`custom-button`}
          >
            Crear Venta
          </Dropdown.Item>
          <Dropdown.Item
            onClick={redirectToListadoVentas}
            className={`custom-button`}
          >
            Listado de Ventas
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  )
}

DROP DATABASE IF EXISTS DinnerSys;
CREATE DATABASE DinnerSys;

USE DinnerSys;

/* CREACION DE TABLAS */
/* Tabla Usuarios, servira para almacenar todos los usuarios y su Tipo/Rol */
CREATE TABLE IF NOT EXISTS Usuarios (
	usuarioId INT PRIMARY KEY AUTO_INCREMENT,
    Cedula varchar(20) UNIQUE NOT NULL,
    Nombres varchar(50) NOT NULL,
    Apellidos varchar(50) NOT NULL,
    TipoUsuario varchar(13) NOT NULL
);

/* Tabla DatosAcceso, servira para guardar las credenciales de los usuarios, esta tabla se llenara con un trigger */
CREATE TABLE IF NOT EXISTS DatosAcceso(
    usuarioId INT NOT NULL,
    Usuario varchar(50) UNIQUE NOT NULL,
    Contrasena TEXT NOT NULL,
    PRIMARY KEY (usuarioId),
    FOREIGN KEY (usuarioId) REFERENCES Usuarios(usuarioId) ON DELETE CASCADE
);

/* Tabla Productos, servira para almacenar todos los productos que se ofrecen en el restaurante */
CREATE TABLE IF NOT EXISTS Productos(
    ProductoId INT PRIMARY KEY AUTO_INCREMENT,
    Nombre varchar(50) NOT NULL,
    Descripcion varchar(50) NOT NULL,
    Precio INT NOT NULL,
    Categoria varchar(30) NOT NULL
);

/* Tabla Mesas, servira para almacenar todas las mesas del restaurante */
CREATE TABLE IF NOT EXISTS Mesas(
    MesaId INT PRIMARY KEY AUTO_INCREMENT,
    Estado BOOLEAN DEFAULT 0
);

/* Tabla DetalleMesasMeseros, servira para almacenar la asignacion de mesas a meseros
Funciona de la siguiente manera:
A un mesero se le asigna una mesa, y se le asigna una cantidad de clientes, cuando el mesero termina de atender a los clientes, se desasigna la mesa
El campo FechaAsignacion se llenara automaticamente con la fecha actual, igualmente el campo FechaDesasignacion
Cuando se desasigne la mesa, se llenara el campo FechaDesasignacion con la fecha actual, y se cambiara el estado de la mesa a 0
Mientras en esta tabla no se desasigne la mesa, el estado de la mesa seguira siendo 1, y no se podra asignar a otro mesero
Y cuando se desasigne la mesa, el estado de la mesa cambiara a 0, y se podra asignar a otro mesero
 */
CREATE TABLE IF NOT EXISTS DetalleMesasMeseros(
    MesasMeseroId INT PRIMARY KEY AUTO_INCREMENT,
    MesaId INT NOT NULL,
    MeseroId INT NOT NULL,
    CantidadClientes INT DEFAULT 0,
    FechaAsignacion DATETIME DEFAULT NOW() NOT NULL,
    FechaDesasignacion DATETIME DEFAULT NULL,
    FOREIGN KEY (MesaId) REFERENCES Mesas(MesaId) ON DELETE CASCADE,
    FOREIGN KEY (MeseroId) REFERENCES Usuarios(usuarioId) ON DELETE CASCADE
);

/* Tabla Pedidos, servira para almacenar todos los pedidos que se hagan en el restaurante */
CREATE TABLE IF NOT EXISTS Pedidos (
    pedidoId INT PRIMARY KEY AUTO_INCREMENT,
    NombreCliente varchar(50) NOT NULL,
    MesaId INT NOT NULL,
    MeseroId INT NOT NULL,
    FOREIGN KEY (MesaId) REFERENCES Mesas(MesaId) ON DELETE CASCADE,
    FOREIGN KEY (MeseroId) REFERENCES Usuarios(usuarioId) ON DELETE CASCADE
);

/* Tabla DetallePedidosProducto, servira para almacenar todos los productos que se pidan en un pedido */
CREATE TABLE IF NOT EXISTS DetallePedidosProducto(
    PedidosProductoId INT PRIMARY KEY AUTO_INCREMENT,
    PedidoId INT NOT NULL,
    ProductoId INT NOT NULL,
    Cantidad INT NOT NULL,
    FOREIGN KEY (PedidoId) REFERENCES Pedidos(pedidoId) ON DELETE CASCADE,
    FOREIGN KEY (ProductoId) REFERENCES Productos(ProductoId) ON DELETE CASCADE
);

/* TRIGGERS PARA INSERTAR DATOS AUTOMATICAMENTE */
/* TRIGGER PARA INSERTAR DATOS DE ACCESO AUTOMATICAMENTE CUANDO SE INSERTA UN USUARIO */
DELIMITER $$
CREATE TRIGGER InsertarDatosAcceso AFTER INSERT ON Usuarios
FOR EACH ROW
BEGIN
    INSERT INTO DatosAcceso (usuarioId, Usuario, Contrasena) VALUES 
        (NEW.usuarioId, CONCAT(REPLACE(NEW.Nombres, ' ','')), NEW.Cedula );
        /* El CONCAT(REPLACE(NEW.Nombres, ' ','')) Reemplaza los espacios en blanco por nada, es decir, los elimina.*/
END$$
DELIMITER ;

/* TRIGGER PARA ACTUALIZAR EL ESTADO A 1 DE UNA MESA CUANDO SE AGREGUE A LA TABLA DetalleMesasMeseros */
DELIMITER $$
CREATE TRIGGER ActualizarEstadoMesa AFTER INSERT ON DetalleMesasMeseros
FOR EACH ROW
BEGIN
    UPDATE Mesas SET Estado = 1 WHERE MesaId = NEW.MesaId;
END$$
DELIMITER ;


/* TRIGGER PARA ACTUALIZAR EL ESTADO A 0 A UNA MESA CUANDO SE MODIFIQUE EL CAMPO FechaDesignacion EN LA TABLA DetalleMesasMeseros */
DELIMITER $$
CREATE TRIGGER ActualizarEstadoMesaDesasignacion AFTER UPDATE ON DetalleMesasMeseros
FOR EACH ROW
BEGIN
    IF NEW.FechaDesasignacion IS NOT NULL THEN
        UPDATE Mesas SET Estado = 0 WHERE MesaId = NEW.MesaId;
    END IF;
END$$
DELIMITER ;

/* INSERCIONES DE PRUEBA */
/* Insercion Tabla Usuarios */
INSERT INTO Usuarios (Nombres, Apellidos,  Cedula, TipoUsuario) VALUES 
('Austin Richard', 'Post', '1103857395', 'Administrador'),
('Jerson Andres', 'Herrera', '1731805852', 'Administrador'),
('Juan Jose', 'Marin', '1202957603', 'Mesero'),
('John David', 'Doe', '319457302', 'Mesero'),
('Laura Cristina', 'Lopez Acosta', '583024841', 'Mesero'),
('Sofia Geraldine', 'Montano', '315285014', 'Mesero'),
('Andres Steven', 'Vivas', '1340589420' ,'Mesero');

/* Insercion Tabla Productos */
INSERT INTO Productos (Nombre, Descripcion, Precio, Categoria) VALUES 
('Arroz Paisa', 'Arroz paisa para 3 personas', 32000, 'Comida'),
('Hamburguesa', 'Hamburguesa de carne', 10000, 'Comida'),
('Papas Fritas', 'Papas fritas con queso', 5000, 'Comida'),
('Coca Cola', 'Coca Cola 500ml', 3000, 'Bebida'),
('Jugo de Naranja', 'Jugo de naranja 500ml', 3000, 'Bebida'),
('Cerveza', 'Cerveza 500ml', 5000, 'Bebida'),
('Agua', 'Agua 500ml', 2000, 'Bebida'),
('Ensalada', 'Ensalada de frutas', 5000, 'Comida'),
('Sandwich', 'Sandwich de pollo', 5000, 'Comida'),
('Cafe', 'Cafe 500ml', 2000, 'Bebida'),
('Te', 'Te 500ml', 2000, 'Bebida');

/* Insercion Tabla Mesas */
INSERT INTO Mesas (MesaId) VALUES 
(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),
(11),(12),(13),(14),(15),(16),(17),(18),(19),(20);

/* Insercion Tabla DetalleMesasMeseros */
INSERT INTO DetalleMesasMeseros (MesaId, MeseroId, CantidadClientes) VALUES 
(1, 3, 3),(2, 1, 2),(3, 1, 4),(4, 1, 2),(5, 7, 3),(6, 3, 2),(7, 4, 4),(8, 5, 2),(9, 6, 3),(10, 7, 2),
(11, 3, 4),(12, 4, 2),(13, 5, 3),(14, 6, 2),(15, 6, 4),(16, 3, 2),(17, 6, 3),(18, 5, 2),(19, 6, 4),(20, 7, 2);

/* Insercion Tabla Pedidos */
INSERT INTO Pedidos (NombreCliente, MesaId, MeseroId) VALUES 
('Juan Perez', 1, 3),('Maria Lopez', 2, 1),('Pedro Ramirez', 3, 1),('Luisa Rodriguez', 4, 1),('Carlos Sanchez', 5, 7),
('Sofia Montano', 6, 3),('Andres Vivas', 7, 4),('Laura Lopez', 8, 5),('Jerson Herrera', 9, 6),('Austin Post', 10, 7),
('Juan Perez', 11, 3),('Maria Lopez', 12, 4),('Pedro Ramirez', 13, 5),('Luisa Rodriguez', 14, 6),('Carlos Sanchez', 15, 6),
('Sofia Montano', 16, 3),('Andres Vivas', 17, 6),('Laura Lopez', 18, 5),('Jerson Herrera', 19, 6),('Austin Post', 20, 7);


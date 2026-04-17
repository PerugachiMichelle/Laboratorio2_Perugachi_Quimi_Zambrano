CREATE TABLE IF NOT EXISTS autor(
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    nombre              VARCHAR(35) NOT NULL,
    apellido            VARCHAR(35) NOT NULL,
    fecha_nacimiento    DATE,
    nacionalidad        VARCHAR(35),
    correo_electronico  VARCHAR(35) UNIQUE
);

CREATE TABLE IF NOT EXISTS libro(
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    titulo              VARCHAR(35) NOT NULL,
    isbn                VARCHAR(13) UNIQUE,
    anio_publicacion    INT NOT NULL,
    edicion             VARCHAR(35) NOT NULL,
    autor_id            INT,
    FOREIGN KEY (autor_id) REFERENCES autor(id)
);

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    correo VARCHAR(150),
    tipo_usuario VARCHAR(50) -- 'lector' o 'bibliotecario'
);


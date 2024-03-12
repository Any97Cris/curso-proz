CREATE DATABASE informacoesUsuario;
USE informacoesUsuario;

CREATE TABLE telefone(
    id_telefone SERIAL PRIMARY KEY,
    telefone varchar(11)
);
CREATE TABLE usuario(
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    telefone_id INT,
    CONSTRAINT fk_telefone
        FOREIGN KEY (telefone_id)
            REFERENCES telefone(id_telefone)
);

INSERT INTO telefone(telefone) VALUES('83994055562');
INSERT INTO telefone(telefone) VALUES('48980212445');
INSERT INTO telefone(telefone) VALUES('47972784534');
INSERT INTO telefone(telefone) VALUES('68988343488');
INSERT INTO telefone(telefone) VALUES('67985106842');
INSERT INTO telefone(telefone) VALUES('93967298725');

INSERT INTO usuario(nome, telefone_id) VALUES ('Fulano 01', 1)
INSERT INTO usuario(nome, telefone_id) VALUES ('Fulano 02', 2)
INSERT INTO usuario(nome, telefone_id) VALUES ('Fulano 03', 3)
INSERT INTO usuario(nome, telefone_id) VALUES ('Fulano 04', 4)
INSERT INTO usuario(nome, telefone_id) VALUES ('Fulano 05', 5)
INSERT INTO usuario(nome, telefone_id) VALUES ('Fulano 06', 6)



SELECT * FROM telefone;
SELECT * FROM usuario;

SELECT usuario.nome, telefone.telefone 
FROM usuario
INNER JOIN telefone
ON telefone.id_telefone = usuario.telefone_id;

SELECT usuario.nome, telefone.telefone 
FROM usuario
RIGHT JOIN telefone
ON telefone.id_telefone = usuario.telefone_id;

SELECT usuario.nome, telefone.telefone 
FROM usuario
LEFT JOIN telefone
ON telefone.id_telefone = usuario.telefone_id;


SELECT usuario.nome, telefone.telefone 
FROM usuario
RIGHT JOIN telefone
ON telefone.id_telefone = usuario.telefone_id
union
SELECT usuario.nome, telefone.telefone 
FROM usuario
LEFT JOIN telefone
ON telefone.id_telefone = usuario.telefone_id;
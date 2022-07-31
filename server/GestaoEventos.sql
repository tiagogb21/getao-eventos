DROP DATABASE IF EXISTS GestaoEventos;

CREATE DATABASE GestaoEventos;

USE GestaoEventos;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(30) NOT NULL,
	user_email VARCHAR(30) NOT NULL,
  user_password VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO users (full_name, user_email, user_password);

VALUES ('admin', 'admin@admin.com', 'admin');

CREATE TABLE eventos
(
	id INT NOT NULL AUTO_INCREMENT,
	cidade VARCHAR(30) NOT NULL,
	estado VARCHAR(30) NOT NULL,
  tipo VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO eventos (cidade, estado, tipo);

VALUES ('sao paulo', 'sao paulo', 'musica');

CREATE TABLE pagamentos
(
	id INT NOT NULL AUTO_INCREMENT,
	qtd_ingresso INT NOT NULL,
  birthday DATE,
	PRIMARY KEY(id)
);

INSERT INTO pagamentos (qtd_ingresso);

VALUES (0);

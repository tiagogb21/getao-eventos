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

INSERT INTO users (full_name, user_email, user_password)

VALUES ('admin', 'admin@admin.com', 'admin');

CREATE TABLE eventos
(
	id INT NOT NULL AUTO_INCREMENT,
	cidade VARCHAR(30) NOT NULL,
	estado VARCHAR(30) NOT NULL,
  tipo VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO eventos (cidade, estado, tipo)

VALUES
  -- empresas e universidades
  -- Seminário
  ('Sao Paulo', 'Sao Paulo', 'Seminário'),
  ('Belo Horizonte', 'Minas Gerais', 'Seminário'),
  ('Vitoria', 'Espirito Santo', 'Seminário'),
  ('Rio de Janeiro', 'Rio de Janeiro', 'Seminário'),
  ('Curitiba', 'Paraná', 'Seminário'),
  ('Porto Alegre', 'Rio Grande do Sul', 'Seminário'),
  -- Palestra
  ('Sao Paulo', 'Sao Paulo', 'Palestra'),
  ('Belo Horizonte', 'Minas Gerais', 'Palestra'),
  ('Vitoria', 'Espirito Santo', 'Palestra'),
  ('Rio de Janeiro', 'Rio de Janeiro', 'Palestra'),
  ('Curitiba', 'Paraná', 'Palestra'),
  ('Porto Alegre', 'Rio Grande do Sul', 'Palestra'),
  -- Curso
  ('Sao Paulo', 'Sao Paulo', 'Curso'),
  ('Belo Horizonte', 'Minas Gerais', 'Curso'),
  ('Vitoria', 'Espirito Santo', 'Curso'),
  ('Rio de Janeiro', 'Rio de Janeiro', 'Curso'),
  ('Curitiba', 'Paraná', 'Curso'),
  ('Porto Alegre', 'Rio Grande do Sul', 'Curso')
;

CREATE TABLE pagamentos
(
	id INT NOT NULL AUTO_INCREMENT,
	qtd_ingresso INT NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO pagamentos (qtd_ingresso)

VALUES (0);

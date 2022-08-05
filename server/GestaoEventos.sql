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
	cidade VARCHAR(50) NOT NULL,
	estado VARCHAR(30) NOT NULL,
	tipo VARCHAR(30) NOT NULL,
	imagem VARCHAR(100) NOT NULL,
	nome VARCHAR(30) NOT NULL,
	preco VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO eventos (cidade, estado, tipo, imagem, nome, preco)

VALUES
  -- empresas e universidades
  -- Seminário
  (
	'Sao Paulo',
    'Sao Paulo',
    'Seminário',
    'https://cdn.pixabay.com/photo/2013/04/19/01/15/university-105709__340.jpg',
    'Seminario Universidade',
    '41'
	),
  (
	'Belo Horizonte',
    'Minas Gerais',
    'Seminário',
    'https://cdn.pixabay.com/photo/2017/08/13/10/14/webinar-2636738__340.jpg',
    'Seminario Webnario',
    '42'
	),
  (
	'Vitoria',
    'Espirito Santo',
    'Seminário',
    'https://cdn.pixabay.com/photo/2014/08/01/01/58/coach-407290_960_720.jpg',
    'Seminário Coach',
    '43'
	),
  (
	'Rio de Janeiro',
    'Rio de Janeiro',
    'Seminário',
    'https://cdn.pixabay.com/photo/2016/08/09/08/46/education-1580143_960_720.jpg',
    'palestra educação',
    '44'
	),
  (
	'Curitiba',
    'Paraná',
    'Seminário',
    'https://cdn.pixabay.com/photo/2019/02/10/09/21/lecture-3986809_960_720.jpg',
    'Seminario Lecture',
    '45'
    ),
  (
	'Porto Alegre',
    'Rio Grande do Sul',
    'Seminário',
    'https://cdn.pixabay.com/photo/2014/09/09/14/31/human-440127_960_720.jpg',
    'Seminario Human',
    '46'
	),
  -- Palestra
  (
    'Sao Paulo',
    'Sao Paulo',
    'Palestra',
    'https://cdn.pixabay.com/photo/2018/02/27/10/49/training-3185170__340.jpg',
    'Palestra Training',
    '51'
  ),
  (
    'Belo Horizonte',
    'Minas Gerais',
    'Palestra',
    'https://cdn.pixabay.com/photo/2018/10/23/10/09/video-recording-3767454__340.jpg',
    'Palestra Record',
    '52'
  ),
  (
    'Vitoria',
    'Espirito Santo',
    'Palestra',
    'https://cdn.pixabay.com/photo/2017/02/06/23/57/lecture-2044621_960_720.jpg',
    'Palestra Lecture',
    '53'
  ),
  (
    'Rio de Janeiro',
    'Rio de Janeiro',
    'Palestra',
    'https://cdn.pixabay.com/photo/2017/02/07/01/20/team-2044760_960_720.jpg',
    'Palestra Team',
    '54'
  ),
  (
    'Curitiba',
    'Paraná',
    'Palestra',
    'https://cdn.pixabay.com/photo/2017/02/07/01/19/meeting-2044759__340.jpg',
    'Palestra Meeting',
    '55'
  ),
  (
    'Porto Alegre',
    'Rio Grande do Sul',
    'Palestra',
    'https://cdn.pixabay.com/photo/2018/01/09/08/31/wisdom-3071110__340.jpg',
    'Palestra Wisdom',
    '56'
  ),
  -- Curso
  (
    'Sao Paulo',
    'Sao Paulo',
    'Curso',
    'https://cdn.pixabay.com/photo/2015/09/30/08/33/team-965093__340.jpg',
    'Curso team',
    '57'
  ),
  (
    'Belo Horizonte',
    'Minas Gerais',
    'Curso',
    'https://cdn.pixabay.com/photo/2019/12/02/23/20/online-4668930__340.jpg',
    'Curso Online',
    '58'
  ),
  (
    'Vitoria',
    'Espirito Santo',
    'Curso',
    'https://cdn.pixabay.com/photo/2018/03/08/05/07/training-3207841__340.jpg',
    'Curso Training',
    '61'
  ),
  (
    'Rio de Janeiro',
    'Rio de Janeiro',
    'Curso',
    'https://cdn.pixabay.com/photo/2015/10/31/12/31/course-1015601__340.jpg',
    'Curso 2',
    '62'
  ),
  (
    'Curitiba',
    'Paraná',
    'Curso',
    'https://cdn.pixabay.com/photo/2015/10/31/11/58/financial-equalization-1015266__340.jpg',
    'Curso Financial',
    '63'
  ),
  (
    'Porto Alegre', 'Rio Grande do Sul',
    'Curso',
    'https://cdn.pixabay.com/photo/2019/12/29/19/40/online-4727942__340.jpg',
    'Curso Online 2',
    '64'
  )
;

CREATE TABLE pagamentos
(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
  preco INT NOT NULL,
  quantidade INT NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO pagamentos (nome, preco, quantidade)

VALUES ('', 0, 0);

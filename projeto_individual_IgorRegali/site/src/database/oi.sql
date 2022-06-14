CREATE DATABASE comwar;

USE comwar;

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


CREATE TABLE dados_perfil (
	id_dados INT PRIMARY KEY AUTO_INCREMENT,
	jf VARCHAR(50),
	jj VARCHAR(50),
	cf VARCHAR(50)
)AUTO_INCREMENT=1000;

select * from dados_perfil;
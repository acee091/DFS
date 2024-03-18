create database db_locadora;
use db_locadora;

create table tbl_cliente (
idCliente int not null auto_increment,
nome varchar(120) not null,
endereco varchar(120) not null,
telefone varchar(11) not null,
email varchar(80) not null,
primary key(idCliente)
);

create table tbl_veiculos(
	idVeiculo int not null auto_increment,
    marca varchar(80),
    modelo varchar(80),
    ano int not null,
    placa varchar(7),
    disponibilidade boolean not null,
    primary key(idVeiculo)
);

create table tbl_reserva(
	idReserva int not null auto_increment,
    idCliente int not null,
    idVeiculo int not null,
    data_inicio date not null,
    data_fim date not null,
    primary key(idReserva),
    CONSTRAINT id_cliente FOREIGN KEY(idCliente) REFERENCES tbl_cliente(IdCliente),
    CONSTRAINT id_veiculo FOREIGN KEY(idVeiculo) REFERENCES tbl_veiculos(IdVeiculo)
);
SELECT * FROM tbl_cliente;
SELECT * FROM tbl_veiculos;
SELECT * FROM tbl_reserva;

SELECT C.nome, C.telefone, V.placa, V.marca, V.modelo, R.data_inicio, R.data_fim
FROM tbl_reserva R INNER JOIN tbl_veiculos V ON V.idVeiculo = R.idVeiculo 
INNER JOIN tbl_cliente C ON C.idCliente = R.idCliente;

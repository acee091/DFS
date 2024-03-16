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
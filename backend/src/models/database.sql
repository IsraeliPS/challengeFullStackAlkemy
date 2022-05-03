create database if not exists challengeAlkemi;

use challengeAlkemi;

create table User(
	userId int (11) primary key auto_increment not null,
    name varchar(45) not null,
    email varchar(50) not null,
    password varchar(80) not null
);

create table Operations(
	operationId int (11) primary key auto_increment not null,
    concept varchar (30) not null,
    amount decimal not null,
    dateOperation date not null,
    typeOperationOperations varchar (7) not null,
    userId int not null,
    CONSTRAINT FK_OperationUser foreign key (userId) references User(userId)
);

describe User;
describe Operations;
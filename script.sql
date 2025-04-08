CREATE DATABASE petmax;
USE petmax;

CREATE TABLE animais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    tipo VARCHAR(50),
    raca VARCHAR(100),
    nascimento DATE
);

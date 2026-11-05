DROP DATABASE IF EXISTS stockapi_ana; -- Remove o banco antigo com erro se necessário
CREATE DATABASE IF NOT EXISTS stockapi;
USE stockapi;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120),
    telefone VARCHAR(20)
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL -- Removida a vírgula incorreta aqui
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    produtoscol TEXT, -- Agora a coluna vai se chamar descricao de verdade!
    preco DECIMAL(10,2) NOT NULL,
    quantidade_estoque INT NOT NULL DEFAULT 0,
    categoria_id INT, -- Padronizado para minúsculo
    FOREIGN KEY(categoria_id) REFERENCES categorias(id)
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'Pendente',
    total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    FOREIGN KEY(cliente_id) REFERENCES clientes(id)
);

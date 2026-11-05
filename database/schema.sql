CREATE DATABASE IF NOT EXISTS stockapi;
USE stockapi;

CREATE TABLE IF NOT EXISTS categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,        
  nome VARCHAR(60) NOT NULL
);


CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120),
  telefone VARCHAR(20)
);


CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10,2) NOT NULL,
  quantidade_estoque INT NOT NULL DEFAULT 0,
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);


CREATE TABLE IF NOT EXISTS pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'pendente',
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);


CREATE TABLE IF NOT EXISTS itens_pedido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT,
  produto_id INT,
  quantidade INT NOT NULL,
  preco_unitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

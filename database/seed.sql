USE stockapi;

INSERT INTO categorias (nome) VALUES
  ('Papelaria'),   
  ('Informática'), 
  ('Limpeza');     

INSERT INTO clientes (nome, email, telefone) VALUES
  ('Maria Souza', 'maria@exemplo.com', '69 99999-0001'), 
  ('João Lima',   'joao@exemplo.com',  NULL),            
  ('Ana Castro',  NULL,                NULL);            

INSERT INTO produtos (nome, descricao, preco, quantidade_estoque, categoria_id) VALUES
  ('Caderno 96 folhas', 'Capa dura',          15.90, 40, 1), 
  ('Caneta azul',       NULL,                  2.50, 200, 1), 
  ('Mouse USB',         'Óptico, 1000 dpi',   35.00, 15, 2), 
  ('Pendrive 32 GB',    NULL,                 29.90, 0,  2), 
  ('Produto sem categoria', 'Para testar LEFT JOIN', 9.99, 5, NULL); 

INSERT INTO pedidos (cliente_id, status) VALUES
  (1, 'pendente'), 
  (2, 'pago');     

INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES
  (1, 1, 2, 15.90), 
  (1, 2, 5,  2.50), 
  (2, 3, 1, 35.00); 
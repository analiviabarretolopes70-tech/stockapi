import pool from "../config/db.js";

//Função para criar um novo produto
export async function criar(produto) {
    const {nome, preco, categoria_id} = produto;
    const [r] = await pool.query('INSERT INTO produtos (nome, preco, categorias_id) ' +
        'VALEUS (?, ?, ?)', [nome, preco, categoria_id]); 
        return r.insertId;
}

//Função para listar todos os produtos
export async function listar() {
    const[rows] = await pool.query('SELECT *FROM produtos');
    return rows;
}

//Função pra buscar um produto pelo ID 
export async function buscarPorId(id) {
    const[rows] = await pool.query('SELECT *FROM produtos WHERE id=?', [id]);
    return rows[0];
}

//Função para atualizar um produto 
export async function atualizar(id, produto) {
    const {nome, descricao, preco, quantidade_estoque, categoria_id} = produto;
    const [r] = await pool.query('UPDATE PRODUTOS SET nome=?, descricao=?, preco=?, quantidade_estoque=?, categoria_id? WHERE id=?'
        [nome, descricao, preco, quantidade_estoque, categoria_id, id]
    );
       return r.affectedRows; 
}

//Função para excluir um produto 
export async function deletar(id) {
    const [r] = await pool.query('DELETE FROM produtos WHERE id=?', [id]);
        return r.affectedRows;
    
}
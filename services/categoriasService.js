import pool from "../config/db.js";

//função para criar uma nova categoria no banco de dados
export async function criar(categorias) {
    const{nome} = categorias;
    const [r] = await pool.query(
        'INSERT INTO categorias (nome) VALUES (?)', [nome]
    );
    return r.insertId;
}

//função para listar todas as categorias existentes
export async function listar() {
    const [rows] = await pool.query(
        'SELECT * FROM categorias'
    )
    return rows;
}

//função para buscar a categoria pelo id
export async function buscarPorId(id) {
    const [rows] = await pool.query(
        'SELECT * FROM categorias WHERE id = ?', [id]
    )
    return rows[0];
}

//função para atualizar uma categoria
export async function atualizar(id, categoria) {
    const {nome} = categoria; 
    const[r] = await pool.query(
        'UPDATE categorias SET nome = ? WHERE id = ?', [nome, id]
    );
    return r.affectedRows;
}
//função para deletar uma categoria
export async function deletar(id) {
    const[r] = await pool.query(
        'DELETE FROM categorias WHERE id = ?', [id]
    );
    return r.affectedRows;
}
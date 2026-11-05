import pool from '../config/db.js';
import bcrypt from 'bcrypt';

//Função para criar um novo usúario no banco
export async function criar(usuario) {
const { nome, email, senha } = usuario;
const senha_hash = await bcrypt.hash(senha, 10);

const [r] = await pool.query(
'INSERT INTO usuarios (nome, email, senha_hash)' +
' VALUES (?, ?, ?)',
[nome, email, senha_hash]
);
return r.insertId;
}


//Função para buscar um usúario pelo email
export async function buscarPorEmail(email) {
const [rows] = await pool.query(
'SELECT * FROM usuarios WHERE email = ?', [email]
);
return rows[0];
}
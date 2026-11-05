

import db from '../config/db.js';

export async function criar(item) {
    let { pedido_id, produto_id, quantidade, preco_unitario } = item;
    let sql = `INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario)VALUES (?, ?, ?, ?)`;
    let [resultado] = await db.query(sql, [pedido_id,produto_id,quantidade,preco_unitario]);
    return {id: resultado.insertId,pedido_id,produto_id,quantidade,preco_unitario
};
}

export async function listarTodos() {
    let sql = `SELECT itens_pedido.id, itens_pedido.pedido_id,itens_pedido.produto_id,produtos.nome AS produto,itens_pedido.quantidade,itens_pedido.preco_unitario,pedidos.statusFROM itens_pedidoINNER JOIN produtos ON itens_pedido.produto_id = produtos.idINNER JOIN pedidosON itens_pedido.pedido_id = pedidos.id`;
    let [resultado] = await db.query(sql);

    return resultado;
}

export async function buscarPorId(id) {
    let sql = `SELECT itens_pedido.id,itens_pedido.pedido_id,itens_pedido.produto_id,produtos.nome AS produto,itens_pedido.quantidade,itens_pedido.preco_unitario,pedidos.statusFROM itens_pedidoINNER JOIN produtosON itens_pedido.produto_id = produtos.idINNER JOIN pedidosON itens_pedido.pedido_id = pedidos.idWHERE itens_pedido.id = ?`;

let [resultado] = await db.query(sql, [id]);

    return resultado[0];
}

export async function atualizar(id, item) {
    let { quantidade, preco_unitario } = item;
    let sql = `UPDATE itens_pedidoSET quantidade = ?, preco_unitario = ?WHERE id = ?`;
    let [resultado] = await db.query(sql, [quantidade,preco_unitario,id]);

    return resultado;
}

export async function deletar(id) {
    let sql = `DELETE FROM itens_pedidoWHERE id = ?`;

let [resultado] = await db.query(sql, [id]);

return resultado;
}











const CAMPOS_PRODUTOS = ['nome', 'descricao', 'preco', 'quantidade_estoque', 'categorias_id'];

export function validarProduto(req, res, next) {
    const {nome, preco, quantidade_estoque, categorias_id} = req.body;
    const erros = [];

    if (!nome || typeof nome !== 'string' || !nome.trim()) {
        erros.push('nome é obrigatório e deve ser um texto');
    }

    if (preco === undefined || preco === null || typeof preco !== 'number' || preco <= 0) {
        erros.push('preco é obrigatório e deve ser um número maior que zero');
    }

    if (quantidade_estoque !== undefined && (typeof quantidade_estoque !== 'number' || quantidade_estoque < 0)) {
    erros.push('quantidade_estoque deve ser um número maior ou igual a zero');
    }

    if (!categorias_id || categorias_id !== undefined || categorias_id !== null || typeof categorias_id !== 'number' ) {
        erros.push('categorias_id é obrigatório e deve ser um número');
    }

    if ( erros.length > 0 ) {
        return res.status(400).json({erros})
    }

    next();
}

export function validarAtualizacaoProduto(req, res, next) {
    const {nome, preco, quantidade_estoque, categorias_id} = req.body;
    const erros = [];

    const camposEnviados = Object.keys(req.body).filter((campo) => CAMPOS_PRODUTOS.includes(campo));
    if (camposEnviados.length === 0) {
        erros.push('envie pelo menos um campo para atualizar');
    }
    
    if (!nome!== undefined && (typeof nome !== 'string' || !nome.trim())) {
        erros.push('nome é obrigatório e deve ser um texto');
    }

    if (preco !== undefined && (typeof preco !== 'number' || preco <= 0)) {
        erros.push('preco é obrigatório e deve ser um número maior que zero');
    }

    if (quantidade_estoque !== undefined && (typeof quantidade_estoque !== 'number' || quantidade_estoque < 0)) {
    erros.push('quantidade_estoque deve ser um número maior ou igual a zero');
    }

    if (categorias_id !== undefined && categorias_id !== null && typeof categorias_id !== 'number' ) {
        erros.push('categorias_id é obrigatório e deve ser um número');
    }

    if ( erros.length > 0 ) {
        return res.status(400).json({erros})
    }

    next();
}
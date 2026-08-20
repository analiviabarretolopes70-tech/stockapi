import * as service from '../services/produtosService.js';

//Função para criar um novo produto
export async function criar(req, res) {
    try {
        const {nome, preco} = req.body;
        if (!nome || !preco) {
            return res.status(400).json({erro: 'Dados não informados'});
        }
        const id = await service.criar(req.body);
        res.status(201).json({id, ...req.body});
    } catch (err) {
         res.status(500).json({erro: err.message});
    }
}

//Função para listar todos os produtos 
export async function listar(req, res) {
    try {
        const produtos = await service.listar();
        if (!produtos) {
            return res.status(400).json({ mensagem: "Nenhum produto encontrado"})
        }

        res.json(produtos);
    } catch (err) {
         res.status(500).json({ erro: err})
    }
    
}

//Função pra buscar um produto pelo ID
export async function buscarPorId(req, res) {
    try {
        const { id } = req.params;
        const produto = await service.buscarPorId()
        if (!produto) {
           return res.status(404).json({erro: 'Produto não encontrado'});
        }
        res.json(produto)
    } catch (err) {
         res.status(500).json({ erro: err.message });
    }
}

//Função para atualizar um produto
export async function atualizar(req, res) {
    try {
        const [id] = req.params
        const n = await service.atualizar(id, req.body)
        if (n === 0) {
            return res.status(404).json({erro: 'produto não atualizado' });
        }
        res.json({id, ...req.body});
    } catch (err) {
         res.status(500).json({erro: err.message});
    }
}

//Função para excluir um produto 
export async function deletar(req, res) {
    try {
        const {id} = req.params;
        const n = await service.deletar(id);
        if (n === 0) {
            return res.status(404).json({erro: 'Id inválido'});
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ erro: err.message});
    }
}
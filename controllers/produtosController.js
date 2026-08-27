import * as service from '../services/produtosService.js';

//Função para criar um novo produto
export async function criar(req, res, next) {
    try {
        const id = await service.criar(req.body);
        res.status(201).json({id, ...req.body});
    } catch (err) {
         next(err);
    }
}

//Função para listar todos os produtos 
export async function listar(req, res, next) {
    try {
        const produtos = await service.listar();
        res.json(produtos);
    } catch (err) {
         next(err);
    }
    
}

//Função pra buscar um produto pelo ID
export async function buscarPorId(req, res, next) {
    try {
        const { id } = req.params;
        const produto = await service.buscarPorId()
        if (!produto) {
           return res.status(404).json({erro: 'Produto não encontrado'});
        }
        res.json(produto)
    } catch (err) {
         next(err);
    }
}

//Função para atualizar um produto
export async function atualizar(req, res, next) {
    try {
        const {id} = req.params
        const n = await service.atualizar(id, req.body)
        const produtoExistente = await service.buscarPorId(id);
        if (!produtoExistente) {
            return res.status(400).json({erro: 'Produto não encontrado'});
        }
        await service.atualizar(id, req.body);
       
        const produtoAtualizado = await service.buscarPorId(id);
        res.json(produtoAtualizado);
    } catch (err) {
         next(err);
    }
}

//Função para excluir um produto 
export async function deletar(req, res, next) {
    try {
        const {id} = req.params;
        const n = await service.deletar(id);
        if (n === 0) {
            return res.status(404).json({erro: 'Id inválido'});
        }
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}
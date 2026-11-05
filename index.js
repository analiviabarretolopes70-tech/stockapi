import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import produtosRoutes from './routes/produtosRoutes.js';
import categoriasRoutes from './routes/categoriasRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({status: 'OK'}));
app.use('/api/v1/stockapi', produtosRoutes); //http://localhost:3000/api/v1/stockapi/produtos
app.use('/api/v1/stockapi', categoriasRoutes); //http://localhost:3000/api/v1/stockapi/categorias
app.use('/api/v1/stockapi', usuariosRoutes);


app.use((req, res)=>{
    res.status(404).json({erro: `Rota - ${req.method} ${req.originalUrl} - não foi encontrada`});
})

app.use((erro, req, res, next)=>{
    console.error(erro);
    if (erro.code === 'ER_NO_REFERENCED_2'){
        return res.status(400).json({erro: 'categoria_id informado não existe'});
    }

    res.status(500).json({erro: 'Erro interno do servidor'});
})

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => console.log(`Rodando na porta ${PORTA}`));



// 1R  O routes são as rotas de cada função, o middleware valida se aquela função é verdadeira, o service cria a função, o controller avalia a função do service e retorna uma mensagem

// 2R O controller usam next erro dentro do cath para enviar o erro ao middware, assim ele fica centralizado no mesmo lugar, evitando repetir res.status(500)

// 3R Para salvar as informações antes da alteração.

// 4R Ao tentar excluir um pedido que possui registros relacionados em itens_pedido, o mysql impede a execusão por causa da chave estrangeira.


import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import produtosRoutes from './routes/produtosRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({status: 'OK'}));
app.use('/api/v1/stockapi', produtosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => console.log(`Rodando na porta ${PORT}`));
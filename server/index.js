import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';
import { connectDB } from './db/index.js';

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API do Prospect Flow!' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

const PORT = process.env.PORT || 3333;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => {
  console.error('Falha ao conectar ao banco de dados:', error);
  process.exit(1);
});

export default app;

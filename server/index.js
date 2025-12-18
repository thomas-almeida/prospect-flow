import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

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
app.listen(PORT, () => {
  console.log(`ONLINE - ${PORT}`);
});

export default app;

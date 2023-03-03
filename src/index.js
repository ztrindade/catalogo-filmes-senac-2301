import 'dotenv/config';
import cors from 'cors';
import express from 'express'

import pingController from './controller/pingController.js'
import filmeController from './controller/filmController.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(pingController);
servidor.use(filmeController);

servidor.listen(process.env.PORT, () => {
    console.log(`Api subiu com sucesso na porta ${process.env.PORT}`);
});


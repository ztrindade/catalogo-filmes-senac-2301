import { Router } from "express";
import { listarFilmes } from "../repository/filmRepository.js";

const endpoints = Router();
endpoints.get('/filmes', async (req, resp) => {
    const resultado = await listarFilmes();
    resp.send(resultado);
})

export default endpoints;
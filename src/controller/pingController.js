import { Router } from "express";

const endpoints = Router();

endpoints.get('/ping', (req, resp) => {
    resp.send('Pinga ni mim!');
})

export default endpoints;
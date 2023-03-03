import connection from "./connections.js";

export async function listarFilmes () {
    const comando = 'SELECT * FROM TB_FILME';
    const resultado = await connection.query(comando);
    return resultado[0];
}
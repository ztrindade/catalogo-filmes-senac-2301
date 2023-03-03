import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PWD
})

console.log('Banco conectado com sucesso');

export default connection;
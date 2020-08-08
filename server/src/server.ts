import path from 'path'
import express from 'express';

const app = express()
app.use(express.json())

//Body: Dados para criacao ou atualizaca de registro
//Route Params: Identificar qual recurso quero ler, atualizar, deletar
//QUery Params: Paginacao, filtros, ordenacao



console.log("Starting Server: " ,String(__dirname))










app.listen(3333)
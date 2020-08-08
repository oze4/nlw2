"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].json());
//Body: Dados para criacao ou atualizaca de registro
//Route Params: Identificar qual recurso quero ler, atualizar, deletar
//QUery Params: Paginacao, filtros, ordenacao
console.log("Starting Server: ", String(__dirname));
app.listen(3333);

import path from 'path'
import express from 'express'
import routes from './routes'


const app = express()

app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
//GET - Buscar uma ou mais inforções do back-end
//POST - Criar uma nova informação no back-end
//PUT - Atualizar uma informação no back-end
//DELETE - Remover uma informação do back-end

//POST http://localhost:3333/users = Criar um usuário
//GET http://localhost:3333/users = Listar usuários
//GET http://localhost:3333/users/5 = Busca dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = 'Diego';
// knex('users').where('name', 'Diego').select('*')










app.listen(3333)
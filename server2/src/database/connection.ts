import knex from 'knex'
import path from 'path'

//MIGRATIONS: são o histórico do banco de dados


const pg = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'nlw',
        password: 'nextlevelweek2',
        database: 'nlw2'
    }
})

const sqlite = knex({
    client: 'sqlite',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
})

export default pg
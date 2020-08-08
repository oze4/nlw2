import Knex from 'knex'

//Migratrions: controlam a versao do banco de dados

const pg = Knex({
    client: 'pg',
    searchPath: 'nlw',
    connection: {
        host:'localhost',
        user: 'nlw',
        password: 'nextlevelweek2',
        database: 'nlw2',
    },

})

export default pg

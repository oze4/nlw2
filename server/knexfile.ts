const path = require('path')

module.exports = {
    client: 'pg',
    searchPath: 'nlw2',
    connection: {
        host: '127.0.0.1',
        user: 'nlw',
        password: 'nextlevelweek2',
        database: 'nlw2'
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    pool: {
        min: 2,
        max: 10
      },
}
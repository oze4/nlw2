import path from 'path'

module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'nlw',
        password: 'nextlevelweek2',
        database: 'nlw2'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}


 //Para usar sqlite3
 /*
module.exports = {
    client: 'sqlite',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database' , 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database' , 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database' , 'seeds')
    },
    useNullAsDefault: true
}
*/

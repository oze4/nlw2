import Knex from 'knex'

export async function up(knex: Knex) {
    //CRIAR TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary()
        table.integer('id_point')
            .notNullable()
            .references('id')
            .inTable('points')
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items')
    })
}

export async function down(knex: Knex) {
    //VOLTAR ATRAS (DELETAR TABELA)
    return knex.schema.dropTable('items')
}
exports.up = function(knex) {
  return knex.schema.createTable('projects_resources', tbl => {
    tbl.increments()
    tbl.integer('project_id')
      .notNullable()
      .unsigned()
      .references('project_id')
      .inTable('projects')
    tbl.integer('resource_id')
      .notNullable()
      .unsigned()
      .references('resource_id')
      .inTable('resources')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects_resources')
}

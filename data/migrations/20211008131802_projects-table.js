exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments("project_id")
    tbl.string('project_name')
      .unique()
      .notNullable()
    tbl.text('project_description')
    tbl.boolean('project_completed')
      .defaultTo(false)
})
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
}

exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments()
    tbl.string('task_details')
      .notNullable()
    tbl.text('task_notes')
    tbl.boolean('task_completed')
      .defaultTo(false)
    tbl.integer('project_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('projects');
}); 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};

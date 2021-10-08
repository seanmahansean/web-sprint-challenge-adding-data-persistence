exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments("task_id")
    tbl.string('task_description')
      .notNullable()
    tbl.text('task_notes')
    tbl.boolean('task_completed')
      .defaultTo(false)
    tbl.integer('project_id')
      .notNullable()
      .unsigned()
      .references('project_id')
      .inTable('projects');
}); 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};

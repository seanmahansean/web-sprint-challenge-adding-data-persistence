exports.seed = function(knex){
  return knex("projects").truncate()
    .then(function(){
      return knex("projects").insert([
        {
          project_id: 1,
          project_name: "The first sprint",
          project_description: "I'm feeling good about myself",
          project_completed: true
        },
        {
          project_id: 2,
          project_name: "The second sprint",
          project_description: "Oh no",
          project_completed: true
        },
        {
          project_id: 3,
          project_name: "The third sprint",
          project_description: "I think I'm flexing",
          project_completed: false
        }
      ])
    })
}
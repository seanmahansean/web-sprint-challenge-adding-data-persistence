exports.seed = function(knex){
  return knex("projects").truncate()
    .then(function(){
      return knex("projects").insert([
        {
          id: 1,
          project_name: "The first sprint",
          project_details: "I'm feeling good about myself",
          completed: true
        },
        {
          id: 2,
          project_name: "The second sprint",
          project_details: "Oh no",
          completed: true
        },
        {
          id: 3,
          project_name: "The third sprint",
          project_details: "I think I'm flexing",
          completed: false
        }
      ])
    })
}
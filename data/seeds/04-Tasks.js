exports.seed = function(knex){
  return knex("tasks").truncate()
    .then(function(){
      return knex("tasks").insert([
        {
          task_id: 1,
          task_description: "Push a boulder up a mountain forever",
          task_notes: "it might hurt if you stop",
          task_completed: false,
          project_id: 1,
        },
        {
          task_id: 2,
          task_description: "Hold the sky on your back",
          task_notes: "The sky is quite large",
          task_completed: false,
          project_id: 1,
        },
        {
          task_id: 3,
          task_description: "Take out the trash",
          task_notes: "I really don't want to mom",
          task_completed: false,
          project_id: 2,
        },
        {
          task_id: 4,
          task_description: "Get your butt whooped",
          task_notes: "Ok Ok I'll take out the trash",
          task_completed: true,
          project_id: 2,
        },
        {
          task_id: 5,
          task_description: "Swim from Florida to Cuba",
          task_notes: "All for the cigar",
          task_completed: false,
          project_id: 3,
        },
        {
          task_id: 6,
          task_description: "Swim back",
          task_notes: "I am now a republican",
          task_completed: false,
          project_id: 3,
        }
      ])
    })
}
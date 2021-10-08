exports.seed = function(knex){
  return knex("resources").truncate()
    .then(function(){
      return knex("resources").insert([
        {
          resource_id: 1,
          resource_name: "Gamestop",
          resource_description: "Stock investors hate this guy",
        },
        {
          resource_id: 2,
          resource_name: "Facebook",
          resource_description: "A perfect and moral social media that will never get hacked",
        },
        {
          resource_id: 3,
          resource_name: "School",
          resource_description: "12 grades of daycare",
        },
        {
          resource_id: 4,
          resource_name: "Military",
          resource_description: "Good at finding where the oil is",
        },
        {
          resource_id: 5,
          resource_name: "Lambda",
          resource_description: "I'm not making fun of this one",
        },
        {
          resource_id: 6,
          resource_name: "Spotify",
          resource_description: "Stiff your artists type beat",
        }
      ])
    })
}
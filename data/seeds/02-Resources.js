exports.seed = function(knex){
  return knex("resources").truncate()
    .then(function(){
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Gamestop",
          resource_details: "Stock investors hate this guy",
        },
        {
          id: 2,
          resource_name: "Facebook",
          resource_details: "A perfect and moral social media that will never get hacked",
        },
        {
          id: 3,
          resource_name: "School",
          resource_details: "12 grades of daycare",
        },
        {
          id: 4,
          resource_name: "Military",
          resource_details: "Good at finding where the oil is",
        },
        {
          id: 5,
          resource_name: "Lambda",
          resource_details: "I'm not making fun of this one",
        },
        {
          id: 6,
          resource_name: "Spotify",
          resource_details: "Stiff your artists type beat",
        }
      ])
    })
}
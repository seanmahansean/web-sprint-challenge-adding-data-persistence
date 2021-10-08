const db = require("../../data/dbConfig")

function get(){
  return db("resources")
}

function getById(id){
  return db("resources").where({id}).first()
}

function add(resource){
  return db("resources").insert(resource, "id")
    .then(([id]) => {
      return getById(id)
    })
}

function addToProject(resource){
  return db("projects_resources").insert(resource)
    .then(([id]) => id)
}

module.exports = {
  add,
  addToProject,
  get,
  getById
}
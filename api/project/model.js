const db = require("../../data/dbConfig")

function get(){
  return db("projects")
}

function getById(id){
  return db("projects").where({id}).first()
}

function add(project){
  return db("projects").insert(project, "id")
    .then(([id]) => {
      return getById(id)
    })
}

module.exports = {
  add,
  get,
  getById
}
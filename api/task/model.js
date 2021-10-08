const db = require("../../data/dbConfig")

function get(){
  return db("tasks")
}

function getById(id){
  return db("tasks").where({id}).first()
}

function getByProjectId(id){
  return db("tasks").where({project_id: id})
}

function add(task){
  return db("tasks").insert(task, "id")
    .then(([id]) => {
      return getById(id)
    })
}

module.exports = {
  add,
  get,
  getById,
  getByProjectId
}
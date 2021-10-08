const db = require("../../data/dbConfig")

const toBoolean = project => {
  if(project.project_completed === 0 || !project.project_completed){
    return {...project, 'project_completed': false}
  }else{
    return {...project, 'project_completed': true}
  }
}

async function get(){
  const tasks = await db("tasks")
  const taskList = tasks.map(t => {
    return toBoolean(t)
  })
  return taskList
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
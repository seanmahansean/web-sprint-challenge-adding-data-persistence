const db = require("../../data/dbConfig")

const toBoolean = task => {
  let list = {...task}
  if(task.task_completed === 0 || !task.task_completed){
    list = {...list, 'task_completed': false}
  }else{
    list = {...list, 'task_completed': true}
  }
  if(task.project_completed === 0 || !task.project_completed){
    list = {...list, "project_completed": false}
  }else{
    list = {...list, "project_completed": true}
  }
  return list
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
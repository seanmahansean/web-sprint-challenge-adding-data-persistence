const db = require("../../data/dbConfig")

const toBoolean = project => {
  if(project.project_completed === 0 || !project.project_completed){
    return {...project, 'project_completed': false}
  }else{
    return {...project, 'project_completed': true}
  }
}

async function get(){
  const projects = await db("projects")
  const projectList = projects.map(p => {
    return toBoolean(p)
  });
  return projectList
}

async function getById(project_id){
  const project = await db("projects").where({project_id}).first()
  return {...project, project_completed: Boolean(project.project_completed)}
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
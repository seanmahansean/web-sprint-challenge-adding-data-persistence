const router = require("express").Router()
const Project = require("./model")

router.get("/", (req, res, next) => {
  Project.get()
    .then(projects => {
      res.json(projects)
    })
    .catch(err => {
      next(err)
    })
})

router.get("/:id", (req, res, next) => {
  const {id} = req.params
  Project.getById(id)
    .then(project => {
      if(!project){
        res.status(404).json({message: "Project with that id does not exist"})
      }else{
        res.json(project)
      }
    })
    .catch(err => {
      next(err)
    })
})

router.post("/", (req, res, next) => {
  const project = req.body
  Project.add(project)
    .then(proj => {
      res.status(201).json(proj)
    })
    .catch(err => {
      next(err)
    })
})

router.use("*", (req, res, next) => { //eslint-disable-line
  res.json({message: "this router is working"})
})

module.exports = router
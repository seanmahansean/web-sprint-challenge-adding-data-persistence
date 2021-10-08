const router = require("express").Router()
const Task = require("./model")

router.get("/", (req, res, next) => {
  Task.get()
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      next(err)
    })
})

router.get("/:id", (req, res, next) => {
  const {id} = req.params
  Task.getById(id)
    .then(task => {
      if(!task){
        res.status(404).json({message: "task with that id does not exist"})
      }else{
        res.json(task)
      }
    })
    .catch(err => {
      next(err)
    })
})

router.post("/", (req, res, next) => {
  const task = req.body
  Task.add(task)
    .then(tsk => {
      res.status(201).json(tsk)
    })
    .catch(err => {
      next(err)
    })
})

router.use("*", (req, res, next) => { //eslint-disable-line
  res.json({message: "this router is working"})
})

module.exports = router
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
  console.log("placeholder")
})

router.post("/", (req, res, next) => {
  console.log("placeholder")
})

router.use("*", (req, res, next) => { //eslint-disable-line
  res.json({message: "this router is working"})
})

module.exports = router
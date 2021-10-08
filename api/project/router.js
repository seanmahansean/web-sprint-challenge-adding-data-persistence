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
  console.log("placeholder")
})

router.post("/", (req, res, next) => {
  console.log("placeholder")
})

router.use("*", (req, res, next) => { //eslint-disable-line
  res.json({message: "this router is working"})
})

module.exports = router
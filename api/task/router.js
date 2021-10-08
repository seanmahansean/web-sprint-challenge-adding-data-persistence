const router = require("express").Router()
const Task = require("./model")

router.get("/" (req, res, next) => {

})

router.get("/:id" (req, res, next) => {

})

router.post("/" (req, res, next) => {

})

router.use("*", (req, res, next) => { //eslint-disable-line
  res.json({message: "this router is working"})
})

module.exports = router
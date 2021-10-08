const router = require("express").Router()
const Resource = require("./model")

router.get("/", (req, res, next) => {
  Resource.get()
    .then(resources => {
      res.json(resources)
    })
    .catch(err => {
      next(err)
    })
})

router.get("/:id", (req, res, next) => {
  const {id} = req.params
  Resource.getById(id)
    .then(resource => {
      if(!resource){
        res.status(404).json({message: "Resource with that id does not exist"})
      }else{
        res.json(resource)
      }
    })
    .catch(err => {
      next(err)
    })
})

router.post("/", (req, res, next) => {
  const resource = req.body
  Resource.add(resource)
    .then(rsc => {
      res.status(201).json(rsc)
    })
    .catch(err => {
      next(err)
    })
})

router.use("*", (req, res, next) => { //eslint-disable-line
  res.json({message: "this router is working"})
})

module.exports = router
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const server = express()

const projectsRouter = require("./project/router")
const resourcesRouter = require("./resource/router")
const tasksRouter = require("./task/router")

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)

server.get("/", (req, res, next) => { //eslint-disable-line
  res.send({message: "Its live"})
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
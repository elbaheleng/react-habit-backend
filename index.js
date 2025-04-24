// import json-server

const jsonserver = require('json-server')

// create server
const habitTrackerServer = jsonserver.create()

// create a middleware to parse the json data
const middleware = jsonserver.defaults()

// path for the data to store
const routes = jsonserver.router('db.json')

habitTrackerServer.use(middleware)
habitTrackerServer.use(routes)

// server port
PORT = 4003 || process.env.PORT //deploy

// server run
habitTrackerServer.listen(PORT,()=>{
    console.log('server running successfully at port number',PORT);
    
})
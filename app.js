const http = require('http')
const menuFile = require('./menudetails')

const server = http.createServer(function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify(menuFile.menu))

})
server.listen(3000, function() {
    console.log("The server is serving on port 3000")
})
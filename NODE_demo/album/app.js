var http = require("http")
var url = require("url")
var path = require("path")
var router = require("./router.js")

var server = http.createServer(function(req,res) {

	var pathname = url.parse(req.url).pathname

  if(req.url == "/favicon.ico") {
    return
  m};

  if(req.url == "/") {
    router.showIndex(req,res,pathname)
  } else if (req.url == "admin.html" || "admin") {
    router.showAdmin(req,res,pathname)
  } else {
    router.showAlbum(req,res,pathname)
  }

})

server.listen(8888,"localhost")

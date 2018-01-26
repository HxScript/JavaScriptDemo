var http = require("http")
var fs = require("fs")
var url = require("url")

var server = http.createServer(function(req,res) {
	if (req.url == "/favicon.ico") {
		return
	}
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
	fs.readdir("./filetest/", function(err,files){
		var folder = [];

		(function iterator(i) {
			if(i == files.length) {
				console.log(folder)
				return
			}
			fs.stat("./filetest/" + files[i],function(err,stats){
				if (stats.isDirectory()) {
					console.log(files[i])
					folder.push(files[i])
				}

				iterator(i+1)	
			})
		})(0)
		
		res.end("ok?")
	})

})

server.listen(8888,"localhost")
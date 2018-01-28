var http = require("http")
var fs = require("fs")
var url = require("url")
var path = require("path")

var server = http.createServer(function(req,res) {
	if (req.url == "/favicon.ico") {
		return
	}

	var pathname = url.parse(req.url).pathname
	//设置默认路径
	if(pathname.indexOf("." == -1)) {
		pathname += "/index.html"
	}
	//设置拓展名
	var extname = path.extname(pathname)

	//获取扩展名的contenttype
	var contentType = function (extname) {
		fs.readFile("./mime.json", function(err,data) {
			if (err) {throw err} ;
			var type = JSON.parse(data)
			var key = type[extname]
			// console.log(key)
			return key
		})
	}




	fs.readFile("./static/" + pathname, function(err,data) {
		var ty = contentType(extname)
		console.log(ty)
		if (err) {
			fs.readFile("./static/404.html",function(err,data) {
				res.writeHead(404,{"Content-Type":ty + ";charset=UTF-8"})
				// console.log(contentType)
				res.end(data)
			})
			return;
		}
		res.writeHead(200,{"Content-Type":ty + ";charset=UTF-8"})
		// console.log(contentType)
		res.end(data)
	})




})

server.listen(8888,"localhost")

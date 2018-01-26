var http = require("http")
var fs = require("fs")
var url = require("url")




var server = http.createServer(function(req,res){
	if(req.url == "/favicon.ico") {
		return
	}
	var userid = parseInt(Math.random() * 999) + 100


	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
	console.log(`欢迎:${userid}`)
	fs.readFile("./test.txt",{"charset":"UTF-8"},function(err,data) {
		if(err) {
			throw err
		}
		console.log(`${userid} 用户读取完毕！`)
		res.end(data)

	})
})

server.listen(8888,"localhost")
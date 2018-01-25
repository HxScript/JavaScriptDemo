var http = require("http")
var url = require("url")
http.createServer(function(req,res) {
	var userurl = req.url
	res.writeHead(200,{"Content-type":"text/html;charset:UTF-8"})
	if (userurl.slice(0,9) == "/student/") {
		var stuId = userurl.slice(9)
		if (/^\d{10}$/.test(stuId)) {
			res.end(`你要查询的学生Id是：${stuId}`)
		} else {
			res.end(`你输入的学生Id有误！`)
		}
	} else if (userurl.slice(0,9) == "/teacher/") {
		var teacherId = userurl.slice(9)
		if(/^\d{6}$/.test(teacherId)) {
			res.end(`你要查询的教师Id是：${teacherId}`)
		} else {
			res.end(`你输入的教师Id有误！`)
		} 
	} else {
			res.end("你输入的ID有误！")
		}
	// res.end("duilee!")
}).listen(8877,"localhost")
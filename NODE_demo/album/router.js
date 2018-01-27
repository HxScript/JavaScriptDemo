// 2018-1-27 router.js
exports.showIndex = showIndex
exports.showAdmin = showAdmin
exports.showAlbum = showAlbum
var fs = require("fs")

function showIndex(req,res,pathname) {
  fs.readFile("./index.html", function(err,data) {
    if (err) {
      throw err;
    }
  res.writeHead(200, {"content-Type":"text/html;charset=UTF-8"})
  res.end(data)
  })
}

function showAdmin(req,res,pathname) {
  fs.readFile("./admin.html", function(err,data) {
    if (err) {
      throw err;
    }
  res.writeHead(200, {"content-Type":"text/html;charset=UTF-8"})
  res.end(data)
  })
}

function showAlbum(req,res,pathname) {

}

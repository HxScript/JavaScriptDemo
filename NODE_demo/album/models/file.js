var fs = require("fs")


exports.getAllAlbums = function(callback) {
  fs.readdir("./uploads", function(err,files) {
    if (err) {
      console.log("文件夹找到失败！")
    }
    var allAlbums = [];

    (function iterator(i) {
      if(i == files.length) {
        callback(allAlbums)
        return
      }
      fs.stat("./uploads/" + files[i], function(err,stats) {
        if (err) {
          console.log("文件夹找到失败！")
        }
        if (stats.isDirectory()) {
          allAlbums.push(files[i])
        }
        iterator(i + 1)

      })


    })(0)



  })
}

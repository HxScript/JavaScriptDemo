var fs = require("fs")

//得到所有相册名
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
          return
        }
        if (stats.isDirectory()) {
          allAlbums.push(files[i])
        }
        iterator(i + 1)
      })
    })(0)
  })
}

//得到文件夹内所有图片
exports.getAllImagesByAlbumName = function(albumName,callback) {
  fs.readdir("./uploads/"+albumName, function(err,files) {
    if (err) {
      console.log("1")
      callback("文件夹内照片找到失败！",null)
      return
    };
    var imagesArr = [];
    (function iterator(i) {
      if(i == files.length) {
        console.log("3")
        callback(null,imagesArr)
        return
      };
      fs.stat("./uploads/"+albumName +"/"+ files[i], function(err,stats) {
        // console.log(files[i])
        if (err) {
          callback("文件夹内照片找到失败！",null)
      console.log("2")
          return;
        }
        if (stats.isFile()) {
          imagesArr.push(files[i])
        }
        iterator(i + 1)
      })
    })(0)
  })
}

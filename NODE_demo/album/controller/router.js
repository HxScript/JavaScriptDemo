// Copyright (c) 2018 by HxScript. All Rights Reserved.
var file = require("../models/file.js")

exports.showIndex = function(req,res) {
  file.getAllAlbums(function(allAlbums) {
    res.render("index",{
      "albums":allAlbums
    })
  })
}



exports.showAlbum = function(req,res) {
  //遍历相册里所有图片
  var albumName = req.params.albumName
  // res.send("相册：" + albumName)
  file.getAllImagesByAlbumName(albumName, function(err,imagesArr) {
    console.log(imagesArr)
    if (err) {
      res.render("404")
    }
    res.render("album", {
      "albumName":albumName,
      "images":imagesArr
    })
  })
}

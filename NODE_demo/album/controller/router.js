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
  var albumName = req.params.albumName
  // res.send("相册：" + albumName)
  res.render("album",{
    "albumName":albumName,
    "images":["1.jpg","2.jpg","3.jpg"]
  })
}

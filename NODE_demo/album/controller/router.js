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
  res.send("相册：" + req.params.albumName)
}

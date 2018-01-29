// Copyright (c) 2018 by HxScript. All Rights Reserved.
exports.showIndex = function(req,res) {
  res.render("index",{
    "albums":["aa", "bb" ,"cc"]
  })
}

exports.showAlbum = function(req,res) {
  res.send("相册：" + req.params.albumName)
}

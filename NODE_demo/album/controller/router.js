// Copyright (c) 2018 by HxScript. All Rights Reserved.
var file = require("../models/file.js")
var formidable = require("formidable")
var util = require('util');

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


exports.uploadPhoto = function(req,res) {
  file.getAllAlbums(function(allAlbums) {
    res.render("form",{
      "albums":allAlbums
    })
  })
}

exports.doPost = function(req,res) {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      if(err){console.log(err)}
      res.end(util.inspect({fields: fields, files: files}));
    });
}

// Copyright (c) 2018 by HxScript. All Rights Reserved.
var file = require("../models/file.js")
var formidable = require("formidable")
var util = require('util');
var path = require("path")
var fs = require("fs")
var sd = require('silly-datetime');


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
    form.uploadDir = __dirname + "/../"+ "uploads/";
    form.parse(req, function(err, fields, files, next) {
      if(err) {
          next()
        return;
      }
      var randNum = parseInt(Math.random() * 899 +100)
      var newname = sd.format(new Date(), 'YYYYMMDDHHmmss')
      var extname = path.extname(files.photos.name)
      var oldpath = files.photos.path
      var newpath = form.uploadDir + fields.folder +"/" + newname + randNum + extname;
      // console.log(oldpath,newpath)
      fs.rename(oldpath, newpath, function(err) {
        if (err) {
          res.send("失败")
          return
        }
      })
      console.log(newpath)
      res.render("ok")
    });
}

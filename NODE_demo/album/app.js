// Copyright (c) 2018 by HxScript. All Rights Reserved.
var express = require("express")
var app = express()
var ejs = require("ejs")
var router = require("./controller/router.js")

//设置模板引擎
app.set("view engine","ejs")

// 提供静态服务
app.use('/static', express.static('public'));

app.get("/", router.showIndex)
app.get("/:albumName", router.showAlbum)
app.listen(3000)

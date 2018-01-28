// Copyright (c) 2018 by HxScript. All Rights Reserved.
var express = require("express")
var app = express()
var router = require("./controller/router.js")

//设置模板引擎
app.set("view emgine","ejs")

// 提供静态服务
app.use(express.static("./pubic"))
app.get("/",router.showIndex)

app.listen(3000)

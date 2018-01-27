var log = function() {
	return console.log.apply(console, arguments)
}

var e = function(selector) {
	return document.querySelector(selector)
}

var randcolor = function() {
	var colorArr = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#ecf0f1', '#f39c12', '#e74c3c', ]
	// 10 个数，应该取到0、1、2、3、4、5、6、7、8 ，并且取到每个数的概率相等。
	// log(colorArr, '输出了颜色')
	var tenRand = Math.random() * 13
	// log(tenRand, '生成了随机数')

	var index = parseInt(tenRand)
	// log(index, '随机数向下取了整')

	var color = colorArr[index]
	// log(color, '取到了颜色')
	return color 
}

//尝试给背景加一个随机颜色
var changecolorDom = document.querySelector(".rand-color")
var changecolor = function(dom) {
	dom.style.cssText = "background-color:" + randcolor() + ";" 
	// + "color:" + randcolor() + ";"
}
changecolor(changecolorDom);

//获取本地时间,并添加到box-times
var changeBoxtimes = function() {
	var timeMonth = e(".time-month")
	var timeDay = e(".time-day")
	var d = new Date()
	var month = d.getMonth() + 1
	var date = d.getDate()
	timeMonth.innerHTML = month + '月'
	timeDay.innerHTML = date + '日'
	log(timeDay)
}

changeBoxtimes();


// var ajax = function(method, path, headers, data, reseponseCallback) {
//     var r = new XMLHttpRequest()
//     // 设置请求方法和请求地址
//     r.open(method, path, true)
//     // 设置发送的数据的格式
//     r.setRequestHeader('Content-Type', 'application/json')
//     // 注册响应函数
//     r.onreadystatechange = function() {
//         if(r.readyState === 4) {
//             reseponseCallback(r)
//         }
//         // if (r.readyState === 4) {
//         //     console.log('state change', r, r.status, r.response)
//         //     var response = JSON.parse(r.response)
//         //     console.log('response', response)
//         // } else {
//         //     console.log('change')
//         // }
//     }
//     // 发送请求
//     r.send(data)
// }

// ajax('GET', 'https://sslapi.hitokoto.cn/?c=b', null, '', function(r){
//     console.log(r.status, r.response)
// })
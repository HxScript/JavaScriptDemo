var log = function() {
	return console.log.apply(console, arguments)
}



var randColour = function() {
	var colourArr = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#ecf0f1', '#f39c12', '#e74c3c', ]
	// 10 个数，应该取到0、1、2、3、4、5、6、7、8 ，并且取到每个数的概率相等。
	// log(colourArr, '输出了颜色')
	var tenRand = Math.random() * 13
	// log(tenRand, '生成了随机数')

	var index = parseInt(tenRand)
	// log(index, '随机数向下取了整')

	var colour = colourArr[index]
	// log(colour, '取到了颜色')
	return colour 
}

//尝试给背景加一个随机颜色
var changeColourDom = document.querySelector(".rand-colour")
var changeColour = function(dom) {
	dom.style.cssText = "background-color:" + randColour() + ";"
}
changeColour(changeColourDom);
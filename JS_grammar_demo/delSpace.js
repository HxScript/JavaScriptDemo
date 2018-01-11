var log = function() {
	return console.log.apply(console, arguments)
}


var delSpace = function(s){
	var result = []
	var j = 0
	for(i = 0; i<s.length; i++){
		if (s[i] == " ") {
			j = j +1
		} else {
			result.push(s[i])
		}
	}
	log(`delete ${j} spaces`)
	return result.join('')
}


log(delSpace('我国对含油污泥等废渣处理 的法规 尚有待完善 ，在处理技术上也和发达 国家有差距。 在充分吸收国外技术的基础上 ，结合 国情开发含油污泥脱水和处理的适用技术是当务之急。 要重视含油污泥的机械脱水 ，以及污泥的调质技术 ，寻找经济合理 的处理方法 '))

















// var delEnter = function(s) {
// 	var result = []
// 	var j = 0
// 	for(i = 0; i<s.length; i++){
// 		if (s[i] == "\n") {
// 			j = j +1
// 		} else {
// 			result.push(s[i])
// 		}
// 	}
// 	log(`delete ${j} spaces`)
// 	return result.join('')
// }

// var paperFormat = function(s) {

// }
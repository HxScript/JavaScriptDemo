// Title Case a Sentence
// 句中单词首字母大写

// 确保字符串的每个单词首字母都大写，其余部分小写。

// // 像'the'和'of'这样的连接符同理。
// var log = function() {
//     console.log.apply(console, arguments)
// }



// 思路:
// 先把整个字符串所有的字母变小写
// 再把单词首字母大写
// 	注意:单独的一个单词组成的字符串,不能直接处理,需要用另外一个变量保存处理过后的字符串
// 最后把单个单词连接.

var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
	var index = -1
	for (var i = s1.length - 1; i >= 0; i--) {
		if(s1[i] == s2) {
			index = i
			break
		}

	}
	return index
}
//无论大写还是小写一律输出小写
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowerCase = function(s) {
	//声明一个空字符串,作为结果
	var result = ""
	//查找这个字符串中所有的大写字符的数组下标
	for (var i = 0; i < s.length; i++) {
		// if(upper.indexOf(s[i]) >= 0 )  {
		// 	var j = find(upper, s[i])
		// 	//由该下标找对应的小写字符
		// 	result += lower[j]
		// 有更高级的写法，用到之前定义的index = -1
		var index = find(upper, s[i])
		if (index > -1) {
			result += lower[index]
		} else {
			result += s[i]
		}

	}
	return result
}

var upperTit = function(word) {
	var index = find(lower, word[0])
	var newWord = ''
	// log(index)
	if (index >-1) {
		newWord = upper[index] + word.slice(1)
	} else {
		newWord = word
	}
	// log (word)
	return newWord
}




var titleCase = function(s) {
	// 这里又有一个坑,就是字符串不会被改变
	// 要用一个新字符串去存储,这里的upperTit就是在做这个事情
	var arr = s.split(' ')
	var titleArr =''
	for (var i = 0; i < arr.length; i++) {
		arr[i] = lowerCase(arr[i])
		arr[i] = upperTit(arr[i])
		// log(arr[i])
		titleArr = titleArr + ' ' + arr[i]
	}
	return titleArr.slice(1)
}

titleCase("I'm a little tea pot")


//2018-1-14
//some function about dispose string.


// try 出 error后，（老牌opera浏览器会遇到的问题），再error后，最后的降级。 直接用alert。  （《js忍者秘籍》） 2018-2-21
var log = function() {
	try {
	return console.log.apply(console, arguments)
	}
	catch(e) {
		return opera.postError.apply(opera, arguments)
	}
	catch(e) {
		alert(Array.prototype.join.call(arguments, " "))
	}
}
// 即assert(condition, message) 函数   （《js忍者秘籍》） 2018-2-21
var ensure = function(condition, message) {
	if (!condition) {
		log('*** 测试失败:', message)
	}
}

//作业1
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

var test_find = function() {
	s1 = 'woshizuiniubide!'
	s2 = 'b'
	// ensure(find(s1, s2) == 11, 'find()==11 wrong')
	// ensure(find(s1, s2) == 12, 'find()==12 wrong')
}

//以后可以考虑添加功能。由用户输入s1，s2



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

// log(lowerCase('abcABC'))
// log(lowerCase('aADAVSASDVSAbcABZXVVasfdsafadfsafC'))
var uppercase1 = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(lower, s[i])
        // 看看是否找到了
        if (index > -1) {
            result += upper[index]
        } else {
            // 没找到说明这个字符是大写字符, 直接添加
            result += s[i]
        }
    }
    return result
}





/*
凯撒加密
将一个字符串整体移位.
eg. abg->bch
且其他字符保持不变.
*/

// 思路:
// 遍历字符串中的每个字符,分别将他们移位.


//移位单个字符
var shiftedChar = function(character, n) {
    var lower = 'abcdefghijklmnopqrstuvwxyz'
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var index = find(upper, character)
    if (index > -1) {
    	// 大写字母
    	var newIndex = (index + n + 26) % 26
    	// log('upper character', index, character)
    	return upper[newIndex]
    } else {
    	//小写字母
    	index = find(lower, character)
    	if (index > -1) {
    		var newIndex = (index + n +26) % 26
    		// log('lower character', index, character)
    		return lower[newIndex]
   		} else {
    	//不是字母
    	return character
    	}
    }

}

//遍历
var encode = function(s, n) {
	var result = ''
	for (var i = 0; i < s.length; i++) {
		var sus = shiftedChar(s[i],n)
		// //.join()是数组拼接,字符串的拼接应该:
		// // 1.用.concat()函数
		// // 2.直接连接.
		// // 3.转成数组,再用.join()
		// result = result.concat(sus)
		// log(result)
		result += sus
	}
	return result
}

// log(encode('afasgasfAFASDFASF',0))
// log(encode('a123213sgasfAFASDFASF',1))


var decode = function(s, n) {
		var result = ''
	for (var i = 0; i < s.length; i++) {
		var sus = shiftedChar(s[i],-n)
		result += sus
	}
	return result
}


// log(decode('afasgasfAFASDFASF',0))
// log(decode('a123213sgasfAFASDFASF',1))


//用凯撒加密函数解决知乎上的问题:
//https://www.zhihu.com/question/28324597
//密码正文：

//VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX

//由于不知道n是几,所以决定遍历1-26.

var encodeTHEFFFF = function(s) {
	var outPutFFFF = ''
	for (var i = 1; i <= 26; i++) {
		outPutFFFF = encode(s,i)
		log(outPutFFFF)
	}
}

encodeTHEFFFF('VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX')



// 跳坑: for()中的i要用var 来声明
// 2018-1-14
var log = function() {
    console.log.apply(console, arguments)
}


// 找出最长单词

// 在句子中找出最长的单词，并返回它的长度。

// 函数的返回值应该是一个数字。

function findLongestWord(str) {
	// 将字符串 切片 转成数组
	// 遍历数组, 查询数组中 最长的单词
	// 返回该单词的长度
	var arr = []
	arr = str.split(' ')
	log(arr)
	var len = arr[0].length
	for (i = 1; i < arr.length; i++) {
		if (len <= arr[i].length) {
			len = arr[i].length
		}
		log(len)
	}
  return len;
}

findLongestWord('asfasf asfadsf sdafasdf')
findLongestWord("The quick brown fox jumped over the lazy dog");
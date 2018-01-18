function destroyer(arr) {
	var behindArr =[]
	for(var i = 1;i <= arguments.length; i++) {
		behindArr.push(arguments[i])
	}
	// console.log(behindArr)
	var newarr = []
	newarr = arr.filter(function(value) {
			// value是 第一个数组中被遍历的值  arr[i] 是 后面的数
		for(var i = 0; i < behindArr.length; i++) {
			// console.log(value)
			// console.log(behindArr[i])
			if(behindArr[i] == value) {
				// console.log('true')
				return false
			} else {
				// console.log('continue')
				continue
			}
		}
		return true
	})
	return newarr
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3) //应该返回 [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //应该返回 [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) //应该返回 [1].
destroyer([2, 3, 2, 3], 2, 3) //应该返回 [].
destroyer(["tree", "hamburger", 53], "tree", 53) //应该返回 ["hamburger"].
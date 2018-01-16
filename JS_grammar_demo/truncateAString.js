// Truncate a string
// 截断字符串
// （用瑞兹来截断对面的退路）
// 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。
// 切记，插入到字符串尾部的三个点号也会计入字符串的长度。
// 但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
// 2018-1-16


function truncate(str, num) {
	if (num <= 3) {
		return str.slice(0,num) + '...'
	} else if (num >= str.length) {
		return str
	} else {
		return str.slice(0,num - 3) + '...'
	}

}


truncate("A-tisket a-tasket A green and yellow basket", 11) //应该返回 "A-tisket...".
truncate("Peter Piper picked a peck of pickled peppers", 14) //应该返回 "Peter Piper...".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) //应该返回 "A-tisket a-tasket A green and yellow basket".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) //应该返回 "A-tisket a-tasket A green and yellow basket".
truncate("A-", 1) //应该返回 "A...".
truncate("Absolutely Longer", 2) //应该返回 "Ab...".
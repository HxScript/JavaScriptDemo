// Check for Palindromes
// 检查回文字符串
// 如果给定的字符串是回文，返回true，反之，返回false。
// 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。
// 注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。
// 函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。
// 算是踩的一个坑吧。js里数组判断相等不能直接用==或===。
// 这个题可以用一个瓜皮的办法，转成字符串。。。。
// 2018-1-12

var log = function() {
	 return console.log.apply(console, arguments)
}


function palindrome(str) {
  // 请把你的代码写在这里
    str = str.toLowerCase()
    //replace()接受的第一个参数应该是一个正则，但正则实在是太狗屎啦，就写了三个函数。
    //str = str.replace(/,|\s|\./g, '')
    //后来发现，题目只允许匹配数字字母。于是换用match（得到的是数组）+join
    str = str.match(/[0-9]|[a-z]/g).join('')
    log(str)
    var palArr = str.split('')
    var before = JSON.stringify(palArr)
    var after = JSON.stringify(palArr.reverse())
    if (before == after) 
      {
        return true
      }
      else {
        return false
      }
}

palindrome("not a palindrome") 
palindrome("eye");
palindrome("A man, a plan, a canal. Panama")
palindrome("nope")

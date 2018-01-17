function mutation(arr) {
  // 请把你的代码写在这里
  var find = function(s1, s2) {
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
      //  var j = find(upper, s[i])
      //  //由该下标找对应的小写字符
      //  result += lower[j]
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


// 原来实际上是有string的内置函数：ToLowerCase()和ToUpCase()
  var lowa = lowerCase(arr[0])
  // console.log(lowa)
  var lowb = lowerCase(arr[1])
  // console.log(lowb)
  var a = ''
  var b = ''
  if (lowa.length >= lowb.length) {
    a = lowa
    b = lowb
  } else {
    b = lowa
    a = lowb
  }
  // console.log(a)
  // console.log(b)
    
    for (var i = 0; i < b.length; i++) {
      if (a.indexOf(b[i]) == -1) {
        return false
      } else {
        continue
      }
    }


  return true;
}

mutation(["hello", "Hello"])
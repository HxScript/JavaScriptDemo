//写一个process函数
var process = function(arr, processor) {
	var ar = []
	for (var i = arr.length - 1; i >= 0; i--) {
		// processor是一个函数
			ar[i] = processor(arr[i])
		}	
	return ar
}
var a1=[1.1,3,4,4,4,4,4,5.5]
var a2 = [1.1, 2.2, 3.3]
var test1 = process(arr=a1, String)
var test2 = process(arr=a2, String)
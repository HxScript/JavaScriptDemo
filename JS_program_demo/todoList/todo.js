//写一个log函数用于测试
var log = function() {
	console.log.apply(console, arguments)
}

//写一个类似jq的选择器
var e = function(selector){
	return document.querySelector(selector)
}



//给add button绑定事件
var addButton = e('#id-button-add')
addButton.addEventListener('click', function(){
	//获取input.value
	var todoInput = e('#id-input-todo')
	var todo = todoInput.value
	//把todo添加到container中
	var todoContainer = e('#id-div-container')
	var t = templateTodo(todo)
	//insertAdjacentHTML(where, text) 
	//第二个参数text即html文本，如<li></li>
	//第一个参数可选值：
	// beforebegin 标签开始前
	//(奇葩的要注意大小写，第二个单词开始大写还是小写？网上两种版本！)
	// afterbegin 标签开始后
	// beforeend 标签结束前
	// afterend 标签结束后
	todoContainer.insertAdjacentHTML('beforeend', t)
	//存储localStorage
	todoSave()
})


// 开始载入localStorage中的内容
var insertTodo = function(todoContent, todoStatus){
	var todoContainer = e('#id-div-container')
	var t = templateInsertTodo(todoContent, todoStatus)
	todoContainer.insertAdjacentHTML('beforeend', t)
}

// 开始载入localStorage中的状态
// var insertStatus = function(todo){
// 	var Status = 
// }


//构建模板函数1
var templateTodo = function(todo) {
	//获取时间
	var now = function(){
		var d = new Date()
		var year = d.getFullYear()
		var month = d.getMonth() + 1
		var date = d.getDate()
		var hour = d.getHours()
		var mm = d.getMinutes()
		var sec = d.getSeconds()

		return `${year}/${month}/${date} ${hour}:${mm}:${sec}`
	}


	//这里用到了es6的新特性，模板字符串！ 
	var t = `
			<div class="todo-cell">
				<button class="btn btn-alr">完成</button>
				<button class="btn btn-del">删除</button>
				<ul class="todo-content in-blk in-center">
					<li class="in-blk task">${todo}</li>
					<li class="in-blk time">${now()}</li>
				</ul>
			</div>	
			`	
	return t
}

//构建模板函数2
var templateInsertTodo = function(todoContent, todoStatus) {
	var status = ''
	if (todoStatus) {
		status = 'done'
	}
	log('if status?', status)
	var t = 
	`
			<div class="todo-cell ${status}">
				<button class="btn btn-alr">完成</button>
				<button class="btn btn-del">删除</button>
				<ul class="todo-content in-blk in-center">
					${todoContent}
				</ul>
			</div>		
	`
	return t
}


 
//给container两个button添加事件委托，完成删除和完成功能
var todoContainer = e('#id-div-container')
todoContainer.addEventListener('click', function(event){
	//event.target 返回的是dom，也就是具体的某个html标签
	// log('container click',event, event.target)
	var target = event.target
	if (target.classList.contains('btn-alr')) {
		// log('done')
		//给todo div 开关一个状态class
		//parentElement是div todo-cell
		var todoDiv = target.parentElement
		toggleClass(todoDiv, 'done')

	} else if (target.classList.contains('btn-del')) {
		// log('delete')
		var todoDiv = target.parentElement
		todoDiv.remove()

	}
	todoSave()

})

// 检查某个元素是否拥有某个class，有之删，无之加
var toggleClass = function(element, className){
	if (element.classList.contains(className)) {
		element.classList.remove(className)
	} else {
		element.classList.add(className)
	}
}

//字符串序列化
var save = function(array) {
	var s = JSON.stringify(array)
	localStorage.todos = s
}
//字符串反序列化
var load = function() {
	var s = localStorage.todos
	return JSON.parse(s)
}


var todoSave = function() {
	var c = document.querySelectorAll('.todo-content')
	var todos = []
	for (var i = c.length - 1; i >= 0; i--) {
		//tudo要保存内容和状态。
		var todo={
		done : c[i].parentElement.classList.contains('done'),
		content : c[i].innerHTML,
		}
		todos.push(todo)
	log('save success', todos)
	}

	save(todos)
} 

var todoLoad = function() {
	var todos = load()
	for (var i = todos.length - 1; i >= 0; i--) {
		var todoContent = todos[i].content
		var todoStatus = todos[i].done
		insertTodo(todoContent, todoStatus)
	}

}




//开局就应该load！没毛病！
todoLoad()
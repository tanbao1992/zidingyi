function Alert(msg,action){
	
	this.message = msg;
	this.show()
	this.action = action
}

// 显示提示的蒙板
Alert.prototype.showMask = function(){
	
	var mask = document.createElement('div')
	
	document.body.appendChild(mask)
	mask.className = 'modal-mask'
	
}

// 显示提示框的主体部分
Alert.prototype.showBody = function(){
	
	// 创建弹出框的主体
	var container = document.createElement('div')
	
	document.body.appendChild(container)
	
	container.className = 'modal-container'
	
	// 弹出框的信息栏
	var msg = document.createElement('div')
	msg.className = 'modal-message'
	container.appendChild(msg)
	msg.innerHTML = this.message
	// 弹出框的点击按钮
	var btn = document.createElement('div')
	container.appendChild(btn)
	btn.innerHTML = '确定'
	btn.className = 'modal-button'
	btn.onclick = this.buttonClick.bind(this)
	
}
Alert.prototype.buttonClick = function(){
	
	var container = document.querySelector('.modal-container')
	var mask = document.querySelector('.modal-mask')
//	that.style.color = 'red'
	// 这两种方式等价的
//	document.body.removeChild(container)
	container.remove()
	mask.remove()
	
	this.action()
}
Alert.prototype.show = function(){
	
	this.showMask()
	this.showBody()
}



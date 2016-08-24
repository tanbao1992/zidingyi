function Confirm(msg,action){
	
	this.message = msg;
	this.show()
	this.action = action
}

Confirm.prototype = Object.create(Alert.prototype)
Confirm.prototype.constructor = confirm

// 重写showBody方法
Confirm.prototype.showBody = function(){
	
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
	var sureBtn = document.createElement('div')
	var cancleBtn = document.createElement('div')
	
	container.appendChild(sureBtn)
	container.appendChild(cancleBtn)
	
	sureBtn.innerHTML = '确定'
	cancleBtn.innerHTML = '取消'
	
	sureBtn.className = 'modal-sureButton'
	cancleBtn.className = 'modal-cancleButton'
	//绑定按钮
	cancleBtn.onclick = this.cancleButtonClick.bind(this)
	sureBtn.onclick = this.sureButtonClick.bind(this)
}

Confirm.prototype.cancleButtonClick = function(){
	
	var container = document.querySelector('.modal-container')
	var mask = document.querySelector('.modal-mask')
//	document.body.removeChild(container)
	container.remove()
	mask.remove()
	
}
Confirm.prototype.sureButtonClick = function(){
	
	var container = document.querySelector('.modal-container')
	var mask = document.querySelector('.modal-mask')
//	document.body.removeChild(container)
	container.remove()
	mask.remove()
	this.action()
}




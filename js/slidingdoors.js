window.onload = function(){
	var box = document.getElementById('container');
	var imgs = box.getElementsByTagName('img');
	var imgWidth = imgs[0].offsetWidth;
	var exposeWidth = 160;
	var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
	box.style.width = boxWidth + 'px'; //要记得加上单位px
	//每道门的初始位置
	function setImagesPos(){
	for (var i = 1, len = imgs.length; i < len; i++){
		imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
	}
	setImagesPos();
	//每道门开门移动的距离
	var translate = imgWidth - exposeWidth;
	for (var i = 0,len = imgs.length; i < len; i++){
		(function(i){
			imgs[i].onmouseover = function(){
				//每道门复位
				setImagesPos();
				//打开门
				for (var j = 1; j <= i; j++){
					imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + 'px';
					
				};
			};
		})(i);
	}
};

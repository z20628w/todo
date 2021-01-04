$(function(){
	
	
	$(window).scroll(function(){
		var Top = $(window).scrollTop()
		// 显示隐藏导航栏
			if($(window).width()>991){
			var Top = $(window).scrollTop()
			if(Top >= 100){
			$('.DW1').slideDown()
		}else{
			$('.DW1').slideUp()
		}
		}
		
		
		// 显示返回顶部按钮
		if(Top >=400){
			$('.butt').show()
		}else{
			$('.butt').hide()
		}
		
	})
	// 给返回顶部按钮设置点击事件
	$('.butt').on('click',function(){
		var time = setInterval(function(){
			document.documentElement.scrollTop-=50
			if($(window).scrollTop()<=0){
				$(window).scrollTop(0)
				clearInterval(time)
			}
		},10)
	})
	
	// 给首页按钮绑定点击事件
	$('.sy').on('click',function(){
		$('div.Dw2>div.row').slideToggle()
	})
	
	
})
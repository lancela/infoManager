// index.js
// 点左出右
$(function(){
	
	$('.info-content').load('./pages/categoty.html');
	$('.info-left li').click(function(){
		// this -->DOM
		var title = $(this).text().trim();
		console.log(title);
		switch (title){
		case '首页' : $('.info-content').load('./pages/home.html');
			break;
		case '栏目管理' : $('.info-content').load('./pages/categoty.html');
			break;
		case '咨询管理' : $('.info-content').load('./pages/info.html');
			break;
		case '用户管理' : $('.info-content').load('./pages/user.html');
			break;

	}
	});
	
});
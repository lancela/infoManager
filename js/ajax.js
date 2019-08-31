// ajax.js的封装
function getAjax(url,method,data,successFun,errorFun){
	var baseURL = 'http://134.175.154.93:8099';
	$.ajax({
		url:baseURL+url,
		method:method,
		data:data,
		success:successFun,
		error:errorFun,
		// async:false
	});
}
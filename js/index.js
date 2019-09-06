$(function(){
	// 为栏目绑定事件

	$("ul.left_nav").on("click","li",function(){
		var url = $(this).attr("url");
		$("#wrapper").load(url)
	})
});
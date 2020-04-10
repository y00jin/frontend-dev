var tabBox = {
	_onTabClicked : function() {
		var index = $('li').index(this);
		$('.tab-box ul li').removeClass('selected');
		$(this).addClass('selected');
		$('strong').text('메뉴' + (index+1) +'입니다.');
	},
	init : function() {
		$(function() {
			$('.tab-box ul li').click(tabBox._onTabClicked);
		});
	}
}
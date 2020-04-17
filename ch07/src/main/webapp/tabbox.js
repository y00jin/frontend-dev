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

/*
//jQuery 버젼
var TabBox = {
	init: function(){
		$(this._init);		
	},	
	_init: function(){
		$('.tab-box li').click(TabBox._changeTab);
		TabBox._changeTab();
	},
	_changeTab: function(){
		$('.tab-box li.selected').removeClass('selected');
		
		var $liTab = (this == TabBox) ?	$('.tab-box li:first-child') : $(this);
		$('.tab-box div').text($liTab.data('no') + "의 탭뷰입니다.");
		$liTab.addClass('selected');
	}	
}
*/
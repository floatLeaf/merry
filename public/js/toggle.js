($)(function(){
	//选择商品品类
	$('.category_ul li').click(function(){
		$('.category_ul li').removeClass('active');
		$(this).addClass('active');
	})

	//添加商品信息
	$('.tab_cont_1_btn').click(function(){
		$('.tabs .tab_item').eq(1).click();
	});

	$('.tabs .tab_item').click(function(){
		$('input[name="category"]').val($('.category_ul li.active').text());
		if($('input[name="category"]').val() == ""){
			return;
		}
		var index = $(this).index();
		$('.tabs .tab_item').removeClass('active');
		$(this).addClass('active');
		$(this).parent().next('.tab_cont').find('.cont').addClass('hide');
		$(this).parent().next('.tab_cont').find('.cont').eq(index).removeClass('hide');
	})

	//统一规格与多规格之间切换
	$('input[name="format"]').change(function(){
		var format_1 = $('.format_tem .format_1').html();
		var format_2 = $('.format_tem .format_2').html();
		var _this = $(this);
		if(_this.val() == 0){
			$('.format').html("").hide();
			$('.format.format_1').show().html(format_1);
		}else{
			$('.format').html("").hide();
			$('.format.format_2').show().html(format_2);;
		}
	})
})


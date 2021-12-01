// 乐购商城首页
// 2021/10/31by张邹欣
// 当前页面加载完毕
$(function(){
				$('#banner').tyslide({
				boxh:465,//盒子的高度
				w:1000,//盒子的宽度
				h:400,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:20,//控制按钮高度
				radius:15,//控制按钮圆角度数
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
				isShowNum:true //是否显示数字
			});

			// 图书电子书小轮播
			$('#ebooks-banner').tyslide({
				boxh:223,//盒子的高度
				w:332,//盒子的宽度
				h:223,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:2,//控制按钮高度
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
				
			});

			// 电子书table切换
			var $lis =$('.ebooks .ebooks-nav > li');
			$lis.mouseover(function() {
				// 给自己添加激活类active 把兄弟都干掉
				$(this).addClass('active').siblings().removeClass('active');
				// 获取index
				var index = $(this).index();

				// 选中内容
				var $ebooksList = $('.ebooks-list');
				// 显示索引等于当前index
				$ebooksList.eq(index).show().siblings('.ebooks-list').hide();
			})


			// 新书列表手风琴效果
            $('.ebooks .right-box ul > li').mouseenter(function(){
				//所有兄弟：隐藏详情，显示标题
				$(this).siblings().find('.desc').hide();
				$(this).siblings().find('.ebooks-title').show();
				//当前：隐藏标题，显示详情
				$(this).find('.ebooks-title').hide();
				$(this) .find('.desc').show();
			})
			
			// 衣服轮播
			$('#clothes').tyslide({
				boxh: 340, //轮播的高度
				w: 420, //图片宽度
				h: 340, //图片高度
				isShow: true, //是否显示控制按钮
				isShowBtn: true, //是否显示左右按钮
				controltop: 10, //控制器按钮上下偏移距离 
				controlsW: 20, //控制按钮宽度
				controlsH: 2, //控制按钮高度
				//radius: 10, //圆角度数
				controlsColor: "#ff6600", //普通控制按钮的颜色
				controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
				isShowNum: true //是否显示数字
			})


			// 体育用品轮播
		$('#sport').tyslide({
				boxh: 340, //轮播的高度
				w: 420, //图片宽度
				h: 340, //图片高度
				isShow: true, //是否显示控制按钮
				isShowBtn: true, //是否显示左右按钮
				controltop: 10, //控制器按钮上下偏移距离 
				controlsW: 20, //控制按钮宽度
				controlsH: 2, //控制按钮高度
				//radius: 10, //圆角度数
				controlsColor: "#ff6600", //普通控制按钮的颜色
				controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
				isShowNum: true //是否显示数字
			})


			// 童装轮播
		$('#children-clothes').tyslide({
				boxh: 340, //轮播的高度
				w: 420, //图片宽度
				h: 340, //图片高度
				isShow: true, //是否显示控制按钮
				isShowBtn: true, //是否显示左右按钮
				controltop: 10, //控制器按钮上下偏移距离 
				controlsW: 20, //控制按钮宽度
				controlsH: 2, //控制按钮高度
				//radius: 10, //圆角度数
				controlsColor: "#ff6600", //普通控制按钮的颜色
				controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
				isShowNum: true //是否显示数字
			})

			// 推荐用品滑动
		$('#active>li').mouseenter(function() {
				$(this).css('backgroundColor', '#ccc').siblings().css('backgroundColor', '#ff6700');
				let index = $(this).index();
				$('.out-box>.inner-box').animate({
					//'left': -index * 1170 //左右滑动
					'top': -index * 600 //上下滑动
				}, 1000)
			})


			//推荐用品提示用户此页为第一页，以此好提示用户不去触发第一个li标签
		var list = $('.out-box>.inner-box');
		if (list.css('top') == '0px') {
			$('#active>li').eq(0).css('backgroundColor', '#ccc')
		}
	
		

	})
	
// 乐购商城首页
// 2021/10/31by张邹欣
// 当前页面加载完毕
$(function(){
				$('#bannerInner').tyslide({
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
})
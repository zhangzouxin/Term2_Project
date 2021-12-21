$(function () {
    $(".ez-banner").tyslide({
        boxh:500,//盒子的高度
        w:1200,//盒子的宽度
        h:420,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:20,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:false //是否显示数字
    });

    /*轮播切换*/
    //默认后面两个轮播隐藏
    $('.ez-banner:gt(0)').hide();
    //给导航绑定点击事件
    $('.ez-title ul li').on('mouseenter',function(){
        //导航切换效果
        $(this).addClass('active').siblings().removeClass('active')
        //获取索引
        var index = $(this).index();

        //显示对应内容
        $('.ez-banner').eq(index).show().siblings().hide();
    })



    // 换一批
    //上下滑动
    // var index = 0;
    // $('.change').click(function() {
    //     index++;

    //     index = index > 2 ? 0 : index;
    //     $('.inner-box').animate({
    //         top:-index * 500
    //     })
    // })
    // 换一批
    //左右滑动
    var index = 0;
    $('.change').click(function() {
        index++;
        //边界判断
        $('.inner-box').stop(true).animate({left: -index * 1200}, function(){
            if(index === 3){
                index = 0;
                $('.inner-box').css('left',0);
            }
        })
    })
})
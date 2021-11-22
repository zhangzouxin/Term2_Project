// 返回顶部功能
$(function() {
    window.gotoTop = function(options) {
       var defaults = {
           bottom:'100px'
       }
       var params = $.extend({},defaults, options)

        var $gotoTopHtml = $(`<div class="backToTop">
        <img src="${options.imgUrl}" alt="">
        </div>`);
//样式
        $gotoTopHtml.css({
            width: '30px',
	        height: '50px',
	        backgroundcolor:'red',
	        /* 定位 */
	        position: 'fixed',
	        bottom: options.bottom,
	       left: '610px',
	        marginleft: '50%',
	        /* 默认隐藏 */
	        display: 'none',
        });
        //返回顶部js 代码
        $(document).scroll(function(){
            var topDistance = $('html,body').scrollTop();
            if (topDistance > 500) {
                $('.backToTop').fadeIn();
            }else{
                $('.backToTop').fadeOut();
            }
        })
        $('body').on('click','.backToTop',function () {
            $('html,body').animate({
                scrollTop:0
            },300)
        })


        $('body').append($gotoTopHtml)
    }
})

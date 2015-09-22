/**
 * Created by Administrator on 2015/9/12.
 */
$(document).ready(function(){
    //调整首页区块高度
    $(".content1").css("height",$(window).height());
    $(window).resize(function(){
        $(".content1").css("height",$(window).height());
    });
    //转换区块2的图片为背景
    $(".content2-images img").load(function() {
        $(this).wrap(function(){
            return '<span class="content2-image-wrap" ' +
                'style="background:url(' + $(this).attr('src') + ') no-repeat center center;' +
                'width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />';
        });
        $(this).css("opacity","0");
    });
    //区块四的图片标题显示
    $(".content4 ul li .rsp").hide();
    $(".content4 ul li").hover(function(){
        $(this).find(".text").stop().animate({top:"0"}, 500)},
        function(){
        $(this).find(".text").stop().animate({top:"-200px"},500);
    });
})

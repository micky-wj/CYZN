/**
 * Created by Administrator on 2015/9/14.
 */
$(document).ready(function() {
    //调整main高度
    $(".description").hide();
    $(".main .route").hover(
        function(){
            $(this).children(".description").stop().fadeIn(500);
            $(this).children("div").children("img").stop().animate({"height":"200px","width":"200px"},500);
            $(this).siblings().css({"background":"black","box-shadow":"none"});
            $(this).css({"box-shadow":"0 0 100px #130c0e"})
            $(this).children("span").css({"display":"block"});
            $(this).children(".title").children("span").hide();
        },function(){
            $(this).children(".description").stop().fadeOut(500);
            $(this).children("div").children("img").stop().animate({"height":"300px","width":"300px"},500);
            $(this).siblings().css({"opacity":"1","background":"white","box-shadow":"3px 3px 11px #130c0e"});
            $(this).css({"box-shadow":"3px 3px 11px #130c0e"});
            $(this).children("span").css({"display":"none"});
            $(this).children(".title").children("span").show();
        }
    );
})
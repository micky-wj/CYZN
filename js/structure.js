/**
 * Created by Administrator on 2015/9/11.
 */
$(document).ready(function(){
    //导航条滚动压缩
    $(window).scroll(function () {
        if($(window).scrollTop()> 0){
            $("#cyzn-head-fixed").css({"height":"38px",
                    "filter":"alpha(opacity=75)",
                    "-moz-opacity":"0.75",
                    "opacity": "0.75"});
            $("#cyzn-head-wrap").css({"line-height":"38px"});
            $("#cyzn-head-wrap>div").css({"height":"28px","bottom":"14px"});
            $("#cyzn-head-logo").css("bottom","7px");
            $("#cyzn-head-logo img").css("height","28px");
            $("#cyzn-head-nav li a").css({"height":"38px","font-size":"13px"});
            $("#cyzn-head-search").css("margin-left","235px");
        }else{
            $("#cyzn-head-fixed").css({"height":"38px",
                "filter":"alpha(opacity=100)",
                "-moz-opacity":"1",
                "opacity": "1"});
            $("#cyzn-head-fixed").css("height","58px");
            $("#cyzn-head-wrap").css({"line-height":"58px"});
            $("#cyzn-head-wrap>div").css({"height":"48px","bottom":"19px"});
            $("#cyzn-head-logo img").css("height","48px");
            $("#cyzn-head-nav li a").css({"height":"58px","font-size":"17px"});
            $("#cyzn-head-search").css("margin-left","120px");
        }
        if($(window).scrollLeft()> 0){
            $("#cyzn-head-fixed").css("left","-"+$(window).scrollLeft()+"px");
        }else{
            $("#cyzn-head-fixed").css("left","0");
        }}
    );
    //导航条移入移出透明度变化
    $("#cyzn-head-fixed").hover(function(){
        $("#cyzn-head-fixed").css({
            "filter":"alpha(opacity=100)",
            "-moz-opacity":"1",
            "opacity": "1"});
    }, function(){
        if($(window).scrollTop()>0){
            $("#cyzn-head-fixed").css({
                "filter":"alpha(opacity=75)",
                "-moz-opacity":"0.75",
                "opacity": "0.75"});
            console.log($("#cyzn-head-fixed").css("opacity"));
        }});
})

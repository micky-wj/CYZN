/**
 * Created by Administrator on 2015/9/14.
 */
$(document).ready(function(){
    //轮播图点击更换图片
    var n=$(".banner li.on").index();
    var count=$(".banner-list img").length;
    $(".banner-list img:not(:first-child)").hide();
    $(".banner-info").html($(".banner-list img:first-child").attr("alt"));
    $(".banner li").click(function() {
        var i = $(this).index();
        n = i;
        if (i >= count) return;
        $(".banner-info").html($(".banner-list img").eq(i).attr("alt"));
        $(".banner-list img").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
        $(".banner-bg").animate({left:"-250px"}, 500).animate({left:"0"},1000);
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });
    //轮播图自动切换
    var t = setInterval(showAuto, 4000);
    $(".banner").hover(function(){clearInterval(t)},
        function(){t = setInterval(showAuto, 4000);});
    function showAuto()
    {
        n = n >=(count -1) ?0 : ++n;
        $(".banner li").eq(n).trigger("click");
    }
    console.log(t);
    //content1图片特效
    $('.img-holder').hover(function(){
        $(this).removeClass('.notactive');
        $('.notactive').stop().animate({'width':'290px'},400);
        $(this).find('img').stop().animate({'top':'-80px'},400);
        $(this).stop().animate({'width':'380px'},400);
        $(this).find('span').css({'background-color':'#000'});
        $(this).find('.text').fadeIn(300);
    },function(){
        $('.notactive').stop().animate({'width':'320px'},400);
        $(this).addClass('.notactive');
        $(this).find('.text').hide();
        $(this).find('img').stop().animate({'top':'0px'},500);
        $(this).stop().animate({'width':'320px'},400);
        $(this).find('span').css({'background-color':'#333'});
    });
    //景点类型切换
    var typeOn,type;
    var typeLength=$(".content1-images .images").length;
    $(".content1-images .images:not(:first-child)").hide();
    $(".content1 .header li").click(function() {
        type = $(this).index();
        typeOn=$(".content1 .header li.on").index();
        if (type >= typeLength||type==typeOn) return;
        if(type>typeOn){
            $(".content1-images").children().eq(typeOn).stop().animate({left:"-962px"}, 500).parent().children().eq(type).show().animate({left:"982px"},0).animate({left:"0px"},500);
        }else{
            $(".content1-images").children().eq(typeOn).stop().animate({left:"982px"}, 500).parent().children().eq(type).show().animate({left:"-962px"},0).animate({left:"0px"},500);
        }
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
        typeOn=type;
    });
    //景点列表切换
    var listOn,list;
    var listLength=$(".content2-lists .list").length;
    $(".content2 .header li").click(function() {
        list = $(this).index()-1;
        listOn=$(".content2 .header li.on").index()-1;
        if (list >= listLength&&listOn==list) return;
        if(list==-1){
            $(".content2-lists .list").eq(listOn).siblings().slideDown();
        }else{
            $(".content2-lists .list").eq(list).slideDown();
            $(".content2-lists .list").eq(list).siblings().slideUp();
        }
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });
    //热门标签添加
    $(".list ul li.hot").append("<span>hot</span>");
})

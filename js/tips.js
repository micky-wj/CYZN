/**
 * Created by Administrator on 2015/9/14.
 */
$(document).ready(function(){
    //�������������Զ���ת
    $(".nav li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $("body").animate({"scrollTop":$(".tips").children().eq($(this).index()).offset().top-98},0);
    });
    //������߾��Զ�����
    $(".nav-fixed").css({"left":$(".container").offset().left});
    //ҳ��������������ǩ�Զ�����class
    $(window).scroll(function(){
        var top=$("body").scrollTop()+98;
        if($("body").scrollLeft()>0){
            $(".nav").removeClass().addClass("nav-fixed-left nav");
        }else{
            if (top>=$(".tips").children().eq(0).offset().top){
                $(".nav").removeClass().addClass("nav-fixed nav");
            }else {
                $(".nav").removeClass().addClass("nav-unfixed nav");
            }
        }
        var num =0;
        for(var n=0;n<5;n++){
            if(top >= $(".tips").children().eq(n).offset().top&& top <= $(".tips").children().eq(n+1).offset().top){
                num=n;}
            if(top>=$(".tips").children().eq(5).offset().top){
                num=5;
            }
            $(".nav li").removeClass("on").eq(num).addClass("on");
        }
    })
});
/**
 * Created by Administrator on 2015/9/12.
 */
$(document).ready(function(){
    //������ҳ����߶�
    $(".content1").css("height",$(window).height());
    $(window).resize(function(){
        $(".content1").css("height",$(window).height());
    });
    //ת������2��ͼƬΪ����
    $(".content2-images img").load(function() {
        $(this).wrap(function(){
            return '<span class="content2-image-wrap" ' +
                'style="background:url(' + $(this).attr('src') + ') no-repeat center center;' +
                'width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />';
        });
        $(this).css("opacity","0");
    });
    //�����ĵ�ͼƬ������ʾ
    $(".content4 ul li .rsp").hide();
    $(".content4 ul li").hover(function(){
        $(this).find(".text").stop().animate({top:"0"}, 500)},
        function(){
        $(this).find(".text").stop().animate({top:"-200px"},500);
    });
})

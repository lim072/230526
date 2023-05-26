$('#notice>ul>li').eq(0).on('click', function(){
    $('.popup').css({'display' : 'block'})
})

$('#close').on('click', function(){
    $('.popup').css({'display' : 'none'})
})


$('#gnb>ul>li').on('mouseover',function(){
    $(this).children("ul.sub").stop().slideDown()
})

$('#gnb>ul>li').on('mouseleave',function(){
    $(this).children("ul.sub").stop().slideUp()
})

setInterval(function(){
    $('.frame').animate({top: "-400px"},function(){
        $('.frame>li').eq(0).appendTo(".frame");
        $('.frame').css({top : "0px"})
    })
},3000)

$(".tab>li").on('click',function(){
    $(".tab").find("li").removeClass("on")
    $(".content").find("div").removeClass("on")
    $(this).addClass("on")

    var conId = $(this).children("a").attr("href")
    $(conId).addClass("on")
})
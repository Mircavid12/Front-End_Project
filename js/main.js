var deliveredBtns = document.querySelectorAll(".digital-delivered-buttons li");
deliveredBtns.forEach(element => {
    $(element).click(function(){
        var activeBtn = document.querySelector(".active");
        $(this).addClass("active");
        $(activeBtn).removeClass("active");
    })
});
var ShopBtns = document.querySelectorAll(".shop-card-buttons li");
ShopBtns.forEach(element => {
    $(element).click(function(){
        var activeBtn = document.querySelector(".active");
        $(this).addClass("active");
        $(activeBtn).removeClass("active");
    })
});

$(document).ready(function(){

    $(window).scroll(function(){
        if($("html").scrollTop() >= 120){
        $(".navbar").addClass("scrolled");
        $(".navbar a").css("color","#232323");
        $(".navbar-brand2").css("display","block");
        $(".navbar-right-side ul li a i").css("color","#343434");
        $(".navbar-right-side").css("border-left","1px solid rgba(0, 0, 0, 0.05)");
        $(".shop-card-navbar").css("margin-top","0");
        }
        else{
            $(".navbar").removeClass("scrolled");
            $(".navbar-brand2").css("display","none");
            $(".navbar-right-side ul li a i").css("color","#f8f8f8");
            $(".navbar-right-side").css("border-left","1px solid rgba(255, 255, 255, 0.1)");
            $(".navbar a").css("color","#f8f8f8");
            $(".shop-card-navbar").css("margin-top","54px");
            $(".shop-card-navbar a").css("color","#343434");
            $(".shop-card-navbar .navbar-right-side").css("border-left","1px solid rgba(0, 0, 0, 0.05)");
            $(".shop-card-navbar .navbar-right-side ul li a i").css("color","#343434");
            $(".shop-card-navbar").css("transition","all 0.2s");
        }
    })
    $(".showAll").click(function(){
        $(".digital-content1").css("display","block");
        $(".digital-content2").css("display","block");
        $(".digital-content3").css("display","block");
        $(".digital-content4").css("display","block");
        $(".digital-content5").css("display","block");
        $(".digital-content6").css("display","block");
    })
    $(".branding").click(function(){
        $(".digital-content1").css("display","none");
        $(".digital-content2").css("display","block");
        $(".digital-content3").css("display","block");
        $(".digital-content4").css("display","none");
        $(".digital-content5").css("display","block");
        $(".digital-content6").css("display","none");
    })
    $(".digital").click(function(){
        $(".digital-content1").css("display","block");
        $(".digital-content2").css("display","none");
        $(".digital-content3").css("display","none");
        $(".digital-content4").css("display","none");
        $(".digital-content5").css("display","none");
        $(".digital-content6").css("display","block");
    })
    $(".packaging").click(function(){
        $(".digital-content1").css("display","none");
        $(".digital-content2").css("display","none");
        $(".digital-content3").css("display","none");
        $(".digital-content4").css("display","block");
        $(".digital-content5").css("display","none");
        $(".digital-content6").css("display","none");
    })
    $(".showAll2").click(function(){
        $(".shop-content1").css("display","block");
        $(".shop-content2").css("display","block");
        $(".shop-content3").css("display","block");
        $(".shop-content4").css("display","block");
        $(".shop-content5").css("display","block");
        $(".shop-content6").css("display","block");
        $(".shop-content7").css("display","block");
        $(".shop-content8").css("display","block");
        $(".shop-content9").css("display","block");
        $(".shop-content10").css("display","block");
        $(".shop-content11").css("display","block");
        $(".shop-content12").css("display","block");
    })
    $(".accessories").click(function(){
        $(".shop-content1").css("display","block");
        $(".shop-content2").css("display","none");
        $(".shop-content3").css("display","none");
        $(".shop-content4").css("display","block");
        $(".shop-content5").css("display","none");
        $(".shop-content6").css("display","none");
        $(".shop-content7").css("display","block");
        $(".shop-content8").css("display","none");
        $(".shop-content9").css("display","block");
        $(".shop-content10").css("display","none");
        $(".shop-content11").css("display","block");
        $(".shop-content12").css("display","none");
    })
    $(".apparel").click(function(){
        $(".shop-content1").css("display","none");
        $(".shop-content2").css("display","block");
        $(".shop-content3").css("display","none");
        $(".shop-content4").css("display","none");
        $(".shop-content5").css("display","block");
        $(".shop-content6").css("display","none");
        $(".shop-content7").css("display","none");
        $(".shop-content8").css("display","block");
        $(".shop-content9").css("display","none");
        $(".shop-content10").css("display","block");
        $(".shop-content11").css("display","none");
        $(".shop-content12").css("display","block");
    })
    $(".bags").click(function(){
        $(".shop-content1").css("display","none");
        $(".shop-content2").css("display","none");
        $(".shop-content3").css("display","block");
        $(".shop-content4").css("display","none");
        $(".shop-content5").css("display","none");
        $(".shop-content6").css("display","block");
        $(".shop-content7").css("display","none");
        $(".shop-content8").css("display","none");
        $(".shop-content9").css("display","none");
        $(".shop-content10").css("display","none");
        $(".shop-content11").css("display","none");
        $(".shop-content12").css("display","none");
    })
    $(".search-nav-btn").click(function(){
        event.preventDefault();
        $(".search-pop-up").css("display","block");
    })
    $(".times-icon").click(function(){
        $(".search-pop-up").css("display","none");
    })
    $(document).keyup(function(e) { 
        if(e.which == 27){
            $(".search-pop-up").css("display","none");
        }
    });
    $(".interface-nav-btn").click(function(){
        event.preventDefault();
        $(".interface").css("display","block");
        $(".interface").css("right","0");
    })
    $(".interface-times-icon").click(function(){
        $(".interface").css("display","none");
    })
    $(".scrolling-top").click(function(){
        $("html").scrollTop(0);
    })
    $("#carousel .owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
})

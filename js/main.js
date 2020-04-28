var deliveredBtns = document.querySelectorAll(".digital-delivered-buttons li");
deliveredBtns.forEach(element => {
    $(element).click(function(){
        var activeBtn = document.querySelector(".active");
        $(this).addClass("active");
        $(activeBtn).removeClass("active");
    })
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($("html").scrollTop() >= 50){
            console.log("dasdaa")
        $(".navbar").addClass("scrolled");
        $(".navbar a").css("color","#232323");
        $(".navbar-brand2").css("display","block");
        $(".navbar-right-side ul li a i").css("color","#343434");
        $(".navbar-right-side").css("border-left","1px solid rgba(0, 0, 0, 0.05)");
        }
        else{
            $(".navbar").removeClass("scrolled");
            $(".navbar-brand2").css("display","none");
            $(".navbar-right-side ul li a i").css("color","#f8f8f8");
            $(".navbar-right-side").css("border-left","1px solid rgba(255, 255, 255, 0.1)");
            $(".navbar a").css("color","#f8f8f8");
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
    $('.owl-carousel').owlCarousel({
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
    })
})

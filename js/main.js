var deliveredBtns = document.querySelectorAll(".digital-delivered-buttons li");

deliveredBtns.forEach(element => {
    $(element).click(function(){
        var activeBtn = document.querySelector(".active");
        $(this).addClass("active");
        $(activeBtn).removeClass("active");
    })
});

var showAll = document.querySelector(".showAll");
var branding = document.querySelector(".branding");
var digital = document.querySelector(".digital");
var packaging = document.querySelector(".packaging");

var digitalContent1 = document.querySelector(".digital-content1");
var digitalContent2 = document.querySelector(".digital-content2");
var digitalContent3 = document.querySelector(".digital-content3");
var digitalContent4 = document.querySelector(".digital-content4");
var digitalContent5 = document.querySelector(".digital-content5");
var digitalContent6= document.querySelector(".digital-content6");

$(showAll).click(function(){
    $(digitalContent1).css("display","block");
    $(digitalContent2).css("display","block");
    $(digitalContent3).css("display","block");
    $(digitalContent4).css("display","block");
    $(digitalContent5).css("display","block");
    $(digitalContent6).css("display","block");
})
$(branding).click(function(){
    $(digitalContent1).css("display","none");
    $(digitalContent2).css("display","block");
    $(digitalContent3).css("display","block");
    $(digitalContent4).css("display","none");
    $(digitalContent5).css("display","block");
    $(digitalContent6).css("display","none");
})
$(digital).click(function(){
    $(digitalContent1).css("display","block");
    $(digitalContent2).css("display","none");
    $(digitalContent3).css("display","none");
    $(digitalContent4).css("display","none");
    $(digitalContent5).css("display","none");
    $(digitalContent6).css("display","block");
})
$(packaging).click(function(){
    $(digitalContent1).css("display","none");
    $(digitalContent2).css("display","none");
    $(digitalContent3).css("display","none");
    $(digitalContent4).css("display","block");
    $(digitalContent5).css("display","none");
    $(digitalContent6).css("display","none");
})
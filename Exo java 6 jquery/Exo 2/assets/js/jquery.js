$(document).ready(function(){
    $("button").click(function(){
        $('div').animate({
            marginLeft: '50px',
        }, 1000);

    $(".div1").toggleClass("green");
    $(".div1").slideToggle(2000);

    $(".div3").toggleClass("orange");
    $(".div3").slideToggle(2000);

        $('div').animate({
            marginLeft: '0px'
        }, 1000);
});
});
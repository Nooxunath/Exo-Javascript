$(document).ready(function(){
    $("button").click(function(){
        $("div").slideToggle(700);
        jQuery.fx.off = true;
        jQuery.fx.off = false;
    });
});
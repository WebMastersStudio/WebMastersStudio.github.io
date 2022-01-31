$(document).ready(function(){

    $(".next").click(function(){
        
        slideIndex = $(".slide-active").index();
        
        if(slideIndex < 2) {
            var needIndex = slideIndex + 1;
            var marg = 100 * needIndex;
            $(".slide").removeClass("slide-active");
            $(".slide:eq(" + needIndex + ")").addClass("slide-active");
            $(".slider-roll").css({"margin-left": "-" + marg + "%", "transition": " 1s "});
        }

    });

    $(".prev").click(function(){
        
        slideIndex = $(".slide-active").index();
        
        if(slideIndex > 0) {
            var needIndex = slideIndex - 1;
            var marg = 100 * needIndex;
            $(".slide").removeClass("slide-active");
            $(".slide:eq(" + needIndex + ")").addClass("slide-active");
            $(".slider-roll").css({"margin-left": "-" + marg + "%", "transition": " 1s "});
        }

    });

});
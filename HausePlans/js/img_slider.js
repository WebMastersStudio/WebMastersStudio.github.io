$(document).ready(function(){

    var currentIndex = $(".hero-active").index();

    $(".parallax-mirror:eq(" + currentIndex + ")").addClass("parallax_active");

    newIndex = currentIndex - 1;

    
    
    
    let timerId = setTimeout(function tick() {
        
        $(".parallax-mirror").removeClass("parallax_active");
        $(".parallax-mirror").addClass("parallax_none");
        $(".parallax-mirror:eq(" + newIndex + ")").delay( 5000 ).removeClass("parallax_none");
        $(".parallax-mirror:eq(" + newIndex + ")").addClass("parallax_active");

        if(newIndex == 0) {
            newIndex = newIndex + 1;
        } else {
            newIndex = newIndex - 1;
        }
        

     //    $(".parallax-mirror").delay( 800 ).removeClass("parallax_active");
    //     $(".parallax-mirror:eq(" + newIndex + ")").addClass("parallax_active");
    //     newIndex =  newIndex - 1;



         timerId = setTimeout(tick, 5000); // (*)
       }, 2000);
        

    

});




        
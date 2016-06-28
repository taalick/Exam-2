$(document).ready(function(){
    var $container = $(".masonry-container");
        $container.imagesLoaded()
        .always( function( instance ) { 
            $container.masonry({
                  columnWidth: ".grid-item",
                  itemSelector: ".grid-item",
            }); 
    });
    var $timerID = setInterval(function() {
            $(".grid-item").imagefill();
           // console.log('if 3000');              
        }, 3000);      
});
function searchGoogle(){
    var value = document.getElementById('searchTextId').value;
    console.log(value);  
   // $.getJSON('http://api.riffsy.com/v1/search?tag=' + value + '&limit=10',
        $.getJSON('http://api.pixplorer.co.uk/image?word=' + value + '&amount=7&size=tb',
        //$.getJSON('http://api.pixplorer.co.uk/image?&amount=5&size=tb',

    function(data){
        
        console.log('data.images.length', data.images.length);
        console.log('data', data);
        $('<div class="grid-item"></div>').appendTo("#grid");
       $child = $('#grid').children('div');
       console.log('$child', $child);
        $.each(data.images, function(i, images){
          $($child[i]).empty(); 
          //$("<img/>").attr({src: images.imageurl, height: "200px"}).appendTo($child[i]);  
          $("<img/>").attr({src: images.imageurl}).appendTo($child[i]);                
          $($child[i]).append('<p class="titleRes">' + images.word + '</p>');
          if ( i == 6 ) return false;
        });    
    });   
};



// нажатие enter
$(window).keypress(function(event){   
    switch (event.keyCode) {
    case 13:       
        searchGoogle();
    break;      
    };
});

// нажатие кнопки мыши
$(document).ready(function() {
    $("#submitId").click(function(){
    searchGoogle();
    });
});

$(document).ready(function() {
    searchGoogle();
});
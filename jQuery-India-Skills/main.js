$( function() {
    $( "#draggable" ).draggable();
  } );

$(function(){
    $("#accordion").accordion();
});

//get data from a json file
// $.getJSON( "data.json", function( data ) {}

  
$(function(){
    var items = [];
    var data = 
          {
        "one": "This is the third row",
        "two": "This is the third row second column",
        "three": "This is third row third column"
      };
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
  
});
  

$(function(){

	// Instantiate MixItUp:
	

});
$( document ).ready(function() {
  // Handler for .ready() called


var countChecked = function() {

var checkedId = $('input:checkbox:checked').map(function() {
    return this.id;
}).get();
console.log(checkedId);
};


$( "input[type=checkbox]" ).on( "click", countChecked );

});

$(function() {  
    var window_height = $(window).height(),
       content_height = window_height - 20;

    $('#list').height(content_height);
});
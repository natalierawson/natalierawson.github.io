$( document ).ready(function() {
    $(".fruit-box").click(function(event){
	 $('#dialog').append(this.innerHTML).css("background","white").css("border","3px solid black").css("visibility", "visible");
	 $("#buy").click(function(event){
	 	$('#dialog').css("visibility", "hidden");
	 	$('#dialog img, #dialog .fruit-text, #dialog .fruit-price').remove();
	 })
	});
});
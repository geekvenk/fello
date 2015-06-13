$(document).ready(function(){
(function($) {
$.fn.hasScrollBar = function() {
    return this.get(0).scrollHeight > this.height();
}
})(jQuery);
var cardsScrollableHeight;
var boardHeight;
var cardid;
var bl=new Array();
var i=0;
$('.cards-scrollable').each(function(){
           bl[i]=this.id;
           i++;
});
function cusize(){
	cardsScrollableHeight=$( window ).height()-240;
	boardHeight=$( window ).height()-130;
	$(".cards-scrollable").css("max-height",cardsScrollableHeight);
	$(".board").css("height",boardHeight);

	bl.forEach(function(entry) {
    cardid=".card-"+entry;
    if ($('#'+entry).hasScrollBar()) {
    	$(cardid).css("width","245px");
    }else{
    	$(cardid).css("width","260px");
    }

	});
}

cusize();

$(window).resize(function() {
	cusize();
});

});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
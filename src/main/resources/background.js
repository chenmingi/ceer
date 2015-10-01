
function drawIcon(text){
	var canvas = document.getElementById("meuIcon");
	var context = canvas.getContext("2d");
	context.rect(0,0,19,19);
	context.fillStyle = 'red';
    context.fill();
	context.fillStyle = "#ffffff";
	context.font = "bold 8px Arial";
	context.fillText(text, 2, 12);
	var imageData = context.getImageData(0, 0, 19, 19);
	chrome.browserAction.setIcon({
	  imageData: imageData
	});
}

function sendRequest(){
	$.ajax({
	  dataType: "json",
	  url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDBRL%22)&format=json&env=store://datatables.org/alltableswithkeys&callback="
	}).done(function( data ) {
	  var rate = data.query.results.rate.Rate;
      drawIcon(rate);
	  chrome.browserAction.setTitle(rate);
    });
}


$( document ).ready(function() {
	sendRequest();
	window.setInterval(sendRequest, 60000);
});

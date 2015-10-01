$( document ).ready(function() {
	$.ajax({
	  dataType: "json",
	  url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDBRL%22)&format=json&env=store://datatables.org/alltableswithkeys&callback="
	}).done(function( data ) {
	  var rate = data.query.results.rate;
      $( "#status" ).html(rate.Name+"<br>"+rate.Rate+"<br><br>"+rate.Date+" "+rate.Time+"<br><br>"+rate.Ask+"(Ask)<br>"+rate.Bid+"(Bid)");
    });
});
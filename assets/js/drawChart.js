/* Javascript methods to draw the graph will selected track data */

google.charts.load('current', {'packages':['corechart']});

function drawChart(chartData){
	console.log(chartData);
	var data = google.visualization.arrayToDataTable(chartData);

	var options = {
	//   title: 'spotify popularity',
	//   titleTextStyle: {
	// 	  color: 'white',
	// 	  fontName: correctFont
	//   },
	  curveType: 'function',
	  legend: { position: 'bottom' },
	  fontName:'gothamLight',
	  backgroundColor: {fill:'transparent'},
	  chartArea: {left:80,top:60,width:'82%',height:'70%',backgroundColor:'transparent'},
	  colors:[lineColor1,lineColor2],
	  vAxis: {
		minValue: 0, 
		maxValue: 100,
		textStyle: {
			color: chartFontColor
		},
		gridlines: {
			count: 0
		}
	  },
	  hAxis: {
		  textStyle: {
			  color: chartFontColor
		  }
	  }
	//   titlePosition:'none'
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
	chart.draw(data, options);
}
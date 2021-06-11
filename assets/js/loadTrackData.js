/* Javascript methods to draw the graph will selected track data */

var queryString = new Array();
var noTracks = 0;
var correctFont = '';
var style = 'assets/css/';
var lineColor1, lineColor2, chartFontColor;
var trackName;

window.onload=function() {
    getParameters();
	setHtmlAttributes(); // this is loading before getParameters sometimes
}

function getParameters(){
	if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
             for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }
    if (queryString["albumName"] != null && queryString["trackNumber"] != null) {
        retrieveData();
    }
}

function setHtmlAttributes(){
	title = document.getElementById('title');

	switch(queryString['albumName']) {
		case 'Debut' : 
			correctFont = 'satisfaction';
			style = style + 'debut.css';
			noTracks = 15;
			lineColor1 = 'white';
			lineColor2 = '#d8c196';
			chartFontColor = 'white';
			break;
		case 'Fearless' : 
			title.innerHTML = 'TRACK IT (TAYLOR\'S VERSION)';
			correctFont = 'engraversGothic';
			style = style + 'fearless.css';
			noTracks = 20;
			lineColor1 = 'black';
			lineColor2 = '#f7f8f2';
			chartFontColor = 'white';
			break;
		case 'SpeakNow' : 
			correctFont = 'sudestada';
			style = style + 'speaknow.css';
			noTracks = 20;
			lineColor1 = '#f7f8f2';
			lineColor2 = '#e0af6b';
			chartFontColor = 'white';
			break;
		case 'Red' : 
			title.innerHTML = 'TRACK IT (TAYLOR\'S VERSION)';
			correctFont = 'tungsten';
			style = style + 'red.css';
			noTracks = 20;
			lineColor1 = '#ebe9dd';
			lineColor2 = '#b6b6b1';
			chartFontColor = 'white';
			break;
		case '1989' : 
			correctFont = 'nineteen';
			style = style + 'nineteen.css';
			noTracks = 18;
			lineColor1 = 'black';
			lineColor2 = '#875336';
			chartFontColor = 'black';
			break;
		case 'Reputation' : 
			title.innerHTML = 'track it (taylor\'s version)';
			correctFont = 'engraversOldEnglish';
			style = style + 'reputation.css';
			noTracks = 15;
			lineColor1 = '#e3e3e3';
			lineColor2 = '89b6a1';
			chartFontColor = 'white';
			break;
	}
	document.getElementById('styler').setAttribute('href',style);
}

function retrieveData(){

    album = queryString['albumName'];
    trackNo = queryString['trackNumber'];

	var url = new URL("http://localhost:3000/load");
	var params = {trackNumber:trackNo, albumName:album};

	url.search = new URLSearchParams(params).toString();
	console.log(url.toString());

	fetch(url)
	.then(res=>{return res.json()})
	.then(data=>{parseTrackData(data)})
	.catch(err=>console.log(err));

}

function parseTrackData(data){
	console.log('parseTrackData::data successfully retrieved')

	var dict = {};
	var track = '';
	var trackTV = '';

	data.Items.forEach(element => {
		if(element.tv == 0){
			var arr = [element.popularity];
			var formattedDate = formatDate(element.date);
			dict[formattedDate] = arr;
			if(track == ''){
				track = element.track;
			}
		}
	});

	data.Items.forEach(element => {
		if(element.tv == 1){
			dict[formatDate(element.date)].push(element.popularity);
		}
	});

	trackTV = track + ' (Taylor\'s Version)';
	trackName = trackTV;
	setTrackLabel(trackTV);

	var chartData = [['Date', track, trackTV]];

	for (const [key, value] of Object.entries(dict)) {
		var dateArr = [key, parseInt(value[0])];
		if(value.length > 1){
			dateArr.push(parseInt(value[1]));
		}else{
			dateArr.push(0);
		}
		chartData.push(dateArr);
	}

	drawChart(chartData);
}

function setTrackLabel(trackName) {
	document.getElementById('trackLabel').innerHTML = trackName;
}


function formatDate(date) {
	var res = date.split('-');
	var formattedDate = '';

	switch(res[1]){
		case '01':
			formattedDate = 'Jan ';
			break;
		case '02':
			formattedDate = 'Feb ';
			break;
		case '03':
			formattedDate = 'Mar ';
			break;
		case '04':
			formattedDate = 'Apr ';
			break;
		case '05':
			formattedDate = 'May ';
			break;
		case '06':
			formattedDate = 'June ';
			break;
		case '07':
			formattedDate = 'July ';
			break;
		case '08':
			formattedDate = 'Aug ';
			break;
		case '09':
			formattedDate = 'Sept ';
			break;
		case '10':
			formattedDate = 'Oct ';
			break;
		case '11':
			formattedDate = 'Nov ';
			break;
		case '12':
			formattedDate = 'Dec ';
			break;
	}
	formattedDate = formattedDate + res[2];
	return formattedDate;
}
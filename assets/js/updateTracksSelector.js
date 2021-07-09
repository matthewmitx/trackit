/* Javascript scripts to update the select options on webpage */

window.onload=function() {
	document.getElementById('selectElementAlbum').onchange=function() { 
		updateTrackSelector();
	}
	console.log("document height " + document.documentElement.clientHeight);
	console.log("document width " + document.documentElement.clientWidth);
	console.log("window height " + window.innerHeight);
	console.log("window width " + window.innerWidth);
}

function updateTrackSelector() {

	trackSelect = document.getElementById('selectElementTrack');
	removeOptions(trackSelect);

	albumSelect = document.getElementById('selectElementAlbum');
	var tracklist;
	switch(albumSelect.value) {
		case 'Debut' : 
			tracklist = getDebut();
			break;
		case 'Fearless' : 
			tracklist = getFearless();
			break;
		case 'SpeakNow' : 
			tracklist = getSpeakNow();
			break;
		case 'Red' : 
			tracklist = getRed();
			break;
		case '1989' : 
			tracklist = get1989();
			break;
		case 'Reputation' : 
			tracklist = getReputation();
			break;
	}

	addDefaultOption(trackSelect);
	for(i = 0; i < tracklist.length; i++){
		var opt = document.createElement('option');
		opt.value = (i+1).toString();
		opt.innerHTML = tracklist[i];
		trackSelect.appendChild(opt);
	}

}

function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}

function addDefaultOption(selectElement){
	var defaultOption = document.createElement('option');
	defaultOption.value = '0';
	defaultOption.innerHTML = '-- select track --';
	defaultOption.selected = 'true';
	defaultOption.disabled = 'disabled';
	selectElement.appendChild(defaultOption);
	return;
}

function getDebut() {
	var debut = ['Tim McGraw', 'Picture To Burn', 'Teardrops On My Guitar', 'A Place in this World',
		'Cold As You', 'The Outside', 'Tied Together With A Smile', 'Stay Beautiful',
		'Should\'ve Said No', 'Mary\'s Song (Oh My My My)', 'Our Song', 'I\'m Only Me When I\'m With You',
		'Invisible', 'A Perfectly Good Heart', 'Teardrops On My Guitar (Pop Version)'
	];
	return debut;
}

function getFearless() {
	var fearless = ["Fearless", "Fifteen", "Love Story", "Hey Stephen", "White Horse",
		"You Belong With Me", "Breathe", "Tell Me Why", "You\'re Not Sorry", "The Way I Loved You",
		"Forever & Always", "The Best Day", "Change", "Jump Then Fall", "Untouchable", 
		"Forever & Always (Piano Version)", "Come In With The Rain", "Superstar",
		"The Other Side Of The Door", "Today Was A Fairytale"
	];
	return fearless;
}

function getSpeakNow() {
	var speakNow = ['Mine', 'Sparks Fly', 'Back To December', 'Speak Now', 'Dear John', 'Mean',
		'The Story Of Us', 'Never Grow Up', 'Enchanted', 'Better Than Revenge', 'Innocent',
		'Haunted', 'Last Kiss', 'Long Live', 'Ours', 'If This Was A Movie', 'Superman'
	];
	return speakNow;
}

function getRed() {
	var red = ['State of Grace', 'Red', 'Treacherous', 'I Knew You Were Trouble', 'All Too Well',
		'22', 'I Almost Do', 'We Are Never Ever Getting Back Together', 'Stay Stay Stay',
		'The Last Time', 'Holy Ground', 'Sad Beautiful Tragic', 'The Lucky One', 'Everything Has Changed',
		'Starlight', 'Begin Again', 'The Moment I Knew', 'Come Back...Be Here', 'Girl At Home'
	];
	return red;
}

function get1989() {
	var the1989 = ['Welcome To New York', 'Blank Space', 'Style', 'Out Of The Woods',
		'All You Had To Do Was Stay', 'Shake It Off', 'I Wish You Would', 'Bad Blood',
		'Wildest Dreams', 'How You Get The Girl', 'This Love', 'I Know Places', 'Clean',
		'Wonderland', 'You Are In Love', 'New Romantics', 'Bad Blood (Remix)', 
		'I Don\'t Wanna Live Forever'
	];
	return the1989;
}

function getReputation() {
	var reputation = ['...Ready For It?', 'End Game', 'I Did Something Bad', 'Don\'t Blame Me',
		'Delicate', 'Look What You Made Me Do', 'So It Goes...', 'Gorgeous', 'Getaway Car',
		'King Of My Heart', 'Dancing With Our Hands Tied', 'Dress',
		'This Is Why We Can\'t Have Nice Things', 'Call It What You Want', 'New Year\'s Day'
	];
	return reputation;
}
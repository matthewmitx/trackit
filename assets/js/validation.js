/* Javascript script to run after submit button is triggered */

function validateChoice(){
	
	album = document.getElementById('selectElementAlbum').value;
	trackNo = parseInt(document.getElementById('selectElementTrack').value);

	if(album == 'default' || trackNo == 0){
		console.log("invalid response for album and song choice");
		alert('Please select an album and a track.');
	}
	else{
		redirectAndRetrieve(album,trackNo);
	}

}

function redirectAndRetrieve(album,trackNo){
	var url = new URL("http://127.0.0.1:5500/result.html");
	var params = {albumName:album, trackNumber:trackNo};
	url.search = new URLSearchParams(params).toString();

	window.location.href = url;
}
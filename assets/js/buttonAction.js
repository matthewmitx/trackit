/* Javascript function to control spotify buttons */

function homeClick() {
    var url = new URL("http://matthewmitx.github.io/trackit/");
    window.location.href = url;
}

function fwdClick() {
    album = queryString["albumName"];
    trackNo = queryString["trackNumber"];

    if(trackNo < noTracks){
        var trackAsInt = parseInt(trackNo);
        trackAsInt = trackAsInt + 1;
        
        var url = new URL("http://matthewmitx.github.io/trackit/result.html");
        var params = {albumName:album, trackNumber:trackAsInt.toString()};
        url.search = new URLSearchParams(params).toString();

        window.location.href = url;
    }
}

function backClick() {
    album = queryString["albumName"];
    trackNo = queryString["trackNumber"];

    if(trackNo > 1){
        var trackAsInt = parseInt(trackNo);
        trackAsInt = trackAsInt - 1;
        
        var url = new URL("http://matthewmitx.github.io/trackit/result.html");
        var params = {albumName:album, trackNumber:trackAsInt.toString()};
        url.search = new URLSearchParams(params).toString();

        window.location.href = url;
    }
}

function showPlayLabel() {
    var playLabel = document.getElementById('playButtonLabel');
    playLabel.classList.remove('hid');
    playLabel.classList.add('vis');
}

function hidePlayLabel(){
    var playLabel = document.getElementById('playButtonLabel');
    playLabel.classList.remove('vis');
    playLabel.classList.add('hid');
}

function playOnSpotify() {
    if(queryString['albumName'] == 'Fearless'){
        switch(queryString['trackNumber']) {
            case '1':
                window.open('https://open.spotify.com/track/77sMIMlNaSURUAXq5coCxE?si=882eeb8d0bb249c0','_blank');
                break;
            case '2':
                window.open('https://open.spotify.com/track/2nqio0SfWg6gh2eCtfuMa5?si=1d22b09159404547','_blank');
                break;
            case '3':
                window.open('https://open.spotify.com/track/6YvqWjhGD8mB5QXcbcUKtx?si=76a4209f9e7b4acd','_blank');
                break;
            case '4':
                window.open('https://open.spotify.com/track/550erGcdD9n6PnwxrvYqZT?si=6a6dfcbfadd848fd','_blank');
                break;
            case '5':
                window.open('https://open.spotify.com/track/5YL553x8sHderRBDlm3NM3?si=52355893489f4bb1','_blank');
                break;
            case '6':
                window.open('https://open.spotify.com/track/1qrpoAMXodY6895hGKoUpA?si=ce712d82fd9e4b01','_blank');
                break;
            case '7':
                window.open('https://open.spotify.com/track/7HC7R2D8WjXVcUHJyEGjRs?si=b724363d2c334b17','_blank');
                break;
            case '8':
                window.open('https://open.spotify.com/track/0k0vFacOHNuArLWMiH60p7?si=04881e22903d4ddd','_blank');
                break;
            case '9':
                window.open('https://open.spotify.com/track/6iiAfo4wTA2CVC3Uwx9uh8?si=40109278f08f48f4','_blank');
                break;
            case '10':
                window.open('https://open.spotify.com/track/22bPsP2jCgbLUvh82U0Z3M?si=c2c5c803f8634a05','_blank');
                break;
            case '11':
                window.open('https://open.spotify.com/track/1msEuwSBneBKpVCZQcFTsU?si=47c45485ffe84395','_blank');
                break;
            case '12':
                window.open('https://open.spotify.com/track/6ON9UuIq49xXY9GPmHIYRp?si=f2565d103e894f57','_blank');
                break;
            case '13':
                window.open('https://open.spotify.com/track/3ExweHKZF9B752DPQByRVT?si=2b3b38c4a5e9482d','_blank');
                break;
            case '14':
                window.open('https://open.spotify.com/track/2m3ObD945KvpE5y9A1eUWm?si=8f2a4a4479454258','_blank');
                break;
            case '15':
                window.open('https://open.spotify.com/track/0tQ9vBYpldCuikPsbgOVKA?si=5b2f2aaa1b5f42bf','_blank');
                break;
            case '16':
                window.open('https://open.spotify.com/track/01QdEx6kFr78ZejhQtWR5m?si=9cf43086022b4c21','_blank');
                break;
            case '17':
                window.open('https://open.spotify.com/track/1n2wszmJyVkw6FHqyLnQsY?si=2614e5866bcb40a1','_blank');
                break;
            case '18':
                window.open('https://open.spotify.com/track/51A8eKvvZz9uydvIZ7xRSV?si=0eb60ef77a644271','_blank');
                break;
            case '19':
                window.open('https://open.spotify.com/track/1cSFlSBdpT4F5vb1frQ231?si=e59046ba92d349a8','_blank');
                break;
            case '20':
                window.open('https://open.spotify.com/track/2JoJrsEV15OzbijS47lids?si=b936b025209c49ae','_blank');
                break;
        }
    }
    else{
        alert(trackName + ' not yet available.');
    }
}
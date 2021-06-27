document.addEventListener('DOMContentLoaded', function() {

    window.onscroll = function() { scrollControl() };

    var headerDiv = document.getElementById('headerDiv');
    var headerLeftDiv = document.getElementById('headerLeftDiv');
    var headerRightDiv = document.getElementById('headerRightDiv');
    var titleDiv = document.getElementById('titleDiv');
    var aboutDiv = document.getElementById('aboutDiv');
    var secondSectionDiv = document.getElementById('secondSectionDiv');

    var titleTop = titleDiv.offsetTop;
    var aboutTop = titleDiv.offsetTop;
    var secondSectionTop = secondSectionDiv.offsetTop;


    function scrollControl() {
        // console.log('titleTop ' + titleTop);
        // console.log('current pos ' + window.pageYOffset);

        if (window.pageYOffset > titleTop) {
            headerLeftDiv.classList.remove('headerLeftHidden');
            headerLeftDiv.classList.add('headerLeftActive');

            headerRightDiv.classList.remove('headerRight');
            headerRightDiv.classList.add('headerRightShared');
        }else {
            headerLeftDiv.classList.add('headerLeftHidden');
            headerLeftDiv.classList.remove('headerLeftActive');

            headerRightDiv.classList.add('headerRight');
            headerRightDiv.classList.remove('headerRightShared');
        }
    };

});

function scrollToHome() {
    window.scrollTo(0,0);
};

function scrollToAbout() {
    window.scrollTo(0,750);
};

function scrollToChoice() {
    window.scrollTo(0,1500);
};
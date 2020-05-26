var previousScrollPosition = window.pageYOffset; // first scroll position

window.onscroll = function() { // when user scrolls page
    var currentScrollPosition = window.pageYOffset; // refresh scroll position

    if (previousScrollPosition > currentScrollPosition && window.pageYOffset != 0) { // if user is scrolling up the page
        document.getElementById("navbar").style["background-color"] = "black";
        document.getElementById("navbar").style.top = "0"; // show navbar again
    } else if (window.pageYOffset == 0) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style["background-color"] = "";
    } else {
        document.getElementById("navbar").style.top = "-60px"; // else make it disappear
    }

    previousScrollPosition = currentScrollPosition; // refresh scroll position after scrolling
}

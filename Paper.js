function checkWin() { // define function called when hamburger is clicked
    var x = document.getElementById("navBar"); // find area in page with id navBar

    if (x.className === "nav") { // first time is called, this will be true - class is nav
        x.className += " responsive"; // changes class name to responsive
    } else {
        x.className = "nav"; // second time function is called class==nav will not be true so className goes back to nav
    }
}

// function to obtain a string of device info, including if the device is a mobile device
function getDevice() {
    return navigator.userAgent;
}

var deviceInfo = getDevice();
var regex = /Mobile/;

// apply regex to see if device was mobile
if (regex.test(deviceInfo)) {
    // change the stylesheet to the mobile version of the page
    document.getElementById("style").href = "mobile.css";
}

function removePdf(gameDocs, p) {
    if (regex.test(deviceInfo)) {
        var objectTagRegex = /object/;
        // pdf in content, remove pdf for mobile
        if (objectTagRegex.test(gameDocs)) {
            document.getElementById("variousContent").innerHTML = p;
        }
        // no pdf in content, put full content
        else {
            document.getElementById("variousContent").innerHTML = gameDocs;
        }
    }
}
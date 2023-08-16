// get the current position
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // inform if the browser being used doesn't support
        alert("Geolocation is not supported by this browser.");
    }
}

// inform the current position in popup
function showPosition(position) {
    alert(`
    Latitude: ${position.coords.latitude}
    Longitude: ${position.coords.longitude}`);
}

getLocation();
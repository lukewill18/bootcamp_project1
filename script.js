function initMap() {
    var portal = {lat: 33.6509104, lng: -117.838332};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: portal});
    var marker = new google.maps.Marker({position: portal, map: map});
}

function dropdownclick() {
    document.getElementById("dropdown-links").classList.toggle("show-dropdown");
    document.getElementById("header").classList.toggle("enlarge-header");
}
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

let navLinks = document.querySelectorAll("a[href^='#']");
for(let i = 0; i < navLinks.length; ++i) {
    navLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("[name=" + this.getAttribute("href").slice(1) + "]").scrollIntoView({behavior: "smooth"});
    });
}
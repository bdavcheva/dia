function showMapSection() {
    document.getElementById("map-section").style.display = "block"; // Прикажи го делот за мапа
}

function initMap() {
    var alkaloidLocation = { lat: 42.0008246, lng: 21.4667181 }; // Локација на Alkaloid

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: alkaloidLocation
    });

    var marker = new google.maps.Marker({
        position: alkaloidLocation,
        map: map,
        title: 'Alkaloid JV Skopje'
    });
}

function searchLocation() {
    var location = document.getElementById("search").value;
    alert("Searching for location: " + location);
    // Овде можете да додадете код за динамично пребарување на локации користејќи Google Places API
}
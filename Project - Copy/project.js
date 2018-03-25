function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(34.334414, -83.803015),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}}
function initMap() {
    let home = {

        //Setting up the location.
        //adding latitude and longitude instantly of a specific location
        lat: 44.3935179,
        lng: -79.7147793
    };
    //getting element by id from index.html page
    let mapSpot = document.getElementById('map');

    let map = new google.maps.Map(mapSpot, {
        zoom: 15,
        center: home
    });
    let marker = new google.maps.Marker({
        position: home,
        map: map
    });

}
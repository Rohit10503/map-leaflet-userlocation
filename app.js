function myfunction(){
    var x= document.getElementById("links");
    
    if(x.style.display === "block"){
        x.style.display="none"
        
        document.getElementById("sidebar").src="https://cdn.icon-icons.com/icons2/2090/PNG/512/hide_sidebar_horizontal_icon_128227.png"
    }
    else{
        x.style.display="block"
        document.getElementById("sidebar").src="https://icon-library.com/images/close-window-icon/close-window-icon-11.jpg"
        
    }
}

// Map leaflet
function getUserLocation() {
    // Check if Geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        document.getElementById('location').innerText = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude , longitude);
    map.setView([latitude , longitude],15)


    L.marker([latitude , longitude]).addTo(map)
    .bindPopup('You are here')
    .openPopup();

    var link=`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&lang=fr&apiKey=0ace78bf8d1b46b1b759906490aeec05`
    // https://api.geoapify.com/v1/geocode/reverse?lat=52.532329&lon=13.411415&lang=fr&apiKey=0ace78bf8d1b46b1b759906490aeec05
}


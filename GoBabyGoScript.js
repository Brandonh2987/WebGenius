 
function initMap() {

    var location = { lat: 44.652371, lng: -93.203454 };
   var map = new google.maps.Map(document.getElementById('map'), {
       center: location,
       zoom: 4,

    });
    function info(){
        this.teamNumber = "";
        this.website = ""; 

    };
    var team2987 = new info();
    team2987.teamNumber = "2987";
    team2987.website = "https://www.team2987.com/";
    var teamString = "<b> Team" + team2987.teamNumber + "</b>"; 

    var contentString = teamString + " <br> Website: <a href src ='" + team2987.website + "'>" + team2987.website + "</a> ";
    var infoWindow = new google.maps.InfoWindow({ content: contentString });
    var marker = new google.maps.Marker({ position: location, map: map, title: "Rogue Robotics"});


    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });


};


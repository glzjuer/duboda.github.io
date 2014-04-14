// Note: This function requires that you consent to location sharing when
// prompted by your browser.

var map;

var Tech109 = new google.maps.LatLng(42.058170, -87.675690);
var Tech209 = new google.maps.LatLng(42.058020, -87.675567);
var Tech309 = new google.maps.LatLng(42.058150, -87.675780);
var Tech409 = new google.maps.LatLng(42.058150, -87.575780);


var locationArray = [1];
Parse.initialize("om9ynedsIy67rU9vfQh8IVR2vv0A6WnFz0jgWUrP", "mzPU7M8YQwD83alRhWwGtM9niEiDcSKs4mOKSNbp");
var GameScore = Parse.Object.extend("TechBathroom");
var query = new Parse.Query(GameScore);
query.equalTo("gender", "F")&&query.equalTo("floor",1);
query.find({
  success: function(results) {
    // alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      var Tech = new google.maps.LatLng(object.get('latitude'),object.get('longitude'));
      locationArray[i] =  Tech;

      alert(locationArray[2]);
    }
},
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
}
});
for(var j=0; j<1000000;j++){}; 
alert("final"+locationArray[2]);
var locationNameArray = ['Tech109', 'Tech209', 'Tech409'];
var markers = [];

var tom = new google.maps.LatLng(42, -87.8);
var jim = new google.maps.LatLng(41.9, -87.85);
var peter = new google.maps.LatLng(42.1, -87.9);
var image = 'friendFlag.png';

var friendArray = [tom, jim, peter];
var friendNameArray = ['Tom', 'Jim', 'Peter'];
var friendMarkers = [];




















function initialize() {
  var mapOptions = {
    zoom: 20
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Here is your current location.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }

  var coord;
  var i=0;
  for (coord in locationArray) {
    var marker = new google.maps.Marker({
      position: locationArray[coord],
      map: map,
      title: locationNameArray[coord]
    });
    markers.push(marker);

    marker.setTitle(marker.title);
    attachActivityMessage(marker, i);
    i++;
  }
  clearMarkers();

  var person;
  var i=0;
  for (person in friendArray) {
    var marker = new google.maps.Marker({
      position: friendArray[person],
      map: map,
      title: friendNameArray[person],
      icon: image
    });
    friendMarkers.push(marker);

    marker.setTitle(marker.title);
    attachFriendMessage(marker, i);
    i++;
  }
  clearFriends();
  
  if (Show_1_floor)
  {
	show1floor();  
  }
  else (Show_2_floor)
  {
	show2floor();
  }
}

function setAllMap(map){
  for(var i=0; i<markers.length; i++){
    markers[i].setMap(map);
  }
}
function setFriends(map){
  for(var i=0; i<friendMarkers.length; i++){
    friendMarkers[i].setMap(map);
  }
}
function show2floor(){
  clearFriends();
  setAllMap(map);
}
function show1floor(){
  clearMarkers();
  setFriends(map);
}
function clearMarkers(){
  setAllMap(null);
}
function clearFriends(){
  setFriends(null);
}
function deleteMarkers(){
  setAllMap(null);
  markers=[];
}
function deleteFriends(){
  setFriends(null);
  friendMarkers=[];
}

function myFunctionQuery(){
  Parse.initialize("om9ynedsIy67rU9vfQh8IVR2vv0A6WnFz0jgWUrP", "mzPU7M8YQwD83alRhWwGtM9niEiDcSKs4mOKSNbp");
  var GameScore = Parse.Object.extend("TechBathroom");
  var query = new Parse.Query(GameScore);
  query.equalTo("gender", "F")&&query.equalTo("floor",1);
  query.find({
    success: function(results) {
      // alert("Successfully retrieved " + results.length + " scores.");
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        var Tech = new google.maps.LatLng(object.get('latitude'),object.get('longitude'));
        locationArray[i] =  Tech;
        
      }
  },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
  }
});
};

function attachActivityMessage(marker, num){
  var message = ['<a href="../review_Page.html">Tech109</a>',
		 '<a href="../review_Page.html">Tech209</a>',
		 '<a href="../review_Page.html">Tech309</a>'];
  var infowindow = new google.maps.InfoWindow({
    content: message[num]
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.open(marker.get('map'), marker);
  });
}
function attachFriendMessage(marker, num){
  var message = ['<a href="../review_Page.html">Tom</a>',
		 '<a href="../review_Page.html">Jim</a>',
		 '<a href="../review_Page.html">Peter</a>'];
  var infowindow = new google.maps.InfoWindow({
    content: message[num]
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.open(marker.get('map'), marker);
  });
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: Tech109,
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);



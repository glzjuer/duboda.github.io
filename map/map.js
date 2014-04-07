
// Note: This function requires that you consent to location sharing when
// prompted by your browser.

var map;

var Mudd109 = new google.maps.LatLng(42.058070, -87.675790);
var Mudd209 = new google.maps.LatLng(42.058020, -87.675767);
var Mudd309 = new google.maps.LatLng(42.058100, -87.675780);

var locationArray = [Mudd109, Mudd209, Mudd309];
var locationNameArray = ['Mudd109', 'Mudd209', 'Mudd309'];
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
    zoom: 9
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
        content: 'Location found using HTML5.'
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
  
  if (loadedShowFriends)
  {
	showFriends();  
  }
  else (loadedShowMarkers)
  {
	showMarkers();
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
function showMarkers(){
  clearFriends();
  setAllMap(map);
}
function showFriends(){
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

function attachActivityMessage(marker, num){
  var message = ['<a href="../activity/abnet_activity_profile.html">Field Museum</a>',
		 '<a href="../activity/abnet_activity_profile.html">Dancing in Norris Center</a>',
		 '<a href="../activity/abnet_activity_profile.html">Shopping</a>'];
  var infowindow = new google.maps.InfoWindow({
    content: message[num]
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.open(marker.get('map'), marker);
  });
}
function attachFriendMessage(marker, num){
  var message = ['<a href="../friends/abnet_friend_profile.php">Tom</a>',
		 '<a href="../friends/abnet_friend_profile.php">Jim</a>',
		 '<a href="../friends/abnet_friend_profile.php">Peter</a>'];
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
    position: chicago,
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);



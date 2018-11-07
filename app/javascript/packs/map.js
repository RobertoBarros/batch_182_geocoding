import GMaps from 'gmaps/gmaps.js';
import {autocomplete} from '../components/autocomplete'

autocomplete();



const mapElement = document.getElementById('map');
if (mapElement) { // don't try to build a map if there's no div#map to inject in
  const map = new GMaps({ el: '#map', lat: 0, lng: 0 });

  const styles = [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.locality",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi.attraction",elementType:"geometry",stylers:[{visibility:"on"},{saturation:"100"}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{visibility:"on"},{saturation:"100"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"geometry.stroke",stylers:[{visibility:"on"}]},{featureType:"poi.place_of_worship",elementType:"geometry",stylers:[{visibility:"on"},{saturation:"100"}]},{featureType:"poi.school",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",elementType:"geometry.fill",stylers:[{visibility:"on"},{saturation:"100"}]},{featureType:"poi.sports_complex",elementType:"labels.text.fill",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit.station.airport",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"transit.station.bus",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"transit.station.rail",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#15556f"},{lightness:17}]}];

  map.addStyle({
    styles: styles,
    mapTypeId: 'map_style'
  });
  map.setStyle('map_style');


  const markers = JSON.parse(mapElement.dataset.markers);
  map.addMarkers(markers);
  if (markers.length === 0) {
    map.setZoom(2);
  } else if (markers.length === 1) {
    map.setCenter(markers[0].lat, markers[0].lng);
    map.setZoom(14);
  } else {
    map.fitLatLngBounds(markers);
  }
}
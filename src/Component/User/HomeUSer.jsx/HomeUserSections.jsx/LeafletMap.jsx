import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'; // استيراد ملفات التصميم للإضافة
import 'leaflet-routing-machine';
import doctor from "../../../../assets/map/doctor.png"
const LeafletMap = () => {
  const [distance,setDistance]=useState("")
  const [time,setTime]=useState("")

  useEffect(() => {
    const map = L.map('map').setView([0, 0], 2);
      if ('geolocation' in navigator) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          map.locate({ setView: true, maxZoom: 10 });
        } else {
          console.error('Geolocation permission denied');
          // Handle permission denial gracefully
        }
      });
    } else {
      console.error('Geolocation not available');
      // Handle lack of geolocation support in the browser
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(map);

    map.locate({ setView: true, maxZoom: 10 });

    function onLocationFound(e) {
      const radius = e.accuracy / 2;

      L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

      L.circle(e.latlng, radius).addTo(map);

      const customIcon = L.icon({
        iconUrl: doctor,
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      });

      const secondMarkerCoords = [e.latlng.lat + 0.1, e.latlng.lng + 0.1];
      const secondMarker = L.marker(secondMarkerCoords, { icon: customIcon }).addTo(map)
        .bindPopup(`distance : ${distance} , time : ${time}`).openPopup();

      // إعداد Leaflet Routing Machine
      L.Routing.control({
        waypoints: [
          L.latLng(e.latlng.lat, e.latlng.lng),
          L.latLng(secondMarkerCoords[0], secondMarkerCoords[1])
        ],
        routeWhileDragging: false,
        addWaypoints:false,
        createMarker:false,
        show:false,
      }).addTo(map).on('routesfound', function(e) {
        const route = e.routes[0];
        const calculatedDistance = route.summary.totalDistance;
        const calculatedTime = route.summary.totalTime;
    
        setDistance(calculatedDistance);
        setTime(calculatedTime);
        
      });
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', function(e) {
  console.error('Error finding location:', e.message);
  // Handle the error, maybe display a message to the user
});
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <div id='map' style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
}

export default LeafletMap;

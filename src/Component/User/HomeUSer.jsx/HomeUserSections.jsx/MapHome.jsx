  import React, { useEffect, useRef, useState } from 'react';
  import ReactMapGL, { Marker,FullscreenControl,GeolocateControl,Source,Layer,NavigationControl } from 'react-map-gl';
  import doctor from "../../../../assets/map/doctor.png";

  const MapHome = () => {
    
    const [start,setStart] = useState([35.9206549,35.368795])
    const [end,setEnd] = useState([35.921,35.369])
    const [cords,setCords]=useState([])

    const [viewport, setViewport] = useState({
      latitude: 35.368795,
      longitude: 35.9206549,
      zoom: 10,
    });
    const geoControlRef = useRef();
    console.log(geoControlRef)
    const markersData = [
      {
        longitude: 35.9206549,
        latitude: 35.368795,
        name: 'Marker 1',
        iconUrl: doctor,
      },
      {
        longitude: 35.921,
        latitude: 35.369,
        name: 'Marker 2',
        iconUrl: doctor,
      },
      // Add more markers as needed
    ];

    const geojson = {
      "type":'FeatureCollection',
      "features" : [{
        "type":"Feature",
        "geometry":{
          "type" : "LineString",
          "coordinates":[
            ...cords
          ]
        }
      }]
    }
    const lineStyle = {
      id:"roadLayer",
      type:'line',
      layout:{
        "line-join":'round',
        "line-cap":"round"
      },
      paint:{
        "line-color":"red",
        "line-width":4,
        "line-opacity":0.75
      }
    }
    // Function to fetch the route between the start and end coordinates
    const getRoute = async () => {
      const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoibWVlcmExOSIsImEiOiJjbHEyYmVpZ2cwMXZzMnFxcjVrdjljdHBvIn0.MnfM3vz8MEhCoY9dhYAl7g`,
      {
        method: "GET",
        mode: "cors", 
      }
      );
      const data = await response.json();
      const cords = data.routes[0].geometry.coordinates
      setCords(cords)
      console.log(cords);
    };
    const handleGeolocate = ({ coords }) => {
     if(coords){
      setViewport({
        ...viewport,
        latitude: coords.latitude,
        longitude: coords.longitude,
        zoom: 18, // Adjust the zoom level as needed
      });
     }
    };
    console.log(viewport.latitude,viewport.longitude)
    useEffect(() => {
      getRoute();
      geoControlRef.current?.trigger();
      
      if(geoControlRef.current){
        setViewport({
          ...viewport,
          latitude:  geoControlRef?.current?._accuracyCircleMarker?._lngLat?.lng ,
          longitude: geoControlRef?.current?._accuracyCircleMarker?._lngLat?.lat 
        });
      }
      
      // Ensure that the retrieved lng and lat are valid numbers before setting Marker's position
      
    }, []);
    return (
      <div style={{ height: '400px' }}>
        <ReactMapGL
          {...viewport}
          onMove={evt => setViewport(evt.viewState)}
          onViewportChange={setViewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoibWVlcmExOSIsImEiOiJjbHEyYmVpZ2cwMXZzMnFxcjVrdjljdHBvIn0.MnfM3vz8MEhCoY9dhYAl7g"
        >
          <Source id="routeSource" type="geojson" data={geojson}>
            <Layer {...lineStyle}/>
          </Source>
          <GeolocateControl ref={geoControlRef} positionOptions={{ enableHighAccuracy: true }}  auto={true} onGeolocate={handleGeolocate}/>
          <FullscreenControl />
          <NavigationControl />
            {/* <Marker
              longitude={lng}
              latitude={lat}
              
            >
              <img
                style={{ width: '20px', height: '20px' }}
              />
            </Marker> */}
        </ReactMapGL>
      </div>
    );
  };

  export default MapHome;

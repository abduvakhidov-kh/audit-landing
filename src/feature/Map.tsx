import React from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 41.322987,
  lng: 69.284219,
};

function GoogleMaps() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC_NvKnYoXz6bO1iP3lUcZJ-h4uZ2SsFYo">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={{ lat: 41.322987, lng: 69.284219 }} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMaps);

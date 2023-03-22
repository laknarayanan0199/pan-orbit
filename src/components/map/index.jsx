import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Map = ({ Lat, Lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBKANaSfgdNOMKfP1uydrNJEFGkWyb9m4I",
  });

  const center = {
    lat: Lat,
    lng: Lng,
  };

  return (
    <>
      {!isLoaded ? (
        <h3>Loading...</h3>
      ) : (
        <GoogleMap
          center={center}
          zoom={2}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </>
  );
};

export default Map;

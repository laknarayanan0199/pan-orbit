import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapHelper = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCWvAEc3cvSSlM6UUSiltZMacF9R7oKWCU",
  });

  if (!isLoaded) return <h3>Loading...</h3>;
  return <Map />;
};

export default MapHelper;

const Map = () => {
  return (
    <GoogleMap
      zoom={5}
      center={{ lat: 44, lng: -80 }}
      style={{ width: "50%", height: "50%" }}
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
};

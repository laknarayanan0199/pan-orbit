import React from "react";
import { SyncLoader } from "react-spinners";
import Map from "../map";
import { useFetch } from "../utilities/fetchUsers";
import "./userdetails.css";

const UserDetails = ({ user }) => {
  const { loading } = useFetch();

  return (
    <>
      {loading ? (
        <SyncLoader
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        />
      ) : (
        <>
          <div className="details__container">
            <div className="grid-1">
              <img src={user?.profilepicture} alt={user?.name} />
              <h3>{user?.name}</h3>
              <div className="personal__details">
                <label>
                  <p>Username :</p> {user?.username}
                </label>
                <label>
                  <p>Email :</p> {user?.email}
                </label>
                <label>
                  <p>Phone :</p>
                  {user?.phone}
                </label>
                <label>
                  <p>Website :</p>
                  {user?.website}
                </label>
              </div>
              <p className="border"></p>
              <div className="company__details">
                <h4>Company</h4>
                <label>
                  <p>Name :</p>
                  {user?.company.name}
                </label>
                <label>
                  <p>CatchPhrase :</p> {user?.company.catchPhrase}
                </label>
                <label>
                  <p>Bs :</p> {user?.company.bs}
                </label>
              </div>
            </div>

            <div className="address__details">
              <h4>Address :</h4>
              <div className="address">
                <label>
                  <p> Street :</p>
                  {user?.address.street}
                </label>
                <label>
                  <p> Suite :</p>
                  {user?.address.suite}
                </label>
                <label>
                  <p> City :</p>
                  {user?.address.city}
                </label>
                <label>
                  <p> Zipcode :</p>
                  {user?.address.zipcode}
                </label>
              </div>
              <div className="location">
                  <Map
                    Lat={Number(user?.address.geo.lat)}
                    Lng={Number(user?.address.geo.lng)}
                  />
              </div>
              <div className="position">
                <label>
                  Lat : <span>{user?.address.geo.lat}</span>
                </label>
                <label>
                  Long : <span>{user?.address.geo.lng}</span>
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserDetails;

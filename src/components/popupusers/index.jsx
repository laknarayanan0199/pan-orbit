import React from "react";
import { useNavigate } from "react-router";
import SyncLoader from "react-spinners/SyncLoader";
import { useFetch } from "../utilities/fetchUsers";
import "./popupusers.css";

const PopupUsers = ({ user, id, open, anchorEl, onClose }) => {
  const { users, loading } = useFetch();
  const navigate = useNavigate();
  const users_list = users.filter((u) => u.id !== Number(user?.id));

  return (
    <div className="popup">
      <div className="current__user">
        <img src={user?.profilepicture} alt={user?.name} />
        <h4>{user?.name}</h4>
        <p>{user?.email}</p>
        <div className="popup__list">
          {loading ? (
            <SyncLoader
              color="black"
              size={8}
              cssOverride={{
                margin: "1rem",
                textAlign: "center",
              }}
            />
          ) : (
            <>
              {users_list?.map((user) => (
                <ul
                  key={user.id}
                  className="popup__users"
                  onClick={() => navigate(`/userdetails/profile/${user.id}`)}
                >
                  <img src={user.profilepicture} alt={user.name} />
                  {user.name}
                </ul>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="signout">
        <button onClick={() => navigate("/")}>Sign Out</button>
      </div>
    </div>
  );
};

export default PopupUsers;

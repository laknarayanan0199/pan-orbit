import { useNavigate } from "react-router";
import { SyncLoader } from "react-spinners";
import { useFetch } from "../../utilities/fetchUsers";
import "./users.css";

const Users = () => {
  const { users, loading } = useFetch();

  const navigate = useNavigate();
  const navi = (id) => {
    navigate(`/userdetails/profile/${id}`);
  };

  // console.log("users...", users);

  return (
    <div className="container">
      {loading ? (
        <SyncLoader color="black" />
      ) : (
        <div className="users">
          <h5>Select an account</h5>
          <li className="user__lists">
            {users?.map((user) => (
              <div
                className="user"
                onClick={() => navi(user.id)}
                key={user?.id}
              >
                <img src={user.profilepicture} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ))}
          </li>
        </div>
      )}
    </div>
  );
};

export default Users;

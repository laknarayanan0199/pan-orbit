import React from "react";
import { useParams } from "react-router";

import "./profile.css";
import { useFetch } from "../../components/utilities/fetchUsers";
import Layout from "../../components/layout";
import UserDetails from "../../components/userDetails/index";

const Profile = () => {
  const { id } = useParams();

  const { users } = useFetch();

  const userDetail = users.filter((user) => user.id === Number(id))[0];

  return (
    <>
      <Layout>
        <UserDetails user={userDetail} />
      </Layout>
    </>
  );
};

export default Profile;

import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { avatar_url, login } = user;
  return (
    <div className="card text-center d-block my-2">
      <img
        src={avatar_url}
        alt="person"
        className="rounded-circle my-3"
        style={{ width: "60px" }}
      />
      <h5>{login}</h5>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-3">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;

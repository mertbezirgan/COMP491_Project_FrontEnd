import React, { useEffect, useState } from "react";
import { getCurrentUser, getUserProfile } from "../services/auth.service";
import IUser from "../types/user.type";
import "../css/profile.css";

const Profile: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserProfile().then((data) => {
      if (data) {
        console.log(data);
        setUser(data);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div id="profile">
      <div className="container mt-4">
        {loading ? (
          <div>Is Loading</div>
        ) : (
          <>
            <header className="jumbotron">
              <h3>
                <strong>{user!.username}</strong> Profile
              </h3>
            </header>
            <p></p>
            <p>
              <strong>Id:</strong> {user!.id}
            </p>
            <p>
              <strong>Email:</strong> {user!.email}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;

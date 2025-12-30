import { useEffect, useState } from "react";
import API from "../services/api";

const Profile = ({ setUser }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
  API.get("/users/me").then(res => {
    setProfile(res.data);
    setUser(res.data);
  });
}, [setUser]);


  if (!profile) return <p>Loading...</p>;

  return (
  <div className="profile-wrapper">
    <div className="profile-card-pro">
      <h2>My Profile</h2>

      <div className="profile-item">
        <span className="label">Name</span>
        <span className="value">{profile.fullName}</span>
      </div>

      <div className="profile-item">
        <span className="label">Email</span>
        <span className="value">{profile.email}</span>
      </div>

      <div className="profile-item">
        <span className="label">Role</span>
        <span className={`role-pill ${profile.role}`}>
          {profile.role}
        </span>
      </div>
    </div>
  </div>
);


};

export default Profile;

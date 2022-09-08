import { useContext } from "react";
import { UserProfile } from "../Context/UserProfile";

const Profile = () => {
  const { userProfile } = useContext(UserProfile);

  return (
    <div className="profile">
      <h4 className="profile_heading">{userProfile.username}</h4>
      <img
        src={userProfile.avatar_url}
        alt="user avatar"
        className="profile_icon_image"
        height="150px"
      />
    </div>
  );
};

export default Profile;
